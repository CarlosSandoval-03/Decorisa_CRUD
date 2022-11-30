-- Cita
SET @CLIENTE = 5423664;
DELETE FROM cita WHERE cli_documento = @CLIENTE;

SET @ASESOR = 21112922;
DELETE FROM cita WHERE ase_documento = @ASESOR;

SELECT * FROM cita;

-- Instalador
SET @CEDULA_INSTALADOR = 3112386;
DELETE FROM instalador WHERE ins_documento = @CEDULA_INSTALADOR;
SELECT * FROM instalador;

-- Mantenimiento
SET @MAN_ID_REFERENCE = 2342;
DELETE FROM mantenimiento WHERE man_id = @MAN_ID_REFERENCE;
SELECT * FROM mantenimiento;

-- Producto
SET @NOMBRE_PRODUCTO = "Sheer Elegance Tiny gris";
DELETE FROM producto WHERE pro_nombreId = @NOMBRE_PRODUCTO;
SELECT * FROM producto;

-- Productor
SET @NOMBRE_PRODUCTOR = "Interxab";
DELETE FROM productor WHERE pro_nombreEmpresa = @NOMBRE_PRODUCTOR;
SELECT * FROM productor;

-- Venta
SET @VENTA_ID = 2251;
DELETE FROM venta WHERE ven_id = @VENTA_ID;
SELECT * FROM pedido;
SELECT * FROM venta;
SELECT * FROM venta_incluye_producto;

SELECT * FROM (pedido JOIN venta USING (ven_id) JOIN venta_incluye_producto USING (ven_id));
