// src/app.ts
import express, { Application, application } from 'express';
import connection from './database/database';
import userRoutes from './api/routes/useroutes'
import config from './config/index'
import bodyParser from 'body-parser';
const app:Application = express();

app.use(bodyParser.json());
app.use(express.json());
app.use('/users', userRoutes);
connection();

app.listen(config.port, () => {
      console.log(`Server is running on ${config.port}`);
});


export default app;
