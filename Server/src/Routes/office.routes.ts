import { Router } from 'express'

import { getOffices, getOfficeByName, createOffice, deleteOffice, updateOffice } from '../Controllers/office.controller'

const router = Router()

router.route('/')
  .get(getOffices)
  .post(createOffice)

router.route('/:name')
  .get(getOfficeByName)
  .delete(deleteOffice)
  .put(updateOffice)

export default router
