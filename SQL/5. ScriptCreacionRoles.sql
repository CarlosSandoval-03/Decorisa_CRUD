DROP ROLE if exists ADMINISTRADOR;
Create Role ADMINISTRADOR ;
GRANT ALL privileges On proyectobd.* TO ADMINISTRADOR;
show grants for ADMINISTRADOR;

Create  user if not exists'gloria isabel Feo Leon'@'localhost' IDENTIFIED by '12345';
-- Grant all privileges on proyectobd.* to 'gloria isabel Feo Leon'@'localhost';

GRANT ADMINISTRADOR to 'gloria isabel Feo Leon'@'localhost';
SET DEFAULT ROLE ADMINISTRADOR TO 'gloria isabel Feo Leon'@'localhost';
show grants for 'gloria isabel Feo Leon'@'localhost';

DROP  ROLE IF EXISTS ASESOR;
Create Role ASESOR;
GRANT ALL privileges On proyectobd.PRODUCTO TO ASESOR;
GRANT ALL privileges On proyectobd.CITA  TO ASESOR;
GRANT INSERT, SELECT, UPDATE ON proyectobd.CLIENTE TO ASESOR;
GRANT INSERT, SELECT, UPDATE ON proyectobd.PEDIDO to ASESOR;
GRANT INSERT, SELECT, UPDATE ON proyectobd.MANTENIMIENTO to ASESOR;
GRANT INSERT, SELECT, UPDATE ON proyectobd.VENTA_INCLUYE_PRODUCTO to ASESOR;
GRANT  SELECT ON proyectobd.INSTALADOR to ASESOR;
GRANT  SELECT ON proyectobd.SUCURSAL to ASESOR;
GRANT  SELECT ON proyectobd.PRODUCTOR to ASESOR;
GRANT  SELECT ON proyectobd.INFO_ASESOR to ASESOR;
GRANT  INSERT,SELECT ON proyectobd.VENTA to ASESOR;
GRANT  SELECT, UPDATE ON proyectobd.vw_pedidos_pendientes to ASESOR;

Create user if not exists 'Juan David Palacios'@'localhost' IDENTIFIED by '12345';
Grant ASESOR to 'Juan David Palacios'@'localhost';
SET DEFAULT ROLE ASESOR TO 'Juan David Palacios'@'localhost';

show grants for 'Juan David Palacios'@'localhost';

DROP  ROLE IF EXISTS CLIENTE;
Create Role CLIENTE;
GRANT SELECT ON proyectobd.SUCURSAL to CLIENTE;
GRANT SELECT ON proyectobd.PRODUCTO to CLIENTE;

Create user if not exists 'Reina Velazques'@'localhost' IDENTIFIED by '12345';
Grant CLIENTE to 'Reina Velazques'@'localhost';
SET DEFAULT ROLE CLIENTE TO 'Reina Velazques'@'localhost';
show grants for 'Reina Velazques'@'localhost';
