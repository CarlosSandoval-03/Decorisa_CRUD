import { Router } from 'express'
import { createSaleIncludesProduct, deleteSaleIncludesProductByPrimaryKey, getSaleIncludesProductByCompanyName, getSaleIncludesProductByPrimaryKey, getSaleIncludesProductByProductName, getSaleIncludesProductByVenId, getSaleIncludesProducts, updateSaleIncludesProductByPrimaryKey } from '../../Controllers/Tables/sale_includes_product.controller'



const router = Router()

router.route('/')
  .get(getSaleIncludesProducts)
  .post(createSaleIncludesProduct)

  router.route('/atributo/ven_id/:ven_id')
  .get(getSaleIncludesProductByVenId)

router.route('/atributo/pro_nombreId/:pro_nombreId')
  .get(getSaleIncludesProductByProductName)

router.route('/atributo/productor_pro_nombreEmpresa/:productor_pro_nombreEmpresa')
  .get(getSaleIncludesProductByCompanyName)

  router.route('/key/:key')
  .get(getSaleIncludesProductByPrimaryKey)
  .delete(deleteSaleIncludesProductByPrimaryKey)
  .put(updateSaleIncludesProductByPrimaryKey)

export default router
