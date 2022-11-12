import { Router } from 'express'

import { indexWelcome } from '../Controllers/index.controller'

const router = Router()

router.route('/')
  .get(indexWelcome)

export default router
