import { Router } from 'express'
import { getEarnings, getPendingOrders, getSaveDataAdvisor, getSellsAdvisor, getTotalProfits } from '../../Controllers/Views/views.controller'


const router = Router()

router.route('/pedidos_pendientes')
  .get(getPendingOrders)

router.route('/ganacias_brutas')
  .get(getTotalProfits)

router.route('/ganancias_netas')
  .get(getEarnings)

router.route('/info_segura_asesor')
  .get(getSaveDataAdvisor)

router.route('/ventas_asesor')
  .get(getSellsAdvisor)

  export default router
