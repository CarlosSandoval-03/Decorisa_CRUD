-- VISTAS
-- 1)PEDIDOS AUN NO ENTREGADOS EN LA SUCURSAL
DROP VIEW IF EXISTS vw_pedidos_pendientes;
CREATE VIEW vw_pedidos_pendientes AS SELECT * FROM pedido JOIN sucursal USING (suc_direccion) WHERE (ped_fechaEntrega IS NULL);
select * from vw_pedidos_pendientes;

-- 2)Ganancias brutas en un mes mejor como una vista

DROP VIEW IF EXISTS ven_GanBruta;
Create view Ven_GanBruta as SELECT  cli_nombreCompleto ,ven_id,SUM(vip_prod_ancho*vip_prod_alto*pro_precio*vip_cantidad) AS GananciaBruta FROM 
(producto JOIN venta_incluye_producto On 
(producto.pro_nombreId=venta_incluye_producto.pro_nombreid and producto.pro_nombreEmpresa=venta_incluye_producto.productor_pro_nombreEmpresa) 
join Venta using (ven_id) join CLIENTE using (cli_documento)) where ven_fecha>='2022/08/01' and ven_fecha<='2022/09/01' group by ven_id ;

select * from Ven_GanBruta;
-- 3)ganancias netas en ventas por pedidos a productores por cada pedido Podria ser una vista 

DROP VIEW IF EXISTS Ganancias_ped;
create view Ganancias_ped as SELECT  cli_nombreCompleto, ven_id, GananciaBruta-ped_costoPed as GananciaNeta from Ven_GanBruta join PEDIDO using (ven_id);
select * from Ganancias_ped;

-- 4) infor del asesor omitiendo documento y numero de ventas al mes 
DROP VIEW IF EXISTS Info_Asesor;
CREATE VIEW Info_Asesor AS SELECT ase_nombreCompleto, ase_numContacto, SUCURSAL_suc_direccion FROM ASESOR;
select * from Info_Asesor;
-- 5) numero de ventas por asesor en un mes

DROP VIEW IF EXISTS Ase_num_ven;
CREATE VIEW Ase_num_ven as select ase_documento, ase_nombreCompleto, ase_numContacto, SUCURSAL_suc_direccion, count(ase_documento)as NumVentasMes 
from VENTA join ASESOR using(ase_documento) where ven_fecha>='2022/08/01' and ven_fecha<='2022/09/01' group by ase_documento;
select * from Ase_num_ven;