import express from 'express'
import dotenv from '@dotenvx/dotenvx'
import connectDB from './config/db.js'
import userRouter from './routes/user.route.js'

dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.use('/api/users', userRouter)

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`)
  await connectDB()
})
