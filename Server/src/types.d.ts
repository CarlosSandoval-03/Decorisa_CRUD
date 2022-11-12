// Sucursal
export interface Office {
  suc_direccion: string
  suc_nombre: string
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
  numSalesOfMonth: number
  officeAddress: string
}

// Instalador
export type InstallerSpecialty = 'Cortinas' | 'Pisos'

export interface Installer extends Entity {
  specialty: InstallerSpecialty
  rate: number
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
  flawDescription: string
  cliDoc: Client.doc
  officeAddress: string
}
