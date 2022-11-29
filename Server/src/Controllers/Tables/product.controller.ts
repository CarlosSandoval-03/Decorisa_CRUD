import { Request, Response } from 'express'

import { Product } from '../../types'
import { createElement, deleteElementForMultipleRows, getAll, getElementByEquality, getElementByMultipleRowEquality, updateElementForMultipleRows } from '../crud.controller'

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
    params: req.params.key.split('&')
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

export function deleteProductByPrimaryKey(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'producto',
    conditionRows: ['pro_nombreId', 'pro_nombreEmpresa'],
    params: req.params.key.split('&')
  }

  return deleteElementForMultipleRows(res, obj)
}

export function updateProductByPrimaryKey(req: Request, res: Response): Response | void {
  const newProduct: Product = req.body
  const obj = {
    tableName: 'producto',
    conditionRows: ['pro_nombreId', 'pro_nombreEmpresa'],
    object: newProduct,
    params: req.params.key.split('&')
  }

  return updateElementForMultipleRows(res, obj)
}

// Indice
export function getProductByFunc(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'producto',
    conditionRow: 'pro_funcionamiento',
    param: req.params.pro_funcionamiento
  }

  return getElementByEquality(res, obj)
}