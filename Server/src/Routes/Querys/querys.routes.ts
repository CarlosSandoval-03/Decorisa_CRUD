import { Router } from 'express'
import { getAppointmentsForDay, getAverageDeliveryOfOrder, getCommissionPerAdviser, getMostFrequentClient, getMostSelledProducts, getOrderPerProducer, getPendingAppointmentsByAdvisor, getProductsInPriceRange, getProfitPerProduct, getProfitsPerInstaller } from '../../Controllers/Querys/querys.controller'


const router = Router()

router.route('/ganancias_producto')
  .get(getProfitPerProduct)

router.route('/comision_asesor/:percentaje') // 0:100 int
  .get(getCommissionPerAdviser)

router.route('/productos_intervalo/:interval') // min&max date
  .get(getProductsInPriceRange)

router.route('/citas_pendientes')
    .get(getPendingAppointmentsByAdvisor)

router.route('/ganancias_instalador_intervalo/:interval') // min&max date
  .get(getProfitsPerInstaller)

router.route('/pedidos_mes/:month') // 1:12 int
  .get(getOrderPerProducer)

router.route('/mas_vendidos')
  .get(getMostSelledProducts)

router.route('/citas_programadas/:variables') // YYYY-MM-DD Date
  .get(getAppointmentsForDay)

router.route('/promedio_envio')
  .get(getAverageDeliveryOfOrder)

router.route('/clientes_frecuentes')
  .get(getMostFrequentClient)

  export default router
