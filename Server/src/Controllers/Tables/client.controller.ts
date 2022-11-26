import { Request, Response } from 'express'

import { Client } from '../../types'
import { createElement, deleteElement, getAll, getElementByEquality, updateElement } from '../crud.controller'

export function getClients(_req: Request, res: Response): Response | void {
  return getAll(res, 'cliente')
}

export function getClientByDocument(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'cliente',
    conditionRow: 'cli_documento',
    param: req.params.document
  }

  return getElementByEquality(res, obj)
}

export function createClient(req: Request, res: Response): Response | void {
  const newClient: Client = req.body
  const obj = {
    tableName: 'cliente',
    object: newClient
  }

  return createElement(res, obj)
}

export function deleteClientByDocument(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'cliente',
    conditionRow: 'cli_documento',
    param: req.params.document
  }

  return deleteElement(res, obj)
}

export function updateClientByDocument(req: Request, res: Response): Response | void {
  const newClient: Client = req.body
  const obj = {
    tableName: 'cliente',
    conditionRow: 'cli_documento',
    object: newClient,
    param: req.params.document
  }

  return updateElement(res,obj)
}