import jwt from 'jsonwebtoken'

export const generateToken = id => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' })
  return token
}

export const verifyToken = token => {
  try {
    const cleanToken = token.startsWith('Bearer ') ? token.slice(7) : token
    const decoded = jwt.verify(cleanToken, process.env.JWT_SECRET)
    return decoded
  } catch (error) {
    return null
  }
}
