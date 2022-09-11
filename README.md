# Decorisa_CRUD

- [Decorisa_CRUD](#decorisa_crud)
  - [Descripción Minimundo a modelar](#descripción-minimundo-a-modelar)
  - [Diagrama E/R del minimundo](#diagrama-er-del-minimundo)
  - [Modelo Relacional](#modelo-relacional)
  - [Diccionario de Datos](#diccionario-de-datos)
    - [Persona](#persona)
    - [Sucursal](#sucursal)
    - [Asesor](#asesor)
    - [Instalador](#instalador)
    - [Cliente](#cliente)
    - [Cita](#cita)
    - [Mantenimiento](#mantenimiento)
    - [Pedido](#pedido)
    - [Productor](#productor)
    - [Producto](#producto)
    - [Venta](#venta)
    - [Venta_Incluye_Producto](#venta_incluye_producto)

## Descripción Minimundo a modelar

Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius praesentium consequatur esse similique error fugit, delectus, velit impedit maxime sapiente architecto accusamus alias id repellendus deleniti vitae amet reiciendis!

## Diagrama E/R del minimundo

![Diagrama ER](https://raw.githubusercontent.com/CarlosSandoval-03/Decorisa_CRUD/develop/src/img/modelo_er_dark.png#gh-dark-mode-only)
![Diagrama ER](https://raw.githubusercontent.com/CarlosSandoval-03/Decorisa_CRUD/develop/src/img/modelo_er_light.png#gh-light-mode-only)

## Modelo Relacional

![Diagrama R](https://raw.githubusercontent.com/CarlosSandoval-03/Decorisa_CRUD/develop/src/img/modelo-relacional.png)

## Diccionario de Datos

### Persona

Descripción: Representa la información general de todas las personas almacenadas en la base de datos.

| Columna            | PK  | FK  | Nulo | Tipo         | Predeterminado | Descripción                                                 |
| ------------------ | --- | --- | ---- | ------------ | -------------- | ----------------------------------------------------------- |
| Per_Documento      | Si  | No  | No   | INT          |                | Identificador único de una persona natural en Colombia      |
| Per_NombreCompleto | No  | No  | No   | VARCHAR(100) |                | Nombre legal de la persona                                  |
| Per_Dirección      | No  | No  | No   | VARCHAR(45)  |                | Información respecto a la ubicación donde la persona reside |

### Sucursal

Descripción: Administración de sucursales para manejo de personal y pedidos.

| Columna       | PK  | FK  | Nulo | Tipo        | Predeterminado | Descripción                                              |
| ------------- | --- | --- | ---- | ----------- | -------------- | -------------------------------------------------------- |
| Suc_Dirección | Si  | No  | No   | VARCHAR(45) |                | Identificador que representa la ubicación de la sucursal |
| Suc_Nombre    | No  | No  | No   | VARCHAR(45) |                |                                                          |

### Asesor

Descripción: Representa la entidad débil respecto a "Persona" donde adquiere una relación con la sucursales y atributos respecto a un conteo sobre sus ventas.

| Columna       | PK  | FK  | Nulo | Tipo        | Predeterminado | Descripción                                                                               |
| ------------- | --- | --- | ---- | ----------- | -------------- | ----------------------------------------------------------------------------------------- |
| Per_Documento | Si  | Si  | No   | INT         |                | Llave foránea que representa la relación entre un asesor y su representación como persona |
| Suc_Dirección | Si  | Si  | No   | VARCHAR(45) |                | Identificador único de la sucursal, que permite reconocer el lugar de trabajo del asesor  |
| Ase_VentasMes | No  | No  | Si   | INT         | 0              | Registro de las ventas realizadas por un asesor                                           |

### Instalador

Descripción: Representa la entidad débil respecto a "Persona" donde adquiere una especialidad y tarifa.

| Columna          | PK  | FK  | Nulo | Tipo        | Predeterminado | Descripción                                                                                   |
| ---------------- | --- | --- | ---- | ----------- | -------------- | --------------------------------------------------------------------------------------------- |
| Per_Documento    | Si  | Si  | No   | INT         |                | Llave foránea que representa la relación entre un instalador y su representación como persona |
| Ins_Especialidad | No  | No  | No   | VARCHAR(45) |                | Representa el servicio que puede brindar                                                      |
| Ins_Tarifa       | No  | No  | No   | INT         |                | Representa costo por el servicio                                                              |

### Cliente

Descripción: Representa la entidad débil respecto a "Persona", donde se permite su relación con una cita, venta o servicio de mantenimiento.

| Columna            | PK  | FK  | Nulo | Tipo        | Predeterminado | Descripción                                                                                |
| ------------------ | --- | --- | ---- | ----------- | -------------- | ------------------------------------------------------------------------------------------ |
| Per_Documento      | Si  | Si  | No   | INT         |                | Llave foránea que representa la relación entre un cliente y su representación como persona |
| cli_NumeroContacto | No  | No  | No   | INT         |                | Representación de el número para contactar al cliente                                      |
| cli_Correo         | No  | No  | Si   | VARCHAR(50) |                | Representación de el correo de contacto                                                    |

### Cita

Descripción: Representa un encuentro entre un asesor y un cliente, es débil respecto a las entidades mencionadas.

| Columna           | PK  | FK  | Nulo | Tipo        | Predeterminado | Descripción                                                    |
| ----------------- | --- | --- | ---- | ----------- | -------------- | -------------------------------------------------------------- |
| Ase_Per_Documento | Si  | Si  | No   | INT         |                | Identificador único del asesor                                 |
| Cli_Per_Documento | Si  | Si  | No   | INT         |                | Identificador único del cliente                                |
| Cit_Fecha         | Si  | No  | No   | DATETIME    |                | Representa la fecha donde se llevara a cabo el encuentro       |
| Cit_Dirección     | No  | No  | No   | VARCHAR(45) |                | Representa el lugar de encuentro donde se lleva a cabo la cita |

### Mantenimiento

Descripción: Representa los servicios de mantenimiento prestados.

| Columna             | PK  | FK  | Nulo | Tipo         | Predeterminado | Descripción                                                    |
| ------------------- | --- | --- | ---- | ------------ | -------------- | -------------------------------------------------------------- |
| Man_Id              | Si  | No  | No   | INT          |                | Identificador único del servicio                               |
| Cli_Per_Documento   | Si  | No  | No   | INT          |                | Identificador único del cliente                                |
| Suc_Dirección       | Si  | No  | No   | VARCHAR(45)  |                | Identificador único de la sucursal                             |
| Man_ProductoReparar | No  | No  | No   | VARCHAR(45)  |                | Representación del producto sobre el que se aplica el servicio |
| Man_Tipo            | No  | No  | No   | VARCHAR(45)  |                | Tipo del mantenimiento aplicado                                |
| Man_Fallas          | No  | No  | Si   | VARCHAR(300) |                | Representación de las fallas encontradas en el servicio        |

### Pedido

Descripción: Representa los pedidos que hace la empresa a diferentes productores, tiene relación con las diferentes sucursales.

| Columna           | PK  | FK  | Nulo | Tipo        | Predeterminado | Descripción                                                                       |
| ----------------- | --- | --- | ---- | ----------- | -------------- | --------------------------------------------------------------------------------- |
| Id_Ped            | Si  | No  | No   | INT         |                | Representa la llave primaria de la entidad Pedido de tipo numérico                |
| Ped_Método        | No  | No  | No   | VARCHAR(45) |                | Método que se empleara para realizar el envió                                     |
| Pro_nombre        | No  | Si  | No   | VARCHAR(45) |                | Indica el nombre del productor que enviara                                        |
| Ped_Fecha_Envió   | No  | No  | No   | DATETIME    |                | Representa la fecha en que se enviara                                             |
| Ped_Fecha_Entrega | No  | No  | No   | DATETIME    |                | Representa la fecha estimada de entrega                                           |
| Suc_Dirección     | No  | Si  | No   | VARCHAR(45) |                | Identificador único de la sucursal, que permite reconocer el lugar donde llegara  |
| Ven_Id            | No  | Si  | No   | INT         |                | Identificador único de la venta, que permite identificar los productos requeridos |

### Productor

Descripción: Representa la información que requiere la empresa sobre los productores con los que trata, donde adquiere una relación con los pedidos y los productos.

| Columna           | PK  | FK  | Nulo | Tipo        | Predeterminado | Descripción                                            |
| ----------------- | --- | --- | ---- | ----------- | -------------- | ------------------------------------------------------ |
| Nombre_Pro        | Si  | No  | No   | VARCHAR(45) |                | Identificador único del productor por medio del nombre |
| Pro_Teléfono      | No  | No  | No   | INT         |                | Representación del medio de contacto con el productor  |
| Pro_Tipo_Producto | No  | No  | No   | VARCHAR(45) |                | Representa la clase del producto que ofrece            |
| Pro_Compras_Mes   | No  | No  | No   | INT         | 0              | Registro de compras realizadas a el productor          |

### Producto

Descripción: Representa las especificaciones de los productos ofrecidos y tiene relación con los productores y las ventas.

| Columna                | PK  | FK  | Nulo | Tipo         | Predeterminado | Descripción                                                                                     |
| ---------------------- | --- | --- | ---- | ------------ | -------------- | ----------------------------------------------------------------------------------------------- |
| Product_nombre         | Si  | No  | No   | VARCHAR(45)  |                | Identificador único del producto por medio del nombre                                           |
| Pro_nombre             | Si  | Si  | No   | VARCHAR(45)  |                | Llave foránea que representa la relación entre el productor y el producto ofrecido por el mismo |
| Product_Precio         | No  | No  | No   | INT          |                | Representa el valor o costo                                                                     |
| Product_Funcionamiento | No  | No  | No   | VARCHAR(300) |                | Especifica el como funciona                                                                     |
| Product_Foto           | No  | No  | No   | LONGBLOB     |                | Representación de manera gráfica o vista previa                                                 |

### Venta

Descripción: Representa todas las transacciones entre Cliente y Asesor, se relaciona con el instalador y el producto además de las entidades Cliente y Asesor.

| Columna       | PK  | FK  | Nulo | Tipo     | Predeterminado | Descripción                                                                 |
| ------------- | --- | --- | ---- | -------- | -------------- | --------------------------------------------------------------------------- |
| Id_Venta      | Si  | No  | No   | INT      |                | Representa la llave primaria de la entidad Venta de tipo numérico           |
| Cli_Documento | No  | Si  | No   | INT      |                | Identificador único del cliente                                             |
| Ase_Documento | No  | Si  | No   | INT      |                | Identificador único del asesor                                              |
| Id_Pedido     | No  | Si  | No   | INT      |                | Identificador único del pedido, que permite identificar la fecha de entrega |
| Fecha         | No  | No  | No   | DATETIME |                | Fecha del dia Representa la fecha cuando se cerro la negociación            |
| Ins_Documento | No  | Si  | No   | INT      |                | Identificador único del instalador                                          |

### Venta_Incluye_Producto

Descripción: Representa las especificaciones de los productos que puede tener una venta.

| Columna        | PK  | FK  | Nulo | Tipo        | Predeterminado | Descripción                                                                           |
| -------------- | --- | --- | ---- | ----------- | -------------- | ------------------------------------------------------------------------------------- |
| Id_Venta       | Si  | Si  | No   | INT         |                | Llave foránea que representa la relación de la venta con los productos                |
| Product_nombre | Si  | Si  | No   | VARCHAR(45) |                | Llave foránea que representa la relación entre la venta de productos con el productor |
| Pro_nombre     | Si  | Si  | No   | VARCHAR(45) |                | Llave foránea que representa la relación de los productos con la venta                |
| Vip_Prod_Ancho | Si  | No  | No   | INT         |                | Identificador único de las especificaciones requeridas para el producto               |
| Vid_Prod_Alto  | Si  | No  | No   | INT         |                | Identificador único de las especificaciones requeridas para el producto               |
| Cantidad       | No  | No  | No   | INT         | 1              | Representa el numero de productos requeridos con las especificaciones dadas           |
