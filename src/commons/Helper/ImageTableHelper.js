/* istanbul ignore file */
import prismaClient from '../../Infrastructures/Prisma/prismaClient';

const ImageTableTestHelper = {
  async addImage(url) {
    const id = `image-${+new Date()}`;

    const imageUrl = url || 'www.google.com';
    const newImage = await prismaClient.images.create({
      data: {
        id,
        image_url: imageUrl,
      },
    });
    return newImage;
  },
  async getRowLength() {
    const images = await prismaClient.images.findMany();
    return images.length;
  },
  async clean() {
    await prismaClient.$executeRaw`TRUNCATE images`;
  },
};
export default ImageTableTestHelper;
