import { Router } from 'express'
import { getCostEffectiveness, getCostSales, getCostSalesInterval } from '../../Controllers/Procedures/functions.controller'


const router = Router()

router.route('/costo_ventas_mes/:month')
  .get(getCostSales)

router.route('/costo_ventas_rango/:dateInterval')
  .get(getCostSalesInterval)

router.route('/rentabilidad/:dateInterval')
  .get(getCostEffectiveness)

export default router
