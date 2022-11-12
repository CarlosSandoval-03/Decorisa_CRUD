import { Router } from 'express'

import { getOffices, createOffice } from '../Controllers/office.controller'

const router = Router()

router.route('/')
  .get(getOffices)
  .post(createOffice)

export default router
