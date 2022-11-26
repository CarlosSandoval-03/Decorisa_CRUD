import { Request, Response } from 'express'

import { Producer } from '../../types'
import { createElement, deleteElement, getAll, getElementByEquality, updateElement } from '../crud.controller'

export function getProducers(_req: Request, res: Response): Response | void {
  return getAll(res, 'productor')
}

export function getProducerByCompanyName(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'productor',
    conditionRow: 'pro_nombreEmpresa',
    param: req.params.document
  }

  return getElementByEquality(res, obj)
}

export function createProducer(req: Request, res: Response): Response | void {
  const newProducer: Producer = req.body
  const obj = {
    tableName: 'productor',
    object: newProducer
  }

  return createElement(res, obj)
}

export function deleteProducerByCompanyName(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'productor',
    conditionRow: 'pro_nombreEmpresa',
    param: req.params.document
  }

  return deleteElement(res, obj)
}

export function updateProducerByCompanyName(req: Request, res: Response): Response | void {
  const newProducer: Producer = req.body
  const obj = {
    tableName: 'productor',
    conditionRow: 'pro_nombreEmpresa',
    object: newProducer,
    param: req.params.document
  }

  return updateElement(res,obj)
}