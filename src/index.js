import dotenv from 'dotenv';

import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import createServer from './Interfaces/http/express/CreateServer.js';
import buildContainer from './Infrastructures/Container.js';
import routes from './Interfaces/http/express/api/predict/routes.js';
import loadModel from './Infrastructures/LoadModel.js';
import upload from './Infrastructures/Multer/Upload.js';

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'API Doccumentation for Classification Image API',
      version: '1.0.0',
      description: 'API Doccumentation for Classification Image API',
      contact: {
        name: 'Ripan Renaldi',
        email: 'ripanrenaldi25042002@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./Interfaces/http/express/api/predict/routes.js'],
};

const specs = swaggerJsDoc(options);

dotenv.config();
const app = createServer();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
const main = async (appDependency) => {
  // const modelUrl = 'https://storage.googleapis.com/machine_learning_model_tfjs/tfjsmodel/model.json';
  const mlModel = await loadModel();
  const container = buildContainer(mlModel);
  const routeApi = routes(container, upload);
  app.use(routeApi);

  appDependency.listen(+process.env.APP_PORT, () => {
    console.log(`Server running on PORT ${process.env.APP_PORT}`);
  });
};

main(app);
