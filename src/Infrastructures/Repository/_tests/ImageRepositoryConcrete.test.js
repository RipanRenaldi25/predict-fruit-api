import ImageRepositoryConcrete from '../ImageRepositoryConcrete';
import prismaClient from '../../Prisma/prismaClient';
import ImageToUpload from '../../../Domains/images/entities/UploadImage';
import UploadedImage from '../../../Domains/images/entities/UploadedImage';
import ImageTableTestHelper from '../../../commons/Helper/ImageTableHelper';

/**
 * test case
 * Should return correct property
 */

describe('Image Repository Concrete', () => {
  afterAll(async () => {
    await ImageTableTestHelper.clean();
  });
  it('Should return correct property', async () => {
    const payload = new ImageToUpload({
      imageUrl: 'www.google.com',
    });
    const idGenerator = () => '123';
    const imageRepository = new ImageRepositoryConcrete(prismaClient, idGenerator);
    const uploadedImage = await imageRepository.addImage(payload);

    expect(uploadedImage).toStrictEqual(new UploadedImage({
      id: 'image-123',
      imageUrl: payload.getUrl(),
    }));
  });
});
