import express from 'express'
import dotenv from '@dotenvx/dotenvx'
import connectDB from './config/db.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`)
  await connectDB()
})
