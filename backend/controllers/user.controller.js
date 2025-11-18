import User from '../models/User.js'
import { generateToken } from '../utils/jwt.js'
import bcrypt from 'bcrypt'

export const signUp = async (req, res) => {
  const { username, email, password, dateOfBirth, gender } = req.body

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] })
    if (existingUser) {
      return res
        .status(400)
        .json({ message: 'Username or email already exists' })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
      username,
      email,
      dateOfBirth,
      gender,
      password: hashedPassword,
    })
    await newUser.save()
    const token = generateToken(newUser._id)
    res.status(201).json({
      id: newUser._id,
      name: newUser.username,
      email: newUser.email,
      token,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Email not found' })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password' })
    }
    const token = generateToken(user._id)
    res
      .status(200)
      .json({ id: user._id, name: user.username, email: user.email, token })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
