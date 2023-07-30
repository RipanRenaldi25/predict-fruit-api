const getImageExtension = (filename = '') => {
  const splitedFileName = filename.split('.');
  return splitedFileName.slice(splitedFileName.length - 1);
};

export default getImageExtension;
