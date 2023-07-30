import UploadedImage from '../../../../Domains/images/entities/UploadedImage';
import ImageToUpload from '../../../../Domains/images/entities/UploadImage';
import ImageRepository from '../../../../Domains/images/ImageRepository';
import TensorflowInterface from '../TensorflowInterface';
import PredictUseCase from '../PredictUseCase';

describe('Predict Use Case', () => {
  it('Should orchestrate correctly', async () => {
    // arrange
    const payload = {
      imageUrl: 'www.google.com',
    };

    const mockUploadedImage = new UploadedImage({
      id: 'image-123',
      imageUrl: payload.imageUrl,
    });

    // prepare instances
    const imageRepository = new ImageRepository();
    const tensorflowInterface = new TensorflowInterface();

    // mock function
    imageRepository.addImage = jest.fn().mockImplementation(() => Promise.resolve(mockUploadedImage));
    tensorflowInterface.predict = jest.fn().mockImplementation(() => Promise.resolve({
      imageUrl: mockUploadedImage.getImageUrl(),
      category: 'mangga harumanis',
      accuracy: '95%',
    }));

    // inject dependencies to use case
    const predictUseCase = new PredictUseCase({
      imageRepository,
      tensorflowInterface,
    });

    // action
    const predictedImage = await predictUseCase.execute(payload);

    // assert
    expect(predictedImage).toEqual({
      imageUrl: mockUploadedImage.getImageUrl(),
      category: 'mangga harumanis',
      accuracy: '95%',
    });

    expect(imageRepository.addImage).toBeCalledWith(new ImageToUpload(payload));
    expect(tensorflowInterface.predict).toBeCalledWith(payload.imageUrl);
  });
});
