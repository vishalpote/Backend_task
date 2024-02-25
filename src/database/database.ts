import config from "../config/index";
import mongoose from 'mongoose';

const connection=async()=>{
  try {
    await mongoose.connect(config.databaseURL);
    console.log('Mongo DB connected Successfully...');
  } catch (error) {
    console.log('Error Occour While Connecting Database...',error);
  }
}

export default connection;