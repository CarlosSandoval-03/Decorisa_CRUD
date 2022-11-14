import { Router } from 'express'

import { createUser } from '../Controllers/auth.controller'

const router = Router()

router.route('/')

router.route('/login')
  .post()

router.route('/register')
  .post(createUser)

export default router
