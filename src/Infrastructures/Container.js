import { createContainer } from 'instances-container';

// external dependencies
import { v4 } from 'uuid';
import tfjs, {} from '@tensorflow/tfjs';
import canvas from 'canvas';

// services
import ImageRepositoryConcrete from './Repository/ImageRepositoryConcrete.js';
import TensorflowConcrete from './Repository/TensorflowConcrete.js';

// usecase
import PredictUseCase from '../Applications/UseCase/Predicts/PredictUseCase.js';

// interfaces
import TensorflowInterface from '../Applications/UseCase/Predicts/TensorflowInterface.js';
import ImageRepository from '../Domains/images/ImageRepository.js';

// prisma
import prismaClient from './Prisma/prismaClient.js';

// multer
import upload from './Multer/Upload.js';

const buildContainer = (loadedModel) => {
  const container = createContainer();
  container.register([
    {
      key: ImageRepository.name,
      Class: ImageRepositoryConcrete,
      parameter: {
        injectType: 'parameter',
        dependencies: [
          {
            concrete: prismaClient,
          },
          {
            concrete: v4,
          },
        ],
      },
    },
    {
      key: TensorflowInterface.name,
      Class: TensorflowConcrete,
      parameter: {
        injectType: 'destructuring',
        dependencies: [
          {
            name: 'tfjs',
            concrete: tfjs,
          },
          {
            name: 'loadedModel',
            concrete: loadedModel,
          },
          {
            name: 'canvas',
            concrete: canvas,
          },
        ],
      },
    },
    {
      key: PredictUseCase.name,
      Class: PredictUseCase,
      parameter: {
        injectType: 'destructuring',
        dependencies: [
          {
            name: 'imageRepository',
            internal: ImageRepository.name,
          },
          {
            name: 'tensorflowInterface',
            internal: TensorflowInterface.name,
          },
        ],
      },
    },
  ]);
  return container;
};

export default buildContainer;
