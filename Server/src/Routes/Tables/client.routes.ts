import { Router } from 'express'
import { createClient, deleteClientByDocument, getClientByDocument, getClients, updateClientByDocument } from '../../Controllers/Tables/client.controller'

const router = Router()

router.route('/')
  .get(getClients)
  .post(createClient)


router.route('/:document')
  .get(getClientByDocument)
  .delete(deleteClientByDocument)
  .put(updateClientByDocument)

export default router
