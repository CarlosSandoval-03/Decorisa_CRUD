import { Request, Response } from 'express'

import { Office } from '../types'
import { createElement, deleteElement, getAll, getElementByEquality, updateElement } from './crud.controller'

export function getOffices (_req: Request, res: Response): Response | void {
  return getAll(res, 'sucursal')
}

export function getOfficeByAddress (req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'sucursal',
    conditionRow: 'suc_direccion',
    param: req.params.address
  }

  return getElementByEquality(res, obj)
}

export function createOffice (req: Request, res: Response): Response | void {
  const newOffice: Office = req.body
  const obj = {
    tableName: 'sucursal',
    object: newOffice
  }

  return createElement(res, obj)
}

export function deleteOfficeByAddress (req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'sucursal',
    conditionRow: 'suc_direccion',
    param: req.params.address
  }
  return deleteElement(res, obj)
}

export function updateOfficeByAddress (req: Request, res: Response): Response | void {
  const newValueOffice: Office = req.body

  const obj = {
    tableName: 'sucursal',
    conditionRow: 'suc_direccion',
    object: newValueOffice,
    param: req.params.address
  }

  updateElement(res, obj)
}
