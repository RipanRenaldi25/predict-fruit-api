import ImageToUpload from '../UploadImage';
/**
 * test case
 * should throw error when image type is not meet data type specification
 * Should throw error when given not needed property
 * Should return image url when invoke getUrl method
 * Should change image url when invoke setUrl method
 */
describe('Image To Upload', () => {
  it('should throw error when image type is not meet data type specification', () => {
    const requestPayload = {
      imageUrl: 123,
    };
    expect(() => new ImageToUpload(requestPayload)).toThrowError('IMAGE.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });
  it('Should throw error when given not needed property', () => {
    const requestPayload = {
      SOMEKEY: 'asddsad',
    };
    expect(() => new ImageToUpload(requestPayload)).toThrowError('IMAGE.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('Should return image url when invoke getUrl method', () => {
    const requestPayload = {
      imageUrl: 'www.google.com',
    };
    const imageToUpload = new ImageToUpload(requestPayload);

    //

    // assert && action
    expect(imageToUpload.getUrl()).toBe(requestPayload.imageUrl);
  });
  it('Should change image url when invoke setUrl method', () => {
    const requestPayload = {
      imageUrl: 'www.google.com',
    };
    const imageToUpload = new ImageToUpload(requestPayload);

    // action
    imageToUpload.setUrl('NEW_URL');

    // assert
    expect(imageToUpload.getUrl()).toBe('NEW_URL');
  });
});
