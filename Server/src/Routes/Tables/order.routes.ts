import { Router } from 'express'
import { createOrder, deleteOrderById, getOrderById, getOrders, updateOrderById } from '../../Controllers/Tables/order.controller'



const router = Router()

router.route('/')
  .get(getOrders)
  .post(createOrder)


router.route('/:id')
  .get(getOrderById)
  .delete(deleteOrderById)
  .put(updateOrderById)

export default router
