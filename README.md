# Decorisa_CRUD

- [Decorisa_CRUD](#decorisa_crud)
  - [Descripcion Minimundo a modelar](#descripcion-minimundo-a-modelar)
  - [Diagrama E/R del minimundo](#diagrama-er-del-minimundo)
  - [Modelo Relacional](#modelo-relacional)
  - [Diccionario de Datos](#diccionario-de-datos)
    - [Tabla Cliente](#tabla-cliente)
    - [Tabla Asesor](#tabla-asesor)
    - [Tabla Instalador](#tabla-instalador)
    - [Tabla Mantenimiento](#tabla-mantenimiento)
    - [Tabla Sucursal](#tabla-sucursal)
    - [Tabla Pedido](#tabla-pedido)
    - [Tabla Productor](#tabla-productor)
    - [Tabla Producto](#tabla-producto)

## Descripcion Minimundo a modelar

## Diagrama E/R del minimundo

![Diagrama ER](https://raw.githubusercontent.com/CarlosSandoval-03/Decorisa_CRUD/develop/src/img/modelo_er_dark.png#gh-dark-mode-only)
![Diagrama ER](https://raw.githubusercontent.com/CarlosSandoval-03/Decorisa_CRUD/develop/src/img/modelo_er_light.png#gh-light-mode-only)

## Modelo Relacional

## Diccionario de Datos

### Tabla Cliente

| Columna       | PK  | FK  | Nulo | Tipo | Predeterminado | Descripcion |
| ------------- | --- | --- | ---- | ---- | -------------- | ----------- |
| Cli_Documento | Si  |     |      |      |                |             |
| Cli_Nombre    |     |     |      |      |                |             |
| Cli_Apellido  |     |     |      |      |                |             |
| Cli_Direccion |     |     |      |      |                |             |
| Cli_Telefono  |     |     |      |      |                |             |
| Cli_Correo    |     |     |      |      |                |             |

### Tabla Asesor

| Columna        | PK  | FK  | Nulo | Tipo | Predeterminado | Descripcion |
| -------------- | --- | --- | ---- | ---- | -------------- | ----------- |
| Ase_Documento  | Si  |     |      |      |                |             |
| Ase_Nombre     |     |     |      |      |                |             |
| Ase_Apellido   |     |     |      |      |                |             |
| Ase_Ventas_Mes |     |     |      |      |                |             |
| Suc_Direccion  |     | Si  |      |      |                |             |

### Tabla Instalador

| Columna          | PK  | FK  | Nulo | Tipo | Predeterminado | Descripcion |
| ---------------- | --- | --- | ---- | ---- | -------------- | ----------- |
| Ins_Documento    |     |     |      |      |                |             |
| Ins_Nombre       |     |     |      |      |                |             |
| Ins_Apellido     |     |     |      |      |                |             |
| Ins_Especialidad |     |     |      |      |                |             |
| Ins_Tarifa       |     |     |      |      |                |             |

### Tabla Mantenimiento

| Columna                   | PK  | FK  | Nulo | Tipo | Predeterminado | Descripcion |
| ------------------------- | --- | --- | ---- | ---- | -------------- | ----------- |
| Id_Mant                   | Si  |     |      |      |                |             |
| Mant_Tipo                 |     |     |      |      |                |             |
| Mant_Producto_Reparar     |     |     |      |      |                |             |
| Mant_Fallas_Identificadas |     |     |      |      |                |             |
| Cli_Documento             |     | Si  |      |      |                |             |
| Suc_Direccion             |     | Si  |      |      |                |             |

### Tabla Sucursal

| Columna       | PK  | FK  | Nulo | Tipo | Predeterminado | Descripcion |
| ------------- | --- | --- | ---- | ---- | -------------- | ----------- |
| Suc_Direccion | Si  |     |      |      |                |             |
| Suc_Nombre    |     |     |      |      |                |             |

### Tabla Pedido

| Columna           | PK  | FK  | Nulo | Tipo | Predeterminado | Descripcion |
| ----------------- | --- | --- | ---- | ---- | -------------- | ----------- |
| Id_Ped            | Si  |     |      |      |                |             |
| Ped_Metodo        |     |     |      |      |                |             |
| Ped_Empresa_Envio |     |     |      |      |                |             |
| Ped_Fecha_Envio   |     |     |      |      |                |             |
| Ped_Fecha_Entrega |     |     |      |      |                |             |
| Suc_Direccion     |     | Si  |      |      |                |             |
| Nombre_Pro        |     | Si  |      |      |                |             |

### Tabla Productor

| Columna           | PK  | FK  | Nulo | Tipo | Predeterminado | Descripcion |
| ----------------- | --- | --- | ---- | ---- | -------------- | ----------- |
| Nombre_Pro        |     |     |      |      |                |             |
| Pro_Telefono      |     |     |      |      |                |             |
| Pro_Tipo_Producto |     |     |      |      |                |             |
| Pro_Compras_Mes   |     |     |      |      |                |             |

### Tabla Producto

| Columna               | PK  | FK  | Nulo | Tipo | Predeterminado | Descripcion |
| --------------------- | --- | --- | ---- | ---- | -------------- | ----------- |
| Produc_Nombre         | Si  |     |      |      |                |             |
| Produc_Alto           |     |     |      |      |                |             |
| Produc_Ancho          |     |     |      |      |                |             |
| Produc_Precio         |     |     |      |      |                |             |
| Produc_Funcionamiento |     |     |      |      |                |             |
| Produc_Foto           |     |     |      |      |                |             |
