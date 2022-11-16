import { Response } from 'express'
import { QueryError, RowDataPacket } from 'mysql2'

import { executeQuery } from '../database'

export function getAll(res: Response, tableName: string): Response | void {
  executeQuery(`SELECT * FROM ${tableName}`, function(err: QueryError | null, rows: RowDataPacket[]) {
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

export function getElementByEquality(res: Response, { tableName, conditionRow, param }: {tableName: string, conditionRow: string, param: any}): Response | void {
  executeQuery(`SELECT * FROM ${tableName} WHERE ${conditionRow} = ?`, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  },[param])
}

export function createElement(res: Response, { tableName, object }: {tableName: string, object: any}): Response | void {
  executeQuery(`INSERT INTO ${tableName} SET ?`, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json({
        message: `New entry in "${tableName}"`,
        sucursal_creada: object,
        state: rows
      })
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, [object])
}

export function deleteElement(res: Response, { tableName, conditionRow, param }: {tableName: string, conditionRow: string, param: any}): Response | void {
  executeQuery(`DELETE FROM ${tableName} WHERE ${conditionRow} = ?`, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json({
        message: `Entry with '${conditionRow}' = '${param}' deleted from '${tableName}'`,
        sqlReport: rows
      })
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, [param])
}

export function updateElement(res: Response, { tableName, conditionRow, object, param }: {tableName: string, conditionRow: string, object: any, param: any}): Response | void {
  executeQuery(`UPDATE ${tableName} SET ? WHERE ${conditionRow} = '${param}'`, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json({
        message: `Entry with '${conditionRow}' = '${param}', new value in ${tableName}`,
        sqlReport: rows
      })
    }
    res.status(500)
    return res.send({
      err: err
    })
  },[object, param])
}