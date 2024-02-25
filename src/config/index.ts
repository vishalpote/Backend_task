import dotenv from 'dotenv';


process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

export default  {
  port: process.env.PORT,
  databaseURL: process.env.MONGODB_URI,
  Mongourl: process.env.MONGODB_URL,
  DBName: process.env.DBNAME,
};

