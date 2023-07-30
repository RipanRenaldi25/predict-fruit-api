import multer from 'multer';
import UniqueImageGenerator from '../../commons/Helper/UniqueImageNameGenerator.js';
import getImageExtension from '../../commons/Helper/SplitImageExtension.js';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${UniqueImageGenerator()}-${file.fieldname}.${getImageExtension(file.originalname)}`);
  },
});

const upload = multer({ storage });

export default upload;
