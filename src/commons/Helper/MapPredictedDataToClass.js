const category = {
  0: 'Alpukat',
  1: 'Apel Envy',
  2: 'Apel Malang',
  3: 'Belimbing',
  4: 'Durian',
  5: 'Jeruk',
  6: 'Mangga Harumanis',
  7: 'Nanas',
  8: 'Pisang Cavendish',
  9: 'Pisang Kepok',
  10: 'Rambutan',
  11: 'Salak',
  12: 'Semangka Merah',
  13: 'Strawberry',
};

const MapPredictedDataToClass = (predictedProbability = []) => {
  const mappedClassification = Array.from(predictedProbability).map((value, index) => ({
    class: category[index],
    probability: value,
  }));
  return mappedClassification;
};

export default MapPredictedDataToClass;
