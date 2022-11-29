import { Request, Response } from 'express'
import { QueryError, RowDataPacket } from 'mysql2'

import { executeQuery } from '../../database'

export function getSalesBetweenDates(req: Request, res: Response): Response | void {
  executeQuery(`CALL Ventas_in_range(?, ?)`, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, req.params.dateInterval.split("&").flat())
}

export function getProductsOfSale(req: Request, res: Response): Response | void {
  executeQuery(`CALL Prod_venta(?)`, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, [req.params.idVenta])
}

export function getDetailOfSale(req: Request, res: Response): Response | void {
  executeQuery(`CALL Detalles_venta(?)`, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, [req.params.idVenta])
}

export function getPendingAppointments(_req: Request, res: Response): Response | void {
  executeQuery(`CALL Citas_pend()`, function(err: QueryError | null, rows: RowDataPacket[]) {
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