import { Request, Response } from 'express'

import { Installer } from '../../types'
import { createElement, deleteElement, getAll, getElementByEquality, updateElement } from '../crud.controller'

export function getInstallers(_req: Request, res: Response): Response | void {
  return getAll(res, 'instalador')
}

export function getInstallerByDocument(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'instalador',
    conditionRow: 'ins_documento',
    param: req.params.document
  }

  return getElementByEquality(res, obj)
}

export function createInstaller(req: Request, res: Response): Response | void {
  const newInstaller: Installer = req.body
  const obj = {
    tableName: 'instalador',
    object: newInstaller
  }

  return createElement(res, obj)
}

export function deleteInstallerByDocument(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'instalador',
    conditionRow: 'ins_documento',
    param: req.params.document
  }

  return deleteElement(res, obj)
}

export function updateInstallerByDocument(req: Request, res: Response): Response | void {
  const newInstaller: Installer = req.body
  const obj = {
    tableName: 'instalador',
    conditionRow: 'ins_documento',
    object: newInstaller,
    param: req.params.document
  }

  return updateElement(res,obj)
}