import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'
// to use our own IP address (for MONGODB_URI) we have to whitelist it first

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    )
    console.log(
      `\n MONGODB CONNECTED !! DB HOST : ${connectionInstance.connection.host}`
    )
  } catch (error) {
    console.log('MONGODB CONNECTION FAILED ', error)
    process.exit(1)
  }
}

export default connectDB
