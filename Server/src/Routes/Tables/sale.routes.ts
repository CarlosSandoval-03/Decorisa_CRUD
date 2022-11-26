import { Router } from 'express'
import { createSale, deleteSaleById, getSaleById, getSales, updateSaleById } from '../../Controllers/Tables/sale.controller'



const router = Router()

router.route('/')
  .get(getSales)
  .post(createSale)


router.route('/:id')
  .get(getSaleById)
  .delete(deleteSaleById)
  .put(updateSaleById)

export default router
