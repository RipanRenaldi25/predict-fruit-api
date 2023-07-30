import TensorflowInterface from '../TensorflowInterface';

/**
 * It should throw error when invoke predict method
 * it should throw error when invoke loadModel method
 */

describe('Tensor Flow Interface', () => {
  it('Should throw error when invoke predict method', async () => {
    const tensorflowInterface = new TensorflowInterface();
    await expect(tensorflowInterface.predict('')).rejects.toThrowError('ABSTRACT_CLASS.METHOD_NOT_IMPLEMENTED');
  });
  it('Should throw error when invoke loadModel method', async () => {
    const tensorflowInterface = new TensorflowInterface();
    await expect(tensorflowInterface.loadModel('')).rejects.toThrowError('ABSTRACT_CLASS.METHOD_NOT_IMPLEMENTED');
  });
});
