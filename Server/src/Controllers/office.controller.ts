import { Request, Response } from 'express'

import { connect } from '../database'
import { Office } from '../types'

export function getOffices (_req: Request, res: Response): Response {
  const promiseConnect = connect(process.env.DB_TEST_USER ?? '', process.env.DB_TEST_PASSWORD ?? '')

  const promiseQuery = promiseConnect.then(async conn => {
    const offices = await conn.query('SELECT * FROM sucursal')
    res.json(offices[0])
    res.status(200)
  })

  promiseQuery.catch(error => {
    console.error(error)
    res.status(500)
  })
  return res
}

export function getOfficeByName (req: Request, res: Response): Response {
  const promiseConnect = connect(process.env.DB_TEST_USER ?? '', process.env.DB_TEST_PASSWORD ?? '')
  const name = req.params.name

  const promiseQuery = promiseConnect.then(async conn => {
    const office = await conn.query('SELECT * FROM sucursal WHERE suc_nombre = ?', [name])
    res.json(office[0])
    res.status(200)
  })

  promiseQuery.catch(error => {
    console.error(error)
    res.status(500)
  })

  return res
}

export function createOffice (req: Request, res: Response): Response {
  const newOffice: Office = req.body

  const promiseConnect = connect(process.env.DB_TEST_USER ?? '', process.env.DB_TEST_PASSWORD ?? '')

  const promiseQuery = promiseConnect.then(async conn => {
    const data = await conn.query('INSERT INTO sucursal SET ?', [newOffice])

    res.json({
      message: 'New entry in Sucursal',
      sucursal_creada: newOffice,
      state: data[0]
    })
    res.status(200)
  })

  promiseQuery.catch(error => {
    console.error(error)
    res.status(500)
  })

  return res
}

export function deleteOffice (req: Request, res: Response): Response {
  const promiseConnect = connect(process.env.DB_TEST_USER ?? '', process.env.DB_TEST_PASSWORD ?? '')
  const name = req.params.name

  const promiseQuery = promiseConnect.then(async conn => {
    const office = await conn.query('DELETE FROM sucursal WHERE suc_nombre = ?', [name])
    res.json({
      message: `Entry '${name}' deleted`,
      sqlReport: office[0]
    })
    res.status(200)
  })

  promiseQuery.catch(error => {
    console.error(error)
    res.status(500)
  })

  return res
}

export function updateOffice (req: Request, res: Response): Response {
  const promiseConnect = connect(process.env.DB_TEST_USER ?? '', process.env.DB_TEST_PASSWORD ?? '')
  const name = req.params.name
  const newValueOffice: Office = req.body

  const promiseQuery = promiseConnect.then(async conn => {
    const office = await conn.query('UPDATE sucursal SET ? WHERE suc_nombre = ?', [newValueOffice, name])
    res.json({
      message: `Entry '${name}' updated`,
      sqlReport: office[0]
    })
    res.status(200)
  })

  promiseQuery.catch(error => {
    console.error(error)
    res.status(500)
  })

  return res
}
