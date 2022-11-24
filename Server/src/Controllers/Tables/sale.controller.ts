import { Request, Response } from 'express'

import { Sale } from '../../types'
import { createElement, deleteElement, getAll, getElementByEquality, updateElement } from '../crud.controller'

export function getSales(_req: Request, res: Response): Response | void {
  return getAll(res, 'venta')
}

export function getSaleById(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'venta',
    conditionRow: 'ven_id',
    param: req.params.document
  }

  return getElementByEquality(res, obj)
}

export function createSale(req: Request, res: Response): Response | void {
  const newSale: Sale = req.body
  const obj = {
    tableName: 'venta',
    object: newSale
  }

  return createElement(res, obj)
}

export function deleteSaleById(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'venta',
    conditionRow: 'ven_id',
    param: req.params.document
  }

  return deleteElement(res, obj)
}

export function updateSaleById(req: Request, res: Response): Response | void {
  const newSale: Sale = req.body
  const obj = {
    tableName: 'venta',
    conditionRow: 'ven_id',
    object: newSale,
    param: req.params.document
  }

  return updateElement(res,obj)
}