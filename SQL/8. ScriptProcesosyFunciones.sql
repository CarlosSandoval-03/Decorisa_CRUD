/*
-- PROCEDIMIENTOS Y FUNCIONES

-- PROCEDIMIENTOS

-- 1. Inserts
Drop procedure if exists Inserts_Cliente;
DELIMITER $$
Create procedure Inserts_Cliente(In Documento int, Nombre Varchar(100), Direccion Varchar(100), Numero  Bigint, Correo Varchar(100))
BEGIN
	Declare Mensaje varchar(1000) Default 'No se puede realizar la acción';
	If Documento is null or Nombre is null or Direccion is null or Numero is null or Correo is null then
		Select Mensaje;
    Else
		Insert into CLIENTE values (Documento, Nombre, Direccion, Numero, Correo);
	END IF;
END $$
DELIMITER ;
Call Inserts_Cliente('1001316483', 'Gian Lanziano', 'Calle 71B # 89-77 Apto 315', 3188920878, 'glanziano@unal.edu.co');
Select * from CLIENTE; 	

Drop procedure if exists Inserts_Instalador;
DELIMITER $$
Create procedure Inserts_Instalador(In Documento int, Nombre Varchar(100), Numero  Bigint, Especialidad Enum ('Cortinas', 'Pisos' , 'Motores'), Tarifa Int)
BEGIN
	Declare Mensaje varchar(1000) Default 'No se puede realizar la acción';
	If Documento is null or Nombre is null or Numero is null then
		Select Mensaje;
    Else
		Insert into INSTALADOR values (Documento, Nombre, Numero, Especialidad, Tarifa);
	END IF;
END $$
DELIMITER ;
Call Inserts_Instalador(1018515442, 'Manuel Lanziano', 3186610920,'Cortinas', 17000);
Select * from INSTALADOR;

Drop procedure if exists Inserts_Sucursal;
DELIMITER $$
Create procedure Inserts_Sucursal(In Direccion Varchar(100), Nombre Varchar(45))
BEGIN
	Declare Mensaje varchar(1000) Default 'No se puede realizar la acción';
	If Direccion is null or Nombre is null then
		Select Mensaje;
    Else
		Insert into SUCURSAL values (Direccion, Nombre);
	END IF;
END $$
DELIMITER ;
Call Inserts_Sucursal('Cr50 #18-12', 'Decorisa Galerias');
Select * from SUCURSAL;

Drop procedure if exists Inserts_Asesor;
DELIMITER $$
Create procedure Inserts_Asesor(In Documento int, Nombre Varchar(100), Numero  Bigint, VentasMes Smallint, Direccion Varchar(100))
BEGIN
	Declare Mensaje varchar(1000) Default 'No se puede realizar la acción';
	If Documento is null or Nombre is null or Numero is null or Direccion is null then
		Select Mensaje;
    Else
		Insert into ASESOR values (Documento, Nombre, Numero, VentasMes, Direccion);
	END IF;
END $$
DELIMITER ;
Call Inserts_Asesor('20956265', 'Sandra Diaz', 3134217646, 0, 'Cr51 #134-14');
Select * from ASESOR;

Drop procedure if exists Inserts_Productor;
DELIMITER $$
Create procedure Inserts_Productor(In NombreEmpresa Varchar(70), ConAsesor Bigint, NomAsesor Varchar(45), TypProductos  enum('Cortinas', 'Pisos'), ComprasMes Smallint(45))
BEGIN
	Declare Mensaje varchar(1000) Default 'No se puede realizar la acción';
	If NombreEmpresa is null or ConAsesor is null or NomAsesor is null or TypProductos is null then
		Select Mensaje;
    Else
		Insert into PRODUCTOR values (NombreEmpresa, ConAsesor, NomAsesor, Numero, ComprasMes);
	END IF;
END $$
DELIMITER ;
Call Inserts_Productor('Paramount', 3134562372, 'Mireya','Cortinas', '3');
Select * from PRODUCTOR;

Drop procedure if exists Inserts_Venta;
DELIMITER $$
Create procedure Inserts_Venta(In VentaId int, CliDocumento int, AseDocumento int, Ven_fecha Date, InsDocumento int, Precio Bigint)
BEGIN
	Declare Mensaje varchar(1000) Default 'No se puede realizar la acción';
	If VentaId is null or CliDocumento is null or AseDocumento is null or Ven_fecha is null or InsDocumento is null or Precio is null then
		Select Mensaje;
    Else
		Insert into VENTA values (VentaId, CliDocumento, AseDocumento, Ven_fecha, InsDocumento, Precio);
	END IF;
END $$
DELIMITER ;
Call Inserts_Venta(6431, 4322245, 21112922, '2022/11/21', 4556673,0);
Select * from VENTA;

Drop procedure if exists Inserts_Pedido;
DELIMITER $$
Create procedure Inserts_Pedido(In PedId Int, MetodoPago Varchar(45), FechaEnvio Date, FechaEntrega Date, Suc_direccion Varchar(100), NombreEmpresa Varchar(70),
VentaId Int, CostoPed Varchar(45))
BEGIN
	Declare Mensaje varchar(1000) Default 'No se puede realizar la acción';
	If PedId is null or FechaEnvio is null or Suc_direccion is null or NombreEmpresa is null or VentaId is null or CostoPed is null then
		Select Mensaje;
    Else
		Insert into PEDIDO values (PedId, MetodoPago, FechaEnvio, FechaEntrega, Suc_direccion, NombreEmpresa, VentaId, CostoPed);
	END IF;
END $$
DELIMITER ;
Call Inserts_Pedido(408754, 'Efectivo', '2022/03/22', null ,'Cr17 #161-31','VertiBlins',7432,160000);
Select * from PEDIDO;

Drop procedure if exists Inserts_Producto;
DELIMITER $$
Create procedure Inserts_Producto(In Nombre Varchar(100), NombreEmpresa Varchar(70), Precio Int, 
Funcionamiento Enum ('Enrrollable', 'Tradicional' , 'Panel Japones', 'Romana', 'Sheer', 'Vertical', 'Persiana', 'Piso'), Foto LONGBLOB)
BEGIN
	Declare Mensaje varchar(1000) Default 'No se puede realizar la acción';
	If Nombre is null or NombreEmpresa is null or Precio is null or Funcionamiento is null then
		Select Mensaje;
    Else
		Insert into PRODUCTO values (Nombre, NombreEmpresa, Precio, Funcionamiento, Foto);
	END IF;
END $$
DELIMITER ;
Call Inserts_Producto('BlackOut', 'Panorama', 130000, 'Sheer', '');
Select * from PRODUCTO;

Drop procedure if exists Inserts_Mantenimiento;
DELIMITER $$
Create procedure Inserts_Mantenimiento(In Id Int, TypMante Varchar(45), RepareProduct Varchar(100), Fallas Varchar(300), CliDocumento Int, Suc_direccion Varchar(100))
BEGIN
	Declare Mensaje varchar(1000) Default 'No se puede realizar la acción';
	If Id is null or TypMante is null or RepareProduct is null or CliDocumento is null or Suc_direccion is null then
		Select Mensaje;
    Else
		Insert into MANTENIMIENTO values (Id,TypMante,RepareProduct,Fallas,CliDocumento,Suc_direccion);
	END IF;
END $$
DELIMITER ;
Call Inserts_Mantenimiento(4367, 'Mantenimiento Rutina', 'BlackOut', 'Para que perdure la cortina', 5423664,'Cr17 #161-31');
Select * from MANTENIMIENTO;

Drop procedure if exists Inserts_Cita;
DELIMITER $$
Create procedure Inserts_Cita(In CliDocumento Int, AseDocumento Int, Fecha Datetime, Direccion Varchar(70))
BEGIN
	Declare Mensaje varchar(1000) Default 'No se puede realizar la acción';
	If CliDocumento is null or AseDocumento is null or Fecha is null or Direccion is null then
		Select Mensaje;
    Else
		Insert into CITA values (CliDocumento,AseDocumento,Fecha,Direccion);
	END IF;
END $$
DELIMITER ;
Call Inserts_Cita(1001316483, 1000184885, '2022/11/22 11:00', 'Calle 71B # 89-77 Apto 315');
Select * from CITA;

Drop procedure if exists Inserts_VenProdu;
DELIMITER $$
Create procedure Inserts_VenProdu(In VenId Int, NombreProduct Varchar(100), NombreEmpresa Varchar(70), AnchoProduct Float, AltoProduct Float, Cantidad Int)
BEGIN
	Declare Mensaje varchar(1000) Default 'No se puede realizar la acción';
	If VenId is null or NombreProduct is null or NombreEmpresa is null or AnchoProduct is null or AltoProduct is null or Cantidad is null then
		Select Mensaje;
    Else
		Insert into VENTA_INCLUYE_PRODUCTO values (VenId,NombreProduct,NombreEmpresa,AnchoProduct,AltoProduct,Cantidad);
	END IF;
END $$
DELIMITER ;
Call Inserts_VenProdu(6542, 'BlackOut', 'Panorama', 1.80, 1.60, 1);
Select * from VENTA_INCLUYE_PRODUCTO;

-- 3. Deletes
Drop procedure if exists Deletes_Cita;
DELIMITER $$
Create procedure Deletes_Cita(In Atributo1 Varchar(100), Atributo2 Varchar(100))
BEGIN
	If Atributo1 is not null and Atributo2 is not null then 
		Delete from CITA where cli_documento = Atributo1 and ase_documento = Atributo2;
	Else
		If Atributo1 is null and Atributo2 is not null then
			Delete from CITA where ase_documento = Atributo2;
		Else
			If Atributo1 is not null and Atributo2 is null then
				Delete from CITA where cli_documento = Atributo1;
			Else
				Select 'No se puede realizar el borrado';
			END IF;
		END IF;
	 END IF;
END $$
DELIMITER ;
Select * from Cita;
Call Deletes_Cita(7564322,null);
-- Call Deletes_Cita(null,21112922);
-- Call Deletes_Cita(7564322,21112922);
-- Call Deletes_Cita(null,null);
Select * from Cita;

Drop procedure if exists Deletes_Mantenimiento;
DELIMITER $$
Create procedure Deletes_Mantenimiento(In Selector Varchar(100))
BEGIN
	Delete from Mantenimiento where man_id = Selector; 
END $$
DELIMITER ;
Call Deletes_Mantenimiento(cli_documento,5423664);
Call Deletes_Mantenimiento(ase_documento,21112922);
Select * from Cita;
*/
-- TENER EN CUENA DESDE ESTA PARTE ---------------------------------------------------------------------------------------------

-- 3. Ventas entre cierto rango
Drop procedure if exists Ventas_in_range;
DELIMITER $$
Create procedure Ventas_in_range(In Venta_1 date, Venta_2 date)
BEGIN	
	Select ven_id, cli_nombreCompleto, ven_precio from VENTA natural join CLIENTE where ven_fecha Between Venta_1 and Venta_2;
END $$
DELIMITER ;
Call Ventas_in_range('2022/02/10','2022-02-24');

-- 4. Productos de una Venta
Drop procedure if exists Prod_venta;
DELIMITER $$
Create procedure Prod_venta(In IdVenta int)
BEGIN	
	Select * from VENTA_INCLUYE_PRODUCTO where ven_id = IdVenta;
END $$
DELIMITER ;
Call Prod_venta(6542);

-- 5. Detalle de un Venta
Drop procedure if exists Detalles_venta;
DELIMITER $$
Create procedure Detalles_venta(In IdVenta int)
BEGIN	
	Select ven_id, cli_nombreCompleto, ase_nombreCompleto, ven_fecha, ins_nombreCompleto, ven_precio from VENTA natural join CLIENTE natural join ASESOR natural join INSTALADOR where ven_id = IdVenta;
END $$
DELIMITER ;
Call Detalles_venta(6542);

-- 6. Citas pendientes
Drop procedure if exists Citas_pend;
DELIMITER $$
Create procedure Citas_pend()
BEGIN
	Select cli_nombreCompleto, ase_nombreCompleto, cit_fecha, cit_direccion from CITA natural join ASESOR natural join CLIENTE where cit_fecha >= CURDATE();
END $$
DELIMITER ;
Call Citas_pend();


-- FUNCIONES

-- 1. Valor de las Ventas al Mes
Drop function if exists VentastotalMes;
DELIMITER $$
Create function VentastotalMes(Mes Varchar(100)) returns Int deterministic
BEGIN
	Declare Ventas int Default 0;
	Select Sum(ven_precio) into Ventas from VENTA where ven_fecha like Concat('%-',Mes,'-%');
    return Ventas;
END $$
DELIMITER ;

-- 2. Valor de las Ventas entre un rango
Drop function if exists Ventas_in_range;
DELIMITER $$
Create function Ventas_in_range(Venta_1 date, Venta_2 date) returns Int deterministic
BEGIN	
	Declare Valor_Ventas int Default 0;
	Select sum(ven_precio) into Valor_Ventas from VENTA where ven_fecha Between Venta_1 and Venta_2;
    return Valor_Ventas;
END $$
DELIMITER ;
Set @Valor_Ventas = Ventas_in_range('2022/02/10','2022-02-24');
Select @Valor_Ventas;

-- 3. Rentabiliad
Drop function if exists Rentabiliades;
DELIMITER $$
Create function Rentabiliades(Venta_1 date, Venta_2 date) returns Int deterministic
BEGIN	
    Declare Precios_Ventas int Default 0;
    Declare Precios_Pedidos int Default 0;
	Select sum(ven_precio) into Precios_Ventas from VENTA where ven_fecha Between Venta_1 and Venta_2;
    Select sum(ped_costoPed) into Precios_Pedidos from VENTA natural join PEDIDO where ven_fecha Between Venta_1 and Venta_2;
    Set @Rentabilidad = Precios_Ventas - Precios_Pedidos;
    return @Rentabiliad;
END $$
DELIMITER ;
Set @Rentabiliad = Rentabiliades('2022-02-10','2022-02-24');
Select Rentabiliades('2022-02-10','2022-02-24');
