import { Router } from 'express'
import { signUp, login } from '../controllers/user.controller.js'
import { authenticate } from '../middleware/auth.js'

const router = Router()

router.post('/signup', signUp)
router.post('/login', login)

export default router
