import { Request, Response } from 'express'
import { QueryError, RowDataPacket } from 'mysql2'

import { executeQuery } from '../../database'


export function getPendingOrders(_req: Request, res: Response): Response | void {
  executeQuery('SELECT * FROM vw_pedidos_pendientes', function(err: QueryError | null, rows: RowDataPacket[]) {
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

export function getTotalProfits(_req: Request, res: Response): Response | void {
  executeQuery('SELECT * FROM Ven_GanBruta', function(err: QueryError | null, rows: RowDataPacket[]) {
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

export function getEarnings(_req: Request, res: Response): Response | void {
  executeQuery('SELECT * FROM Ganancias_ped', function(err: QueryError | null, rows: RowDataPacket[]) {
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

export function getSaveDataAdvisor(_req: Request, res: Response): Response | void {
  executeQuery('SELECT * FROM Info_Asesor', function(err: QueryError | null, rows: RowDataPacket[]) {
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

export function getSellsAdvisor(_req: Request, res: Response): Response | void {
  executeQuery('SELECT * FROM Ase_num_ven', function(err: QueryError | null, rows: RowDataPacket[]) {
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