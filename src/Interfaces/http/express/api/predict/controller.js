import PredictUseCase from '../../../../../Applications/UseCase/Predicts/PredictUseCase.js';

class PredictController {
  static async predictImage(req, res) {
    try {
      const services = await req.services;
      const predictUseCase = services.getInstance(PredictUseCase.name);
      const tfService = services.getInstance('TensorflowInterface');
      const predictedImage = await predictUseCase.execute({
        imageUrl: req.file.path,
      });
      const topThree = tfService.getTopThreeProbability();
      res.send({ status: 'success', message: 'predicted', data: topThree });
    } catch (e) {
      console.log(e.message);
      res.send(e);
    }
  }
}

export default PredictController;
