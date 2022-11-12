import { Request, Response } from 'express'

import { connect } from '../database'

export async function getOffices (_req: Request, res: Response): Promise<Response> {
  const conn = await connect(process.env.DB_TEST_USER ?? '', process.env.DB_TEST_PASSWORD ?? '')
  const offices = await conn.query('SELECT * FROM sucursal')
  return res.json(offices[0])
}
