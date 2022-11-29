import { Router } from 'express'
import { createInstaller, deleteInstallerByDocument, getInstallerByDocument, getInstallers, updateInstallerByDocument } from '../../Controllers/Tables/installer.controller'

const router = Router()

router.route('/')
  .get(getInstallers)
  .post(createInstaller)


router.route('/:document')
  .get(getInstallerByDocument)
  .delete(deleteInstallerByDocument)
  .put(updateInstallerByDocument)

export default router
