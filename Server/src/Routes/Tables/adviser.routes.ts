import { Router } from 'express'
import { createAdviser, deleteAdviserByDocument, getAdvisers, getAdviserByDocument, updateAdviserByDocument } from '../../Controllers/Tables/adviser.controller'


const router = Router()

router.route('/')
  .get(getAdvisers)
  .post(createAdviser)


router.route('/:document')
  .get(getAdviserByDocument)
  .delete(deleteAdviserByDocument)
  .put(updateAdviserByDocument)

export default router
