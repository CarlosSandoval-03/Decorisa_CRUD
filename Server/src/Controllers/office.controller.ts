import { Request, Response } from 'express'
import { QueryError, RowDataPacket } from 'mysql2'

import { executeQuery } from '../database'
import { Office } from '../types'

export function getOffices (_req: Request, res: Response): Response | void {
  executeQuery('SELECT * FROM sucursal' ,function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  })
}

export function getOfficeByAddress (req: Request, res: Response): Response | void {
  const officeAddress = req.params.address
  executeQuery('SELECT * FROM sucursal WHERE suc_direccion = ?', function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, [officeAddress])
}

export function createOffice (req: Request, res: Response): Response | void {
  const newOffice: Office = req.body
  executeQuery('INSERT INTO sucursal SET ?', function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json({
        message: 'New entry in Sucursal',
        sucursal_creada: newOffice,
        state: rows
      })
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, [newOffice])
}

export function deleteOfficeByAddress (req: Request, res: Response): Response | void {
  const address = req.params.address
  executeQuery('DELETE FROM sucursal WHERE suc_direccion = ?', function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json({
        message: `Entry '${address}' deleted`,
        sqlReport: rows
      })
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, [address])
}

export function updateOfficeByAddress (req: Request, res: Response): Response | void {
  const address = req.params.address
  const newValueOffice: Office = req.body

  executeQuery('UPDATE sucursal SET ? WHERE suc_direccion = ?', function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json({
        message: `Entry '${address}' updated`,
        sqlReport: rows
      })
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, [newValueOffice, address])
}
