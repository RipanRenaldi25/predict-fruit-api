class UploadedImage {
  constructor(payload) {
    this._validate(payload);
    this._id = payload.id;
    this._imageUrl = payload.imageUrl;
  }

  getId() {
    return this._id;
  }

  getImageUrl() {
    return this._imageUrl;
  }

  _validate(payload) {
    const { id, imageUrl } = payload;
    if (!imageUrl) {
      throw new Error('UPLOADED_IMAGE.NOT_CONTAIN_NEEDED_PROPERTY');
    }
    if (typeof (id) !== 'string' || typeof (imageUrl) !== 'string') {
      throw new Error('UPLOADED_IMAGE.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

export default UploadedImage;
