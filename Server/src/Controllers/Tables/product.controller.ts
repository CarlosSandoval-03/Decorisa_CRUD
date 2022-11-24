import { Request, Response } from 'express'

import { Product } from '../../types'
import { createElement, deleteElement, deleteElementForMultipleRows, getAll, getElementByEquality, getElementByMultipleRowEquality, updateElement, updateElementForMultipleRows } from '../crud.controller'

export function getProducts(_req: Request, res: Response): Response | void {
  return getAll(res, 'producto')
}

export function getProductByName(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'producto',
    conditionRow: 'pro_nombreId',
    param: req.params.nombre_producto
  }

  return getElementByEquality(res, obj)
}

export function getProductByCompanyName(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'producto',
    conditionRow: 'pro_nombreEmpresa',
    param: req.params.nombre_empresa
  }

  return getElementByEquality(res, obj)
}

export function getProductByPrimaryKey(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'producto',
    conditionRows: ['pro_nombreId', 'pro_nombreEmpresa'],
    params: req.params.llave.split('&')
  }

  return getElementByMultipleRowEquality(res, obj)
}

export function createProduct(req: Request, res: Response): Response | void {
  const newProduct: Product = req.body
  const obj = {
    tableName: 'producto',
    object: newProduct
  }

  return createElement(res, obj)
}

export function deleteProductByName(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'producto',
    conditionRow: 'pro_nombreId',
    param: req.params.nombre_producto
  }

  return deleteElement(res, obj)
}

export function deleteProductByCompanyName(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'producto',
    conditionRow: 'pro_nombreEmpresa',
    param: req.params.nombre_empresa
  }

  return deleteElement(res, obj)
}

export function deleteProductByPrimaryKey(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'producto',
    conditionRows: ['pro_nombreId', 'pro_nombreEmpresa'],
    params: req.params.llave.split('&')
  }

  return deleteElementForMultipleRows(res, obj)
}

export function updateProductByName(req: Request, res: Response): Response | void {
  const newProduct: Product = req.body
  const obj = {
    tableName: 'producto',
    conditionRow: 'pro_nombreId',
    object: newProduct,
    param: req.params.nombre_producto
  }

  return updateElement(res,obj)
}

export function updateProductByCompanyName(req: Request, res: Response): Response | void {
  const newProduct: Product = req.body
  const obj = {
    tableName: 'producto',
    conditionRow: 'pro_nombreEmpresa',
    object: newProduct,
    param: req.params.nombre_empresa
  }

  return updateElement(res,obj)
}

export function updateProductByPrimaryKey(req: Request, res: Response): Response | void {
  const newProduct: Product = req.body
  const obj = {
    tableName: 'producto',
    conditionRows: ['pro_nombreId', 'pro_nombreEmpresa'],
    object: newProduct,
    params: req.params.llave.split('&')
  }

  return updateElementForMultipleRows(res, obj)
}