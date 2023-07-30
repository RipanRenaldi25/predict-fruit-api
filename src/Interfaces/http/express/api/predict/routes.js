import express from 'express';
import PredictController from './controller.js';

/**
 * @swagger
 * /predict:
 *   post:
 *     summary: Predict an image
 *     requestBody:
 *       required: true
 *       content: application/json
 */

const routes = (services, multerUpload) => {
  const router = express.Router();
  router.use((req, res, next) => {
    req.services = services;
    next();
  });
  router.post('/predict', multerUpload.single('image'), PredictController.predictImage);
  return router;
};

export default routes;
