import tfjs from '@tensorflow/tfjs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// // USE THIS IF MODEL NOT DEPLOYED ON CLOUD PROVIDER
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const modelPath = join(__dirname, '..', 'models', 'tfjsmodel', 'model.json');

// const loadModel = async () => {
//   console.log('Load Model');
//   const modelJson = JSON.parse(fs.readFileSync(modelPath, 'utf-8'));
//   const model = await tfjs.loadLayersModel(tfjs.io.fromMemory(modelJson));
//   console.log('Model Loaded');
//   return model;
// };
// export default loadModel;

// USE THIS IF MODEL DEPLOYED IN CLOUD PROVIDER
const loadModel = async () => {
  console.log('Load Model');
  // const modelJson = JSON.parse(fs.readFileSync(modelPath, 'utf-8'));
  const model = await tfjs.loadLayersModel('https://storage.googleapis.com/test_model_buahin/tfjsmodel/model.json');
  console.log('Model Loaded');
  return model;
};
export default loadModel;
