USE decorisa;

-- 1. Ganancias en bruto por produto
SELECT pro_nombreId, SUM(pro_precio*vip_cantidad) AS Ganancia FROM (producto JOIN venta_incluye_producto USING (pro_nombreId)) GROUP BY pro_nombreId;
-- γ product_nombre;SUM(product_precio * cantidad) → Ganancia (producto ⨝(product_nombre, pro_nombre) venta_incluye_produto)


-- 2. Comision por asesor 
SET @PORCENTAJE_COMISION = 5;
SELECT asesor.per_documento,(SUM(product_precio*cantidad)*(@PORCENTAJE_COMISION/100)) AS Comision
	FROM (asesor JOIN venta ON (asesor.per_documento=venta.ase_documento) 
	JOIN venta_incluye_produto ON (venta.ven_id=venta_incluye_produto.ven_id) 
    JOIN producto ON (venta_incluye_produto.product_nombre=producto.product_nombre)) 
    GROUP BY asesor.per_documento;
-- γ asesor.per_documento; (SUM(product_precio * cantidad) * (@PORCENTAJE_COMISION / 100)) → Comision (asesor ⨝(asesor.per_documento=venta.ase_documento) venta ⨝(venta.ven_id=venta_incluye_produto.ven_id) venta_incluye_produto ⨝(venta_incluye_produto.product_nombre=producto.product_nombre) producto)

-- 3. Productos entre intervalo precio
SET @MIN_PRECIO = 0;
SET @MAX_PRECIO = 10000000;
SELECT * FROM PRODUCTO WHERE pro_precio <= @MAX_PRECIO AND pro_precio >= @MIN_PRECIO ORDER BY pro_precio ASC;
-- τ product_precio ASC (σ product_precio <= @MAX_PRECIO AND product_precio >= @MIN_PRECIO) 

-- 4. Citas pendientes por asesor
SELECT ase_nombreCompleto,ase_documento,COUNT(cit_fecha) AS Citas_Pendientes FROM CITA join ASESOR using(ase_documento) WHERE cit_fecha >= CURDATE() GROUP BY ase_documento;
-- γ ase_per_documento ; COUNT(cit_fecha) → Citas_Pendientes (σ cit_fecha >= CURDATE() (cita))

-- 5. Numero ganancias por instalador por mes
SELECT ins_nombreCompleto, sum(ins_tarifa*vip_cantidad) AS Ganancia FROM (select ins_documento,ins_nombreCompleto,ven_id,ins_tarifa from instalador JOIN venta using (ins_documento) where ven_fecha>='2022/08/01' and ven_fecha<='2022/09/01')as InstaVenta join VENTA_INCLUYE_PRODUCTO using (ven_id) GROUP BY ins_documento;
-- γ instalador.per_documento ; AVG(ins_tarifa) → Promedio_Ganancia (instalador ⨝ (per_documento=ins_documento) venta)

-- 6. Numero de pedidos hechos a cada proveedor en el mes de Agosto
SELECT PRODUCTOR.pro_nombreEmpresa, COUNT(ped_id) AS Num_pedidos FROM PRODUCTOR NATURAL JOIN PEDIDO NATURAL JOIN VENTA WHERE VENTA.ven_fecha like "%-08-%" GROUP BY PRODUCTOR.pro_nombreEmpresa;
-- γ PRODUCTOR.pro_nombreEmpresa ; COUNT(ped_id) → Num_pedidos (σ VENTA.ven_fecha like "%-08-%" (PRODUCTOR ⨝ PEDIDO ⨝ VENTA))

-- 7. Los productos mas vendidos
SELECT VENTA_INCLUYE_PRODUCTO.pro_nombreId, COUNT(pro_nombreId) AS Num_ventas FROM VENTA_INCLUYE_PRODUCTO GROUP BY pro_nombreId ORDER BY Num_ventas DESC;
-- τ Num_pedidos ASC (γ PRODUCTOR.pro_nombreEmpresa ; COUNT(ped_id) → Num_pedidos (VENTA_INCLUYE_PRODUCTO))

-- 8. Citas programadas para cierto dia
SELECT cli_nombreCompleto, ase_nombreCompleto, cit_fecha FROM CITA NATURAL JOIN CLIENTE NATURAL JOIN ASESOR WHERE cit_fecha like '2022-11-11%';
-- π cli_nombreCompleto, ase_nombreCompleto, cit_fecha (σ cit_fecha like '2022-08-11%' (CITA join CLIENTE join ASESOR))

-- 9. Promedio de envio de un pedido
SELECT AVG(Periodo_entrega) AS Prom_Periodo_entrega FROM (SELECT DATEDIFF(ped_fechaEntrega, ped_fechaEnvio) AS Periodo_entrega FROM PEDIDO) as PEDIDO;
-- γ AVG(Periodo_entrega) → Prom_Periodo_entrega (π DATEDIFF(ped_fechaEntrega, ped_fechaEnvio) → Periodo_entrega) → PEDIDO

-- 10. Clientes mas frecuentes en compras
SELECT cli_nombreCompleto, COUNT(ven_id) AS Num_compras FROM CLIENTE NATURAL JOIN VENTA GROUP BY cli_Documento;
-- γ cli_nombreCompleto ; COUNT(ven_id) → Num_compras (CLIENTE join VENTA)