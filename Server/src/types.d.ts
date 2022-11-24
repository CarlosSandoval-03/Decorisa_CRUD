// Sucursal
export interface Office {
  address: string
  name: string
}

// Persona
export interface Entity {
  doc: number
  fullName: string
  numContact: number
}

// Cliente
export interface Client extends Entity {
  address: string
  email: string
}

// Asesor
export interface Adviser extends Entity {
  numSalesOfMonth: number | null
  officeAddress: string
}

// Instalador
export type InstallerSpecialty = 'Cortinas' | 'Pisos'

export interface Installer extends Entity {
  specialty: InstallerSpecialty
  rate: number | null
}

// Cita
export interface Appointment {
  cliDoc: Client.doc
  advDoc: Adviser.doc
  date: Date
  address: string
}

// Producto
export type ProductAction = 'Enrrollable' | 'Panel Japones' | 'Sheer' | 'No Registra'

export interface Product {
  nameId: string
  companyName: string
  cost: number
  operation: ProductAction
  photo: Blob | null
}

export type NonPhotoInfoProduct = Omit<Product, 'photo'>

// Mantenimiento
export type MaintenanceType = 'Reparacion' | 'Lavado' | 'Reparacion y Lavado'

export interface Maintenance {
  id: number
  type: MaintenanceType
  product: string
  flawDescription: string | null
  cliDoc: Client.doc
  officeAddress: Office.address
}

// Venta
export interface Sale {
  id: number
  clientDoc: Client.doc
  adviserDoc: Adviser.doc
  date: Date
  installerDoc: Installer.doc
  price: number | null
}

// Pedido
export interface Order {
  id: number
  paymentMethod: string | null
  shippingDate: Date
  deliveryDate: Date | null
  officeAddress: string
  companyName: string
  saleId: Sale.id
  price: number
}

// Productor
export interface Producer {
  companyName: string
  numContact: number
  nameContact: string
  productsType: string
  purchasesMonth: number | null
}

// Venta_Incluye_Producto
export interface SaleIncludesProduct {
  saleId: Sale.id
  productName: Product.nameId
  producerCompanyName: Producer.companyName
  productWidth: number
  productHeight: number
}