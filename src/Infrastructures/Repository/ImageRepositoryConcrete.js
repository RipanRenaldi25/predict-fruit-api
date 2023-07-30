import ImageRepository from '../../Domains/images/ImageRepository.js';
import UploadedImage from '../../Domains/images/entities/UploadedImage.js';

class ImageRepositoryConcrete extends ImageRepository {
  constructor(client, idGenerator) {
    super();
    this._client = client;
    this._idGenerator = idGenerator;
  }

  async addImage(imageToUploadeInstance) {
    const id = `image-${this._idGenerator()}`;
    const newImage = await this._client.images.create({
      data: {
        id,
        image_url: imageToUploadeInstance.getUrl(),
      },
    });
    return new UploadedImage({
      id: newImage.id,
      imageUrl: newImage.image_url,
    });
  }
}

export default ImageRepositoryConcrete;
