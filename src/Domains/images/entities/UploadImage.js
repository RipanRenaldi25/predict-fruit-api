class ImageToUpload {
  constructor(imagePayload) {
    const { imageUrl } = imagePayload;
    this._validate(imageUrl);
    this._imageUrl = imageUrl;
  }

  setUrl(newUrl) {
    this._imageUrl = newUrl;
  }

  getUrl() {
    return this._imageUrl;
  }

  _validate(url) {
    if (!url) {
      throw new Error('IMAGE.NOT_CONTAIN_NEEDED_PROPERTY');
    }
    if (typeof url !== 'string') {
      throw new Error('IMAGE.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

export default ImageToUpload;
