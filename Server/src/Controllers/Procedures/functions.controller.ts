import { Request, Response } from 'express'
import { QueryError, RowDataPacket } from 'mysql2'

import { executeQuery } from '../../database'

export function getCostSales(req: Request, res: Response): Response | void {
  let month = req.params.month.split("&").flat()[0]
  if (parseInt(req.params.month.split("&").flat()[0]) < 10) {
      month = '0' + parseInt(req.params.month.split("&").flat()[0])
  }

  executeQuery(`SELECT VentastotalMes(?);`, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, [month])
}

export function getCostSalesInterval(req: Request, res: Response): Response | void {
  executeQuery(`SELECT Valor_ventas_in_range(?, ?);`, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  },  req.params.dateInterval.split("&").flat())
}

export function getCostEffectiveness(req: Request, res: Response): Response | void {
  executeQuery(`SELECT Rentabiliades(?, ?);`, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  },  req.params.dateInterval.split("&").flat())
}