import TensorflowInterface from '../../Applications/UseCase/Predicts/TensorflowInterface.js';
import MapPredictedDataToClass from '../../commons/Helper/MapPredictedDataToClass.js';

class TensorflowConcrete extends TensorflowInterface {
  constructor({ tfjs, loadedModel, canvas }) {
    super();
    this._result = [];
    this._tfjs = tfjs;
    this._loadedModel = loadedModel;
    this._createCanvas = canvas.createCanvas;
    this._loadImage = canvas.loadImage;
  }

  getUrl() {
    return this._url;
  }

  getLoadedModel() {
    return this._loadedModel;
  }

  async predict(imageUrl) {
    const canvas = this._createCanvas(200, 200);
    const ctx = canvas.getContext('2d');
    // load image
    const image = await this._loadImage(imageUrl);
    ctx.drawImage(image, 0, 0, 200, 200);

    const imageData = ctx.getImageData(0, 0, 200, 200);

    const tensorImage = this.imageToTensor(imageData);
    const response = await this._loadedModel.predict(tensorImage);
    const result = await response.data();
    this._result = MapPredictedDataToClass(result);
    return this._result;
  }

  async loadModel(url) {
    console.log('Load Model');
    this._loadedModel = await this._tfjs.loadLayersModel(url);
    console.log('Model Loaded');
  }

  imageToTensor(imageData) {
    const tensorImage = this._tfjs.tensor3d(imageData.data, [200, 200, 4], 'float32');
    const normalizedTensorImage = tensorImage.slice([0, 0, 0], [200, 200, 3]).div(this._tfjs.scalar(255));

    // Mengubah dimensi tensor menjadi bentuk yang sesuai dengan input model
    const reshapedTensorImage = normalizedTensorImage.expandDims();
    return reshapedTensorImage;
  }

  getTopThreeProbability() {
    const newData = [...this._result];
    return newData.sort((a, b) => b.probability - a.probability).slice(0, 3);
  }
}

export default TensorflowConcrete;
