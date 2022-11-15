import express, { Application } from 'express'
import morgan from 'morgan'

import AuthRoutes from './Routes/auth.routes'
import PostRoutes from './Routes/office.routes'
import ClientRoutes from './Routes/client.routes'

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
    this.app.use(express.json())
  }

  routes (): void {
    this.app.use('/api',AuthRoutes)
    this.app.use('/api/sucursal', PostRoutes)
    this.app.use('/api/cliente', ClientRoutes)
  }

  listen (): void {
    this.app.listen(this.app.get('port'))
    console.log('Server on port', this.app.get('port'))
  }
}
