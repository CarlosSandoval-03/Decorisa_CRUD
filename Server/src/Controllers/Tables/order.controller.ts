import { Request, Response } from 'express'

import { Order } from '../../types'
import { createElement, deleteElement, getAll, getElementByEquality, updateElement } from '../crud.controller'

export function getOrders(_req: Request, res: Response): Response | void {
  return getAll(res, 'pedido')
}

export function getOrderById(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'pedido',
    conditionRow: 'ped_id',
    param: req.params.document
  }

  return getElementByEquality(res, obj)
}

export function createOrder(req: Request, res: Response): Response | void {
  const newOrder: Order = req.body
  const obj = {
    tableName: 'pedido',
    object: newOrder
  }

  return createElement(res, obj)
}

export function deleteOrderById(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'pedido',
    conditionRow: 'ped_id',
    param: req.params.document
  }

  return deleteElement(res, obj)
}

export function updateOrderById(req: Request, res: Response): Response | void {
  const newOrder: Order = req.body
  const obj = {
    tableName: 'pedido',
    conditionRow: 'ped_id',
    object: newOrder,
    param: req.params.document
  }

  return updateElement(res,obj)
}