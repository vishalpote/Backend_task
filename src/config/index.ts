import dotenv from 'dotenv';


// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {


  port:process.env.PORT,
  databaseURL: process.env.MONGODB_URI,
  Mongourl:process.env.MONGODB_URL,
  DBName:process.env.DBNAME

 
};

