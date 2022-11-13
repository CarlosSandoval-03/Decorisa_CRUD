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

export function createOffice (req: Request, res: Response): Response {
  const newOffice: Office = req.body

  const promiseConnect = connect(process.env.DB_TEST_USER ?? '', process.env.DB_TEST_PASSWORD ?? '')

  const promiseQuery = promiseConnect.then(async conn => {
    const data = await conn.query(`INSERT INTO sucursal VALUES ('${newOffice.suc_direccion}', '${newOffice.suc_nombre}')`)

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
