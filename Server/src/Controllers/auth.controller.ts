import { Request, Response } from 'express'

export function createUser (_req: Request, res: Response): Response {
  res.json({
    error: null,
    data: 'User Created'
  })

  return res
}
