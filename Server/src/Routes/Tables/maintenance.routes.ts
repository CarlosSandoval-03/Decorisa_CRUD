import { Router } from 'express'
import { getMaintenanceById, getMaintenances, createMaintenance, deleteMaintenanceById, updateMaintenanceById } from '../../Controllers/Tables/maintenance.controller'

const router = Router()

router.route('/')
  .get(getMaintenances)
  .post(createMaintenance)


router.route('/:document')
  .get(getMaintenanceById)
  .delete(deleteMaintenanceById)
  .put(updateMaintenanceById)

export default router
