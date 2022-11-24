import { Request, Response } from 'express'

import { SaleIncludesProduct } from '../../types'
import { createElement, deleteElementForMultipleRows, getAll, getElementByEquality, getElementByMultipleRowEquality, updateElementForMultipleRows } from '../crud.controller'

export function createSaleIncludesProduct(req: Request, res: Response): Response | void {
  const newSaleIncludesProduct: SaleIncludesProduct = req.body
  const obj = {
    tableName: 'venta_incluye_producto',
    object: newSaleIncludesProduct
  }

  return createElement(res, obj)
}

export function getSaleIncludesProducts(_req: Request, res: Response): Response | void {
  return getAll(res, 'venta_incluye_producto')
}

export function getSaleIncludesProductByPrimaryKey(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'venta_incluye_producto',
    conditionRows: ['ven_id', 'pro_nombreId', 'productor_pro_nombreEmpresa'],
    params: req.params.key.split('&')
  }

  return getElementByMultipleRowEquality(res, obj)
}

export function deleteSaleIncludesProductByPrimaryKey(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'venta_incluye_producto',
    conditionRows: ['ven_id', 'pro_nombreId', 'productor_pro_nombreEmpresa'],
    params: req.params.key.split('&')
  }

  return deleteElementForMultipleRows(res, obj)
}

export function updateSaleIncludesProductByPrimaryKey(req: Request, res: Response): Response | void {
  const newSaleIncludesProduct: SaleIncludesProduct = req.body
  const obj = {
    tableName: 'venta_incluye_producto',
    conditionRows: ['ven_id', 'pro_nombreId', 'productor_pro_nombreEmpresa'],
    object: newSaleIncludesProduct,
    params: req.params.key.split('&')
  }

  return updateElementForMultipleRows(res, obj)
}

export function getSaleIncludesProductByVenId(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'venta_incluye_producto',
    conditionRow: 'ven_id',
    param: req.params.ven_id
  }

  return getElementByEquality(res, obj)
}

export function getSaleIncludesProductByProductName(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'venta_incluye_producto',
    conditionRow: 'pro_nombreId',
    param: req.params.pro_nombreId
  }

  return getElementByEquality(res, obj)
}

export function getSaleIncludesProductByCompanyName(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'venta_incluye_producto',
    conditionRow: 'productor_pro_nombreEmpresa',
    param: req.params.productor_pro_nombreEmpresa
  }

  return getElementByEquality(res, obj)
}