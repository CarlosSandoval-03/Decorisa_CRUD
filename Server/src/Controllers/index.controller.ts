import { Request, Response } from 'express'

export function indexWelcome (_req: Request, res: Response): Response {
  return res.json('Welcome to my API')
}
