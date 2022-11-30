import Navbar from '../Components/Navbar'
import React, { useEffect, useState } from 'react'
import { Formik } from "formik";
import * as iconMenu from 'react-icons/ai';
import * as ioIcon from 'react-icons/io';
import { IconContext } from 'react-icons';



function Pedido() {
  const [showFormCrearPedido, setShowFormCrearPedido] = useState(false)
  const [idVenta, setIdVenta] = useState(0)
  const [showDetallesPedido, setShowDetallesPedido] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [Sucursales, setSucursales] = useState([
    {
      suc_direccion: '',
      suc_nombre: ''
    }])

  const [Productores, setProductores] = useState([{
    pro_nombreEmpresa: '',
    pro_contactoAsesor: '',
    pro_nombre_asesor: '',
    pro_comprasMes: 0,
    pro_tipoProductos: ''
  }])
  const [Ventas, setVentas] = useState([{
    ven_id: '',
    cli_nombreCompleto: '',
    ase_nombreCompleto: 0,
    ven_fecha: '',
    ins_nombreCompleto: '',
    ven_precio: 0,
  }])
  const [Pedidos, setrPedidos] = useState([{
    ped_id: 0,
    pro_nombreEmpresa: '',
    ped_fechaEnvio: '',
    ped_fechaEntrega: '',
    suc_direccion: '',
    ped_metodoPago: '',
    ven_id: 0,
    ped_costoPed: 0,
  }])
  const [detalleVentas, setDetalleVentas] = useState([{
    ven_id: '',
    cli_nombreCompleto: '',
    ase_nombreCompleto: 0,
    ven_fecha: '',
    ins_nombreCompleto: '',
    ven_precio: 0,
  }])

  const [productosVenta, setProductosVenta] = useState([{
    ven_id: 0,
    pro_nombreId: '',
    productor_pro_nombreEmpresa: '',
    vip_prod_ancho: 0,
    vip_prod_alto: 0,
    vip_cantidad: 0,
  }])
  interface initial {

    ped_id: number,
    ped_metodoPago: string,
    ped_fechaEnvio: string,
    ped_fechaEntrega: string,
    suc_direccion: string,
    pro_nombreEmpresa: string,
    ven_id: number,
    ped_costoPed: number,
  }
  interface Fechas {

    ped_mes: string,
    Pendiente: string

  }

  const traerInfo = () => {

    setIsLoading(true)
    fetch('https://decorisaserver.azurewebsites.net/api/sucursal')
      .then(response => response.json())
      .then(data => {

        setSucursales(data)

      })
    fetch('https://decorisaserver.azurewebsites.net/api/productor', {

    })
      .then(response => response.json()).then(data => {

        setProductores(data)

      })
    fetch('https://decorisaserver.azurewebsites.net/api/venta', {

    })
      .then(response => response.json()).then(data => {

        setVentas(data)
        setIsLoading(false)
      })



  }
  const CrearPedido = async (values: initial) => {
    setIsLoading(true)
    fetch('https://decorisaserver.azurewebsites.net/api/pedido', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)

    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
      .then(() => {


        setShowFormCrearPedido(false)
        setIsLoading(false)
      })


  }
  const statePedidoDetalles = (id: number): any => {

    setIsLoading(true)

    // busca trae las sucursales
    let src: string = 'https://decorisaserver.azurewebsites.net/api/procedimientos/detalle_venta/'+ id
    console.log(src)
    fetch(src, {

    })
      .then(response => response.json()).then(data => {
        console.log('ventas')
        console.log(data[0])
        setDetalleVentas(data[0])

        console.log('bbbb')
        console.log(detalleVentas[0])
      })


      
    let src2: string = 'https://decorisaserver.azurewebsites.net/api/procedimientos/productos_venta/' + id
    fetch(src2, {

    })
      .then(response => response.json()).then(data => {
        console.log('Productos')
        console.log(data[0])

        setProductosVenta(data[0])

        console.log('bbbb')
        console.log(productosVenta)
        setShowDetallesPedido(true);
        setIsLoading(false)
      })


  }
  const borrarPedido = (id: number): any => {
    setIdVenta(id);
    //llamar para que borre la venta con este id
    //con el borrado de la venta tambien se borra el pedido

  }
  const filtrarPedidos = async (values: Fechas) => {
    console.log('entre1')
    if (values.Pendiente.toString() == 'true') {
      console.log('entre2')
      setIsLoading(true)
      fetch('https://decorisaserver.azurewebsites.net/api/vistas/pedidos_pendientes')
        .then(response => response.json())
        .then(data => {

          setrPedidos(data)
          setIsLoading(false)

        })

    } else {


    }
    console.log(values.ped_mes)
    console.log(values.Pendiente)

    //enviar fechas
  }
  const colorFondo = (a: number): string => {
    if (a % 2 == 0) {
      return 'tr0';
    } else {
      return 'tr1';
    }
  }
  useEffect(() => {
    traerInfo()
  }, []);
  if (isLoading == false) {
    return (
      <>
        <Navbar></Navbar>
        <div className='pagina'>



          <div className='flex flex-wrap items-center'>
            <h1>Listado de Pedidos</h1>
            <div className='flex flex-wrap place-items-end'>
              <button onClick={() => setShowFormCrearPedido(true)} className=' text-right' >
                <IconContext.Provider value={{ className: 'button-add' }}>
                  <ioIcon.IoMdAddCircle />
                </IconContext.Provider>

              </button>
              <h2>Nueva Pedido</h2>


            </div>

          </div>





          {showFormCrearPedido ? (
            <div className='formVP'>

              {/* Formulario de creacion de venta */}
              <Formik
                initialValues={{
                  ped_id: 0,
                  ped_metodoPago: '',
                  ped_fechaEnvio: '',
                  ped_fechaEntrega: '',
                  suc_direccion: '',
                  pro_nombreEmpresa: '',
                  ven_id: 0,
                  ped_costoPed: 0,

                }}
                onSubmit={async (values) => {

                  CrearPedido(values)


                  //alert(JSON.stringify(values));

                }}

              >
                {({ handleSubmit, values, handleChange }) => (
                  <form onSubmit={handleSubmit}>
                    <iconMenu.AiFillCloseCircle onClick={() => setShowFormCrearPedido(false)} className='btn' />
                    <h3 className=" p-4 ">Nuevo Pedido</h3>


                    <div className='grid grid-cols-2'>

                      <div className='col-start-1'>
                        <div>
                          <label className="font-bold">Id Pedido</label>
                          <input name="ped_id" type="number" placeholder="Idpedido" className=""
                            value={values.ped_id}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="flex flex-nowrap items-center">
                          <label className="">Metodo de Pago</label>
                          <select
                            name="ped_metodoPago" placeholder="" className=""
                            value={values.ped_metodoPago}
                            onChange={handleChange}
                          >
                            <option value='Efectivo'>Efectivo</option>
                            <option value='Transferencia'>Transferencia</option>
                            <option value='Cheque'>Cheque</option>
                          </select>
                        </div>
                        <div className="flex flex-nowrap items-center ">
                          <label className="">Fecha Envio:</label>
                          <input name="ped_fechaEnvio" type="date" placeholder="" className=""
                            value={values.ped_fechaEnvio}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="flex flex-nowrap items-center ">
                          <label className="">Fecha Entrega:</label>
                          <input name="ped_fechaEntrega" type="date" placeholder="" className=""
                            value={values.ped_fechaEntrega}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="flex flex-nowrap items-center">
                          <label className="">Sucursal:</label>
                          <select
                            name="suc_direccion" placeholder="Nombre del cliente" className=""
                            value={values.suc_direccion}
                            onChange={handleChange}
                          >
                            {Sucursales.map((item, index) => {
                              return (
                                <option key={index} value={item.suc_direccion}>{item.suc_nombre}</option>
                              )
                            })}
                          </select>
                        </div>
                      </div>
                      <div className='col-start-2'>
                        <div className="flex flex-nowrap items-center">
                          <label className="">Empresa:</label>
                          <select
                            name="pro_nombreEmpresa" placeholder="Nombre del cliente" className=""
                            value={values.pro_nombreEmpresa}
                            onChange={handleChange}
                          >
                            {Productores.map((item, index) => {
                              return (
                                <option key={index} value={item.pro_nombreEmpresa}>{item.pro_nombreEmpresa}</option>
                              )
                            })}
                          </select>
                        </div>
                        <div className="flex flex-nowrap items-center">
                          <label className="">Id Venta:</label>
                          <select
                            name="ven_id" placeholder="" className=""
                            value={values.ven_id}
                            onChange={handleChange}
                          >
                            {Ventas.map((item, index) => {
                              return (
                                <option key={index} value={item.ven_id}>{item.ven_id}</option>
                              )
                            })}
                          </select>
                        </div>

                        <div className="flex flex-nowrap items-center ">
                          <label className="">Costo Pedido:</label>
                          <input name="ped_costoPed" type="number" placeholder="" className=""
                            value={values.ped_costoPed}
                            onChange={handleChange}
                          />
                        </div>

                      </div>
                    </div>



                    <div className='flex flex-col justify-center items-center '>
                      <button type="submit" className="button-detalles "> Crear </button>
                    </div>

                  </form>
                )}

              </Formik>

              <div className='col-span-2'>

              </div>






            </div>

          ) : null}

          {showDetallesPedido ? (
            <div className='ventana'>
              <iconMenu.AiFillCloseCircle onClick={() => setShowDetallesPedido(false)} className='btn' />
              <div >
                <h1 >ID VENTA:{idVenta}</h1>
                <h2>Precio: {detalleVentas[0].ven_precio}</h2>
              </div>

              <h2>Cliente:{detalleVentas[0].cli_nombreCompleto}</h2>
              <h2>Fecha:{detalleVentas[0].ven_fecha}</h2>
              <h2>Instalador:{detalleVentas[0].ins_nombreCompleto}</h2>
              <h2>Productos:</h2>
              <table>
                <tbody>
                  <tr>
                    <th>Producto</th>
                    <th>Marca</th>
                    <th>Ancho</th>
                    <th>Alto</th>
                    <th>Cantidad</th>


                  </tr>


                  {productosVenta.map((item, index) => {
                    return (
                      <><tr key={index} className={colorFondo(index)}>
                        <td >{item.pro_nombreId}</td>
                        <td>{item.productor_pro_nombreEmpresa}</td>
                        <td>{item.vip_prod_ancho}</td>
                        <td>{item.vip_prod_alto}</td>
                        <td>{item.vip_cantidad}</td>



                      </tr><>
                        </></>

                    )
                  })}
                </tbody>
              </table>



            </div>

          ) : null

          }
          {/* Formulario de fechas*/}
          <Formik
            initialValues={{
              ped_mes: '',
              Pendiente: 'false',
            }}
            onSubmit={async (values) => {

              filtrarPedidos(values)


              //alert(JSON.stringify(values));

            }}

          >
            {({ handleSubmit, values, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <div className='flex flex-nowrap'>
                  <div className="flex flex-nowrap items-center ">
                    <label className="">Mes:</label>
                    <input name="ped_mes" type="month" placeholder="" className=""
                      value={values.ped_mes}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-nowrap items-center ">
                    <label className="">Solo Pedidos Pendientes</label>
                    <input name="Pendiente" type="checkbox" placeholder="" className=""
                      value={values.Pendiente}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='flex flex-col justify-center items-center '>
                    <button type="submit" className="button-detalles "> Filtrar </button>
                  </div>

                </div>




              </form>
            )}

          </Formik>




          <div className='ventas-info'>


            <table className='w-auto'>
              <tbody>
                <tr className=''>
                  <th>Pedido</th>
                  <th>Empresa</th>
                  <th>Envio</th>
                  <th>Entrega</th>
                  <th>Sucursal</th>
                  <th>Metodo Pago</th>
                  <th>costo</th>
                  <th>Venta</th>
                </tr>
                {Pedidos.map((item, index) => {
                  return (
                    <>
                      <tr key={index} className={colorFondo(index)} >
                        <td className='w-56'>
                          <button className='button-eliminar' onClick={() => { borrarPedido(item.ven_id) }}>
                            <h2 className='fond-bold'>Eliminar</h2>

                          </button>
                          {item.ped_id}
                        </td>
                        <td className='w-28'>{item.pro_nombreEmpresa}</td>
                        <td className='w-36'>{item.ped_fechaEnvio}</td>
                        <td className='w-36'>{item.ped_fechaEntrega}</td>
                        <td className='w-36'>{item.suc_direccion}</td>
                        <td className='w-36'>{item.ped_metodoPago}</td>
                        <td className='w-36'>{item.ped_costoPed}</td>
                        <td className='detalles w-32'>

                          <button className='button-detalles' onClick={() => {
                            statePedidoDetalles(item.ven_id)

                          }}>
                            <h2 className='fond-bold'>Detalles</h2>
                          </button>
                        </td>


                      </tr>
                    </>


                  )
                })}
              </tbody>


            </table>




          </div>


        </div>



      </>

    )
  }

}

export default Pedido