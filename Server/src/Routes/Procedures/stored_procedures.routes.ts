import { Router } from 'express'
import { getDetailOfSale, getPendingAppointments, getProductsOfSale, getSalesBetweenDates } from '../../Controllers/Procedures/stored_procedures.controller'


const router = Router()

router.route('/ventas_rango/:dateInterval') // YYYY-MM-DD
  .get(getSalesBetweenDates)

router.route('/productos_venta/:idVenta')
  .get(getProductsOfSale)

router.route('/detalle_venta/:idVenta')
  .get(getDetailOfSale)

router.route('/citas_pendientes')
  .get(getPendingAppointments)

export default router
