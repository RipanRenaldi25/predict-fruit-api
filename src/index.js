import dotenv from 'dotenv';
import app from './app/app.js';

dotenv.config();

const main = (appDependency = app) => {
  appDependency.get('/', (req, res) => {
    res.send('hello world');
  });

  appDependency.listen(+process.env.APP_PORT, () => {
    console.log(`Server running on PORT ${process.env.APP_PORT}`);
  });
};

main(app);
