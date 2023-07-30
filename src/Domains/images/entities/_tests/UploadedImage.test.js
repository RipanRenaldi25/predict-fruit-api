import UploadedImage from '../UploadedImage';

/**
 * test case
 * Should contain needed property
 * Should meet data type specification
 * Should return properly when invoke getClass or get Accuracy method
 */

describe('Uploaded Image', () => {
  it('Should contain needed property', () => {
    const payload = {
      username: 'fjdaksl0',
      category: 'mangga',
      id: '123',
    };

    expect(() => new UploadedImage(payload)).toThrowError('UPLOADED_IMAGE.NOT_CONTAIN_NEEDED_PROPERTY');
  });
  it('Should meet data type specification', () => {
    const payload = {
      id: '123',
      imageUrl: 123,
    };

    expect(() => new UploadedImage(payload)).toThrowError('UPLOADED_IMAGE.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });
  it('Should return properly when invoke getCategory or get Accuracy method', () => {
    const payload = {
      id: '123',
      imageUrl: 'www.google.com',
    };
    const uploadedImage = new UploadedImage(payload);
    expect(uploadedImage.getId()).toBe(payload.id);
    expect(uploadedImage.getImageUrl()).toBe(payload.imageUrl);
  });
});
