import express, { Application } from 'express'
import morgan from 'morgan'

import AuthRoutes from './Routes/auth.routes'

import ClientRoutes from './Routes/Tables/client.routes'
import InstallerRoutes from './Routes/Tables/installer.routes'
import OfficeRoutes from './Routes/Tables/office.routes'
import AdviserRoutes from './Routes/Tables/adviser.routes'
import ProducerRoutes from './Routes/Tables/producer.routes'
import SaleRoutes from './Routes/Tables/sale.routes'
import OrderRoutes from './Routes/Tables/order.routes'
import ProductRoutes from './Routes/Tables/product.routes'
import MaintenanceRoutes from './Routes/Tables/maintenance.routes'
import AppointmentRoutes from './Routes/Tables/appointment.routes'
import SaleIncludesProductRoutes from './Routes/Tables/sale_includes_product.routes'

import QueryRoutes from './Routes/Querys/querys.routes'

import ViewRoutes from './Routes/Views/view.routes'

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

  authRoutes (): void {
    this.app.use('/api',AuthRoutes)
  }

  tablesRoutes (): void {
    this.app.use('/api/cliente', ClientRoutes)
    this.app.use('/api/instalador', InstallerRoutes)
    this.app.use('/api/sucursal', OfficeRoutes)
    this.app.use('/api/asesor', AdviserRoutes)
    this.app.use('/api/productor', ProducerRoutes)
    this.app.use('/api/venta', SaleRoutes)
    this.app.use('/api/pedido', OrderRoutes)
    this.app.use('/api/producto', ProductRoutes)
    this.app.use('/api/mantenimiento', MaintenanceRoutes)
    this.app.use('/api/cita', AppointmentRoutes)
    this.app.use('/api/venta_incluye_producto', SaleIncludesProductRoutes)
  }

  queryRoutes (): void {
    this.app.use('/api/consultas', QueryRoutes)
  }

  viewsRoutes (): void {
    this.app.use('/api/vistas', ViewRoutes)
  }

  routes (): void {
    this.authRoutes();
    this.tablesRoutes();
    this.queryRoutes();
    this.viewsRoutes();
  }

  listen (): void {
    this.app.listen(this.app.get('port'))
    console.log('Server on port', this.app.get('port'))
  }
}
