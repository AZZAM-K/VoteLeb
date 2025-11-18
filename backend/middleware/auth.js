import User from '../models/User.js'
import { verifyToken } from '../utils/jwt.js'

export const authenticate = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '')

  if (!token) {
    return res.status(401).json({ message: 'No token provided' })
  }

  try {
    const decoded = verifyToken(token)
    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' })
    }
    const user = await User.findById(decoded.id).select('-password')
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
    req.userId = user._id
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}
