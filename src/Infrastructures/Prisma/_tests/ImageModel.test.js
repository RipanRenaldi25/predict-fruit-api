import ImageTableTestHelper from '../../../commons/Helper/ImageTableHelper';
import prismaClient from '../prismaClient';
/**
 * test case
 * Should persist new image on database
 * Should return correct property
 */

describe('Image Model', () => {
  afterEach(async () => {
    await ImageTableTestHelper.clean();
  });
  afterAll(async () => {
    await ImageTableTestHelper.clean();
    await prismaClient.$disconnect();
  });

  it('Should persist new image on database', async () => {
    await ImageTableTestHelper.addImage('www.unsplash.com');
    const length = await ImageTableTestHelper.getRowLength();
    console.log({ length });
    expect(length).toBe(1);
  });

  it('Should return correct property', async () => {
    const addedImages = await ImageTableTestHelper.addImage('www.unsplash.com');
    expect(addedImages.id).toBeDefined();
    expect(addedImages.image_url).toBeDefined();
    expect(addedImages.image_url).toBe('www.unsplash.com');
  });
});
