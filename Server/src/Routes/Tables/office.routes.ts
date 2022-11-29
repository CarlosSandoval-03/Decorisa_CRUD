import { Router } from 'express'

import { getOffices, getOfficeByAddress, createOffice, deleteOfficeByAddress, updateOfficeByAddress } from '../../Controllers/Tables/office.controller'

const router = Router()

router.route('/')
  .get(getOffices)
  .post(createOffice)

router.route('/:address')
  .get(getOfficeByAddress)
  .delete(deleteOfficeByAddress)
  .put(updateOfficeByAddress)

export default router
