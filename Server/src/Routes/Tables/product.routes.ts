import { Router } from 'express'
import { createProduct, deleteProductByPrimaryKey, getProductByCompanyName, getProductByFunc, getProductByName, getProductByPrimaryKey, getProducts, updateProductByPrimaryKey } from '../../Controllers/Tables/product.controller'



const router = Router()

router.route('/')
  .get(getProducts)
  .post(createProduct)

router.route('/atributo/pro_nombre/:nombre_producto')
  .get(getProductByName)

router.route('/atributo/pro_empresa/:nombre_empresa')
  .get(getProductByCompanyName)

router.route('/atributo/pro_funcionamiento/:pro_funcionamiento')
  .get(getProductByFunc)

router.route('/key/:key')
  .get(getProductByPrimaryKey)
  .delete(deleteProductByPrimaryKey)
  .put(updateProductByPrimaryKey)

export default router
