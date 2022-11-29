import Navbar from '../Components/Navbar'
import React, { useState } from 'react'
import { Formik } from "formik";
import * as iconMenu from 'react-icons/ai';
import * as ioIcon from 'react-icons/io';
import { IconContext } from 'react-icons';

const rowData = [
  {
    ped_id: 1212312,
    pro_nombreEmpresa: 'Panorama',
    ped_fechaEnvio: '2022/08/09',
    ped_fechaEntrega: '',
    suc_direccion: 'cr52a #134a-53',
    ped_metodoPago: 'Efectivo',
    ped_costoPed: 1000000,
    ven_id: 2323233

  },
  {
    ped_id: 1212312,
    pro_nombreEmpresa: 'Panorama',
    ped_fechaEnvio: '2022/08/09',
    ped_fechaEntrega: '',
    suc_direccion: 'cr52a #134a-53',
    ped_metodoPago: 'Efectivo',
    ped_costoPed: 1000000,
    ven_id: 2212323
  },
  {
    ped_id: 1212312,
    pro_nombreEmpresa: 'Panorama',
    ped_fechaEnvio: '2022/08/09',
    ped_fechaEntrega: '',
    suc_direccion: 'cr52a #134a-53',
    ped_metodoPago: 'Efectivo',
    ped_costoPed: 1000000,
    ven_id: 3334
  },

]
const ProductosVenta = [
  {
    pro_nombreId: 'Sheer Screen',
    productor_pro_nombreEmpresa: 'Panorama',
    vip_prod_ancho: 1.76,
    vip_prod_alto: 2.00,
    vip_cantidad: 3,
  },
  {
    pro_nombreId: 'Sheer Screen',
    productor_pro_nombreEmpresa: 'Panorama',
    vip_prod_ancho: 1.76,
    vip_prod_alto: 2.00,
    vip_cantidad: 3,
  },
  {
    pro_nombreId: 'Sheer Screen',
    productor_pro_nombreEmpresa: 'Panorama',
    vip_prod_ancho: 1.76,
    vip_prod_alto: 2.00,
    vip_cantidad: 3,
  },
]

function Pedido() {
  const [showFormCrearPedido, setShowFormCrearPedido] = useState(false)
  const [idVenta, setIdVenta] = useState(0)
  const [showDetallesPedido, setShowDetallesPedido] = useState(false)
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

    fecha_inicio: string,
    fecha_fin: string,
    Pendiente: string

  }
  const CrearPedido = async (values: initial) => {
    setShowFormCrearPedido(false)




  }
  const statePedidoDetalles = (id: number): any => {
    setIdVenta(id);
    setShowDetallesPedido(true);

  }
  const borrarPedido = (id: number): any => {
    setIdVenta(id);
    //llamar para que borre la venta con este id
    //con el borrado de la venta tambien se borra el pedido

  }
  const getDates = async (values: Fechas) => {
    console.log(values.fecha_inicio)
    console.log(values.fecha_fin)

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
                      <div className="flex flex-nowrap items-center ">
                        <label className="">Direccion Sucursal:</label>
                        <input name="suc_direccion" type="text" placeholder="" className=""
                          value={values.suc_direccion}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='col-start-2'>
                      <div className="flex flex-nowrap items-center ">
                        <label className="">Empresa:</label>
                        <input name="pro_nombreEmpresa" type="text" placeholder="" className=""
                          value={values.pro_nombreEmpresa}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-nowrap items-center ">
                        <label className="">Id Venta relacionada con el pedido:</label>
                        <input name="pro_nombreEmpresa" type="number" placeholder="" className=""
                          value={values.ven_id}
                          onChange={handleChange}
                        />
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
              <h2>Precio</h2>
            </div>

            <h2>Cliente: pepito</h2>
            <h2>Fecha:323</h2>
            <h2>Instalador:jose</h2>
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


                {ProductosVenta.map((item, index) => {
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
            fecha_inicio: '',
            fecha_fin: '',
            Pendiente: 'false',
          }}
          onSubmit={async (values) => {

            getDates(values)


            //alert(JSON.stringify(values));

          }}

        >
          {({ handleSubmit, values, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <div className='flex flex-nowrap'>
                <div className="flex flex-nowrap items-center ">
                  <label className="">Fecha Inicio:</label>
                  <input name="fecha_inicio" type="date" placeholder="" className=""
                    value={values.fecha_inicio}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-nowrap items-center ">
                  <label className="">Fecha Fin:</label>
                  <input name="fecha_fin" type="date" placeholder="" className=""
                    value={values.fecha_fin}
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
              {rowData.map((item, index) => {
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

export default Pedido