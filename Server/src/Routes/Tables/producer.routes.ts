import { Router } from 'express'
import { createProducer, deleteProducerByCompanyName, getProducerByCompanyName, getProducers, updateProducerByCompanyName } from '../../Controllers/Tables/producer.controller'



const router = Router()

router.route('/')
  .get(getProducers)
  .post(createProducer)


router.route('/:companyName')
  .get(getProducerByCompanyName)
  .delete(deleteProducerByCompanyName)
  .put(updateProducerByCompanyName)

export default router
