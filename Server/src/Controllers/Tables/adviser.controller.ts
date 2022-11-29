import { Request, Response } from 'express'

import { Adviser } from '../../types'
import { createElement, deleteElement, getAll, getElementByEquality, updateElement } from '../crud.controller'

export function getAdvisers(_req: Request, res: Response): Response | void {
  return getAll(res, 'asesor')
}

export function getAdviserByDocument(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'asesor',
    conditionRow: 'ase_documento',
    param: req.params.document
  }

  return getElementByEquality(res, obj)
}

export function createAdviser(req: Request, res: Response): Response | void {
  const newAdviser: Adviser = req.body
  const obj = {
    tableName: 'asesor',
    object: newAdviser
  }

  return createElement(res, obj)
}

export function deleteAdviserByDocument(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'asesor',
    conditionRow: 'ase_documento',
    param: req.params.document
  }

  return deleteElement(res, obj)
}

export function updateAdviserByDocument(req: Request, res: Response): Response | void {
  const newAdviser: Adviser = req.body
  const obj = {
    tableName: 'asesor',
    conditionRow: 'ase_documento',
    object: newAdviser,
    param: req.params.document
  }

  return updateElement(res,obj)
}

// Indice
export function getAdviserByName(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'asesor',
    conditionRow: 'ase_nombreCompleto',
    param: req.params.ase_nombreCompleto
  }
  return getElementByEquality(res, obj)
}