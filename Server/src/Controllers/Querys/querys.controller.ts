import { Request, Response } from 'express'
import { QueryError, RowDataPacket } from 'mysql2'

import { executeQuery } from '../../database'


export function getProfitPerProduct(_req: Request, res: Response): Response | void {
  executeQuery('SELECT pro_nombreId, SUM(pro_precio*vip_cantidad) AS Ganancia FROM (producto JOIN venta_incluye_producto USING (pro_nombreId)) GROUP BY pro_nombreId;', function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  })
}

export function getCommissionPerAdviser(req: Request, res: Response): Response | void {
  const percentaje = req.params.variables

  executeQuery(`SELECT asesor.per_documento,(SUM(product_precio*cantidad)*(?/100)) AS Comision
                  FROM (asesor JOIN venta ON (asesor.per_documento=venta.ase_documento)
                  JOIN venta_incluye_produto ON (venta.ven_id=venta_incluye_produto.ven_id)
                  JOIN producto ON (venta_incluye_produto.product_nombre=producto.product_nombre))
                  GROUP BY asesor.per_documento;`, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, [percentaje])
}

export function getProductsInPriceRange(req: Request, res: Response): Response | void {
  executeQuery(`SELECT * FROM PRODUCTO WHERE pro_precio >= ? AND pro_precio <= ? ORDER BY pro_precio ASC;`, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, [req.params.variables.split("&").flat()])
}

export function getPendingAppointmentsByAdvisor(_req: Request, res: Response): Response | void {
  executeQuery('SELECT ase_nombreCompleto,ase_documento,COUNT(cit_fecha) AS Citas_Pendientes FROM CITA join ASESOR using(ase_documento) WHERE cit_fecha >= CURDATE() GROUP BY ase_documento;', function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  })
}

export function getProfitsPerInstaller(req: Request, res: Response): Response | void {
  executeQuery(`SELECT ins_nombreCompleto, sum(ins_tarifa*vip_cantidad) AS Ganancia FROM (select ins_documento,ins_nombreCompleto,ven_id,ins_tarifa FROM
                  instalador JOIN venta USING (ins_documento) where ven_fecha>= ? and ven_fecha<= ?) AS
                  InstaVenta JOIN VENTA_INCLUYE_PRODUCTO USING (ven_id) GROUP BY ins_documento;`, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, [req.params.variables.split("&").flat()])
}

export function getOrderPerProducer(req: Request, res: Response): Response | void {
  executeQuery(`SELECT PRODUCTOR.pro_nombreEmpresa, COUNT(ped_id) AS Num_pedidos FROM PRODUCTOR NATURAL JOIN PEDIDO NATURAL 
                  JOIN VENTA WHERE VENTA.ven_fecha like ? GROUP BY PRODUCTOR.pro_nombreEmpresa;`, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, ['%-' + req.params.variables.split("&").flat()[0] + '-%'])
}

export function getMostSelledProducts(_req: Request, res: Response): Response | void {
  executeQuery('SELECT VENTA_INCLUYE_PRODUCTO.pro_nombreId, COUNT(pro_nombreId) AS Num_ventas FROM VENTA_INCLUYE_PRODUCTO GROUP BY pro_nombreId ORDER BY Num_ventas DESC;', function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  })
}

export function getAppointmentsForDay(req: Request, res: Response): Response | void {
  executeQuery(`SESELECT cli_nombreCompleto, ase_nombreCompleto, cit_fecha FROM CITA NATURAL JOIN CLIENTE NATURAL JOIN ASESOR WHERE cit_fecha like ?;`, function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  }, [req.params.variables.split("&").flat()])
}

export function getAverageDeliveryOfOrder(_req: Request, res: Response): Response | void {
  executeQuery('SELECT AVG(Periodo_entrega) AS Prom_Periodo_entrega FROM (SELECT DATEDIFF(ped_fechaEntrega, ped_fechaEnvio) AS Periodo_entrega FROM PEDIDO) as PEDIDO;', function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  })
}

export function getMostFrequentClient(_req: Request, res: Response): Response | void {
  executeQuery('SELECT cli_nombreCompleto, COUNT(ven_id) AS Num_compras FROM CLIENTE NATURAL JOIN VENTA GROUP BY cli_Documento;', function(err: QueryError | null, rows: RowDataPacket[]) {
    if (!err) {
      res.status(200)
      return res.json(rows)
    }
    res.status(500)
    return res.send({
      err: err
    })
  })
}