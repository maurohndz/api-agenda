import { errorHandling } from '@Utils/errorHandling';
import express from 'express';
import bodyParser from 'body-parser';
import config from '@Config/environment';
import routes from './routes';

// App express
const app = express();
//
app.set('env', process.env.ENVIRONMENT);

// Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(`/api/${config.API.VERSION}`, routes);
app.use(errorHandling());

app.listen(config.API.PORT, () => {
  console.log(
    `Backend App is running at http://localhost:${config.API.PORT}/api/${
      config.API.VERSION
    } in ${app.get('env')} mode`
  );
});
