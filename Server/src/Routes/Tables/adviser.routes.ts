import { Router } from 'express'
import { createAdviser, deleteAdviserByDocument, getAdvisers, getAdviserByDocument, updateAdviserByDocument, getAdviserByName } from '../../Controllers/Tables/adviser.controller'


const router = Router()

router.route('/')
  .get(getAdvisers)
  .post(createAdviser)


router.route('/:document')
  .get(getAdviserByDocument)
  .delete(deleteAdviserByDocument)
  .put(updateAdviserByDocument)

router.route('/atributo/ase_nombreCompleto/:ase_nombreCompleto')
  .get(getAdviserByName)

export default router
