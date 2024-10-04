// dotenv by require
// require('dotenv').config({ path: './env' })

// dotenv by import
import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({ path: './env' })

connectDB()
