class TensorflowInterface {
  async predict(url) {
    throw new Error('ABSTRACT_CLASS.METHOD_NOT_IMPLEMENTED');
  }

  async loadModel(url) {
    throw new Error('ABSTRACT_CLASS.METHOD_NOT_IMPLEMENTED');
  }
}

export default TensorflowInterface;
