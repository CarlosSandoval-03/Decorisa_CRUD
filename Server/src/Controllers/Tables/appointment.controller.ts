import { Request, Response } from 'express'

import { Appointment } from '../../types'
import { createElement, deleteElement, deleteElementForMultipleRows, getAll, getElementByEquality, getElementByMultipleRowEquality, updateElementForMultipleRows } from '../crud.controller'

export function getAppointments(_req: Request, res: Response): Response | void {
  return getAll(res, 'cita')
}

export function getAppointmentByDate(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'cita',
    conditionRow: 'cit_fecha',
    param: req.params.cit_fecha
  }

  return getElementByEquality(res, obj)
}

export function getAppointmentByAdviserId(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'cita',
    conditionRow: 'ase_documento',
    param: req.params.ase_documento
  }

  return getElementByEquality(res, obj)
}

export function getAppointmentByClientId(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'cita',
    conditionRow: 'cli_documento',
    param: req.params.cli_documento
  }

  return getElementByEquality(res, obj)
}

export function getAppointmentByPrimaryKey(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'cita',
    conditionRows: ['cit_fecha', 'ase_documento', 'cli_documento'],
    params: req.params.key.split('&')
  }

  return getElementByMultipleRowEquality(res, obj)
}

export function createAppointment(req: Request, res: Response): Response | void {
  const newAppointment: Appointment = req.body
  const obj = {
    tableName: 'cita',
    object: newAppointment
  }

  return createElement(res, obj)
}

export function deleteAppointmentByPrimaryKey(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'cita',
    conditionRows: ['cit_fecha', 'ase_documento', 'cli_documento'],
    params: req.params.key.split('&')
  }

  return deleteElementForMultipleRows(res, obj)
}

export function updateAppointmentByPrimaryKey(req: Request, res: Response): Response | void {
  const newAppointment: Appointment = req.body
  const obj = {
    tableName: 'cita',
    conditionRows: ['cit_fecha', 'ase_documento', 'cli_documento'],
    object: newAppointment,
    params: req.params.key.split('&')
  }

  return updateElementForMultipleRows(res, obj)
}


export function deleteAppointmentByCliendId(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'cita',
    conditionRow: 'cli_documento',
    param: req.params.cli_documento
  }

  return deleteElement(res, obj)
}

export function deleteAppointmentByAdviserId(req: Request, res: Response): Response | void {
  const obj = {
    tableName: 'cita',
    conditionRow: 'ase_documento',
    param: req.params.ase_documento
  }

  return deleteElement(res, obj)
}