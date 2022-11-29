import { Router } from 'express'
import { createClient, deleteClientByDocument, getClientByDocument, getClientByName, getClients, updateClientByDocument } from '../../Controllers/Tables/client.controller'

const router = Router()

router.route('/')
  .get(getClients)
  .post(createClient)


router.route('/:document')
  .get(getClientByDocument)
  .delete(deleteClientByDocument)
  .put(updateClientByDocument)

router.route('/atributo/cli_nombreCompleto/:cli_nombreCompleto')
  .get(getClientByName)

export default router
