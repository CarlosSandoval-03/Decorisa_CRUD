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

function getConditionForMultipleParams({ conditionRows, params }: { conditionRows: string[], params: any[] }): String | undefined {
  if (conditionRows.length !== params.length) {
    return undefined;
  }

  let query = `WHERE`;
  for (let i = 0; i < conditionRows.length; i++) {
    query += ` ${conditionRows[i]} = ?`
    if (i !== conditionRows.length - 1) query += ' AND'
  }
  return query;
}

export function getElementByMultipleRowEquality(res: Response, { tableName, conditionRows, params }: { tableName: string, conditionRows: string[], params: any[] }): Response | void {
  const multipleParamsCondition = getConditionForMultipleParams({ conditionRows, params })
  if (!multipleParamsCondition) {
    res.status(500)
    return res.send({
      err: 'INVALID NUMBER OF CONDITIONS VALUES'
    })
  }

  let query = `SELECT * FROM ${tableName} ` + multipleParamsCondition;
  executeQuery(query, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  },[params])
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

export function deleteElementForMultipleRows(res: Response, { tableName, conditionRows, params }: { tableName: string, conditionRows: string[], params: any[] }): Response | void {
  const multipleParamsCondition = getConditionForMultipleParams({ conditionRows, params })
  if (!multipleParamsCondition) {
    res.status(500)
    return res.send({
      err: 'INVALID NUMBER OF CONDITIONS VALUES'
    })
  }

  let query = `DELETE * FROM ${tableName} ` + multipleParamsCondition;
  executeQuery(query, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json({
        message: `Entry deleted from '${tableName}'`,
        sqlReport: rows
      })
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, [params])
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

export function updateElementForMultipleRows(res: Response, { tableName, conditionRows, object, params }: { tableName: string, conditionRows: string[], object: any, params: any[] }): Response | void {
  const multipleParamsCondition = getConditionForMultipleParams({ conditionRows, params })
  if (!multipleParamsCondition) {
    res.status(500)
    return res.send({
      err: 'INVALID NUMBER OF CONDITIONS VALUES'
    })
  }

  let query = `UPDATE ${tableName} SET ? ` + multipleParamsCondition;
  executeQuery(query, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json({
        message: `Entry updated from '${tableName}'`,
        sqlReport: rows
      })
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, [object, params].flat())
}