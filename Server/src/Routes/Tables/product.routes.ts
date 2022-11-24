import { Router } from 'express'
import { createProduct, deleteProductByCompanyName, deleteProductByName, deleteProductByPrimaryKey, getProductByCompanyName, getProductByName, getProductByPrimaryKey, getProducts, updateProductByCompanyName, updateProductByName, updateProductByPrimaryKey } from '../../Controllers/Tables/product.controller'



const router = Router()

router.route('/')
  .get(getProducts)
  .post(createProduct)

  router.route('/atributo/pro_nombre/:nombre_producto')
  .get(getProductByName)
  .delete(deleteProductByName)
  .put(updateProductByName)

router.route('/atributo/pro_empresa/:nombre_empresa')
  .get(getProductByCompanyName)
  .delete(deleteProductByCompanyName)
  .put(updateProductByCompanyName)

  router.route('/llave/:llave')
  .get(getProductByPrimaryKey)
  .delete(deleteProductByPrimaryKey)
  .put(updateProductByPrimaryKey)

export default router
