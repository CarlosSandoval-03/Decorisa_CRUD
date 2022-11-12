import { Router } from 'express'

import { getOffices } from '../Controllers/office.controller'

const router = Router()

router.route('/')
  .get(getOffices)

export default router
