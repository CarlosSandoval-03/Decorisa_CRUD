import { Request, Response } from 'express'

import { Maintenance } from '../../types'
import { createElement, deleteElement, getAll, getElementByEquality, updateElement } from '../crud.controller'

export function getMaintenances(_req: Request, res: Response): Response | void {
  return getAll(res, 'mantenimiento')
}

export function getMaintenanceById(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'mantenimiento',
    conditionRow: 'man_id',
    param: req.params.document
  }

  return getElementByEquality(res, obj)
}

export function createMaintenance(req: Request, res: Response): Response | void {
  const newMaintenance: Maintenance = req.body
  const obj = {
    tableName: 'mantenimiento',
    object: newMaintenance
  }

  return createElement(res, obj)
}

export function deleteMaintenanceById(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'mantenimiento',
    conditionRow: 'man_id',
    param: req.params.document
  }

  return deleteElement(res, obj)
}

export function updateMaintenanceById(req: Request, res: Response): Response | void {
  const newMaintenance: Maintenance = req.body
  const obj = {
    tableName: 'mantenimiento',
    conditionRow: 'man_id',
    object: newMaintenance,
    param: req.params.document
  }

  return updateElement(res,obj)
}