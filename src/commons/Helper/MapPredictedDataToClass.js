const category = {
  0: 'Alpukat',
  1: 'Apel Envy',
  2: 'Apel Malang',
  3: 'Belimbing',
  4: 'Jeruk',
  5: 'Mangga Harumanis',
  6: 'Nanas',
  7: 'Pisang Cavendish',
  8: 'Pisang Kepok',
  9: 'Semangka Merah',
  10: 'Durian',
  11: 'Rambutan',
  12: 'Salak',
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
