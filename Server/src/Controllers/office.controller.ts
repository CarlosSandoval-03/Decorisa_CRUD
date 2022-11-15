import { Request, Response } from 'express'
import { QueryError, RowDataPacket } from 'mysql2'

import { connect } from '../database'
import { Office } from '../types'

export function getOffices (_req: Request, res: Response): Response | void {
  const pool = connect(process.env.DB_TEST_USER ?? '', process.env.DB_TEST_PASSWORD ?? '')
  pool.query('SELECT * FROM sucursal', function(err: QueryError | null, rows: RowDataPacket[]) {
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
  const pool = connect(process.env.DB_TEST_USER ?? '', process.env.DB_TEST_PASSWORD ?? '')
  const officeAddress = req.params.address
  pool.query('SELECT * FROM sucursal WHERE suc_direccion = ?', [officeAddress], function(err: QueryError | null, rows: RowDataPacket[]) {
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

export function createOffice (req: Request, res: Response): Response | void {
  const pool = connect(process.env.DB_TEST_USER ?? '', process.env.DB_TEST_PASSWORD ?? '')
  const newOffice: Office = req.body
  pool.query('INSERT INTO sucursal SET ?', [newOffice], function(err: QueryError | null, rows: RowDataPacket[]) {
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
  })

}

export function deleteOfficeByAddress (req: Request, res: Response): Response | void {
  const pool = connect(process.env.DB_TEST_USER ?? '', process.env.DB_TEST_PASSWORD ?? '')
  const address = req.params.address

  pool.query('DELETE FROM sucursal WHERE suc_direccion = ?', [address], function(err: QueryError | null, rows: RowDataPacket[]) {
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
  })
}

export function updateOfficeByAddress (req: Request, res: Response): Response | void {
  const pool = connect(process.env.DB_TEST_USER ?? '', process.env.DB_TEST_PASSWORD ?? '')
  const address = req.params.address
  const newValueOffice: Office = req.body

  pool.query('UPDATE sucursal SET ? WHERE suc_direccion = ?', [newValueOffice, address], function(err: QueryError | null, rows: RowDataPacket[]) {
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
  })
}
