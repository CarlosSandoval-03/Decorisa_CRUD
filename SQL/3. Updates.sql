-- 1. Datos del Cliente
SELECT * FROM CLIENTE WHERE cli_nombreCompleto = 'Reina Velazquez';
UPDATE CLIENTE SET cli_direccion = 'Calle 71B #89-77' WHERE cli_nombreCompleto = 'Reina Velazquez';
SELECT * FROM CLIENTE WHERE cli_nombreCompleto = 'Reina Velazquez';
-- 2. Datos del Instalador
SELECT * FROM INSTALADOR WHERE int_nombreCompleto = 'Jose Marciales';
UPDATE INSTALADOR SET int_numContacto = 3188920878 WHERE int_nombreCompleto = 'Jose Marciales';
SELECT * FROM INSTALADOR WHERE int_nombreCompleto = 'Jose Marciales';
-- 3. Datos del Asesor
SELECT * FROM ASESOR WHERE SUCURSAL_suc_direccion = 'Cr51 #134-14';
UPDATE ASESOR SET SUCURSAL_suc_direccion = 'Cr35a #57 91' WHERE SUCURSAL_suc_direccion = 'Cr51 #134-14';
SELECT * FROM ASESOR WHERE SUCURSAL_suc_direccion = 'Cr51 #134-14';
-- 4. Datos del productor
SELECT * FROM PRODUCTOR WHERE pro_nombre_asesor = 'Sandra';
UPDATE PRODUCTOR SET pro_nombre_asesor = 'Mireya', pro_contactoAsesor = '3186610920' WHERE pro_nombre_asesor = 'Sandra';
SELECT * FROM PRODUCTOR WHERE pro_nombre_asesor = 'Sandra';
-- 5. Fecha de la venta
SELECT * FROM VENTA WHERE ven_fecha = '2022/08/31';
UPDATE VENTA SET ven_fecha = '2022/10/31' WHERE ven_fecha = '2022/08/31';
SELECT * FROM VENTA WHERE ven_fecha = '2022/08/31';
-- 6. Fecha de entrega del pedido
SELECT * FROM PEDIDO WHERE ped_fechaEntrega is null;
UPDATE PEDIDO SET ped_fechaEntrega = CURDATE() WHERE ped_fechaEntrega is null;
SELECT * FROM PEDIDO WHERE ped_fechaEntrega is null;
-- 7. Precio del producto
SELECT * FROM PRODUCTO WHERE pro_precio = 120000;
UPDATE PRODUCTO SET pro_precio = 125000 WHERE pro_precio = 120000;
SELECT * FROM PRODUCTO WHERE pro_precio = 120000;
-- 8. Fallas para el mantenimiento
SELECT * FROM MANTENIMIENTO WHERE man_fallas like '%mecanismo%';
UPDATE MANTENIMIENTO SET man_tipoMante = 'Reparacion y Lavado', man_fallas = 'fallo en el mecanismo y limpieza general' WHERE man_fallas like '%mecanismo%';
SELECT * FROM MANTENIMIENTO WHERE man_fallas like '%mecanismo%';
-- 9. Fecha de la Cita 
SELECT * FROM CITA WHERE cit_fecha = '2022/07/10 14:00';
UPDATE CITA SET cit_fecha = '2022/07/10 12:00' WHERE cit_fecha = '2022/07/10 14:00';
SELECT * FROM CITA WHERE cit_fecha = '2022/07/10 14:00';
-- 10. Cantidad de productos en la venta
SELECT * FROM VENTA_INCLUYE_PRODUCTO WHERE pro_nombreId = 'Sheer Screen blanca' AND vip_prod_ancho = 1.70;
UPDATE VENTA_INCLUYE_PRODUCTO SET vip_cantidad = 1 WHERE pro_nombreId = 'Sheer Screen blanca' AND vip_prod_ancho = 1.70;
SELECT * FROM VENTA_INCLUYE_PRODUCTO WHERE pro_nombreId = 'Sheer Screen blanca' AND vip_prod_ancho = 1.70;