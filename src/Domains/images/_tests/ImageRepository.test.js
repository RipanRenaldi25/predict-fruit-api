import ImageRepository from '../ImageRepository';

/**
 * test case
 * Should throw error when invoke Image Repository addImage method
 */

describe('Image Repository Interface', () => {
  it('Should throw error when invoke Image Repository addImage method', async () => {
    const payload = {
      id: 'image-123',
      image_url: 'www.google.com',
    };
    const imageRepositoryInterface = new ImageRepository();

    await expect(imageRepositoryInterface.addImage(payload)).rejects.toThrowError('ABSTRACT_CLASS.METHOD_NOT_IMPLEMENTED');
  });
});
