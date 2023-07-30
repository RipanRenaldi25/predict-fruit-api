import ImageToUpload from '../../../Domains/images/entities/UploadImage.js';

class PredictUseCase {
  constructor({ imageRepository, tensorflowInterface }) {
    this._imageRepository = imageRepository;
    this._tensorflowInterface = tensorflowInterface;
  }

  async execute(usecasePayload) {
    const imageToUpload = new ImageToUpload(usecasePayload);
    await this._imageRepository.addImage(imageToUpload);
    console.log({ url: imageToUpload.getUrl() });
    const predictedImage = await this._tensorflowInterface.predict(imageToUpload.getUrl());

    return predictedImage;
  }
}

export default PredictUseCase;
