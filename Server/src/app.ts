import express, { Application } from 'express'
import morgan from 'morgan'

import IndexRoutes from './Routes/index.routes'
import PostRoutes from './Routes/office.routes'

export class App {
  private readonly app: Application

  constructor (private readonly port?: number | string) {
    this.app = express()
    this.settings()
    this.middlewares()
    this.routes()
  }

  settings (): void {
    this.app.set('port', this.port ?? process.env.PORT ?? 5500)
  }

  middlewares (): void {
    this.app.use(morgan('dev'))
  }

  routes (): void {
    this.app.use(IndexRoutes)
    this.app.use('/sucursales', PostRoutes)
  }

  listen (): void {
    this.app.listen(this.app.get('port'))
    console.log('Server on port', this.app.get('port'))
  }
}