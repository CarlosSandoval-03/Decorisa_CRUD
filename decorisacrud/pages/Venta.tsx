import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import { Formik } from "formik";
import * as iconMenu from 'react-icons/ai';
import * as ioIcon from 'react-icons/io';
import { IconContext } from 'react-icons';

let productCrear:{ ven_id: number;
  pro_nombreId: string;
  productor_pro_nombreEmpresa: string;
  vip_prod_ancho: number;
  vip_prod_alto: number;
  vip_cantidad: number; }[] = []







function Venta() {
  interface Product {
    ven_id: number,
    pro_nombreId: string,
    productor_pro_nombreEmpresa: string,
    vip_prod_ancho: number,
    vip_prod_alto: number,
    vip_cantidad: number,
  }


  let proArray: Product[] = new Array<Product>
  interface initial {

    ven_id: number,
    cli_documento: number,
    ase_documento: number,
    ven_fecha: string,
    ins_documento: number,
    ven_precio: number,


  }
  interface Fechas {

    fecha_inicio: string,
    fecha_fin: string

  }
  interface PartOfVent {

    ven_id: number,
    cli_nombreCompleto: string
    ven_precio: number

  }


  const [showWindow, setShowWindow] = useState(false)
  const [idVenta, setIdVenta] = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [showProducts, setShowProducts] = useState(false)
  const [numProducts, setNumProducts] = useState(0)
  const [haveProducts, setHaveProducts] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [infoVentas, setInfoVentas] = useState([{
    ven_id: 0,
    cli_nombreCompleto: '',
    ven_precio: 0,

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
  const [Clientes, setClientes] = useState([{
    cli_documento: 0,
    cli_nombreCompleto: "",
    cli_direccion: "",
    cli_numContacto: 0,
    cli_correo: ""
  }])
  const [Asesores, setAsesores] = useState([{
    ase_documento: 0,
    ase_nombreCompleto: "",
    ase_numContacto: 0,
    ase_ventasMes: 0,
    SUCURSAL_suc_direccion: ""
  }])
  const [instaladores, setInstaladores] = useState([{
    ins_documento: 0,
    ins_nombreCompleto: "",
    ins_numContacto: 0,
    ins_especialidad: "",
    ins_tarifa: 0
  }])
  const [Productos, setProductos] = useState([{
    ven_id: 0,
    pro_nombreId: '',
    productor_pro_nombreEmpresa:'',
    vip_prod_ancho:0,
    vip_prod_alto: 0,
    vip_cantidad: 0,
  }])


  const traerInfo =()=>{
    fetch('https://decorisaserver.azurewebsites.net/api/asesor', {

    })
      .then(response => response.json()).then(data => {
        console.log('aaa')
        console.log(data)

        setAsesores(data)

      })
      
    fetch('https://decorisaserver.azurewebsites.net/api/instalador', {

    })
      .then(response => response.json()).then(data => {
        console.log('aaa')
        console.log(data)
        

        setInstaladores(data)

      })
      
    fetch('https://decorisaserver.azurewebsites.net/api/cliente', {

    })
      .then(response => response.json()).then(data => {
        console.log('aaa')
        console.log(data)
        
        setClientes(data)

        setIsLoading(false)


      })
  }



  const stateShowWindow = (id: number): any => {//usa dos procedimientos uno para traer la info de la venta
    // y el segundo para traer los productos de esa venta
    //y otras 3 consultas a la base

    setIsLoading(true)

    // busca trae las sucursales
    let src: string = 'https://decorisaserver.azurewebsites.net/api/procedimientos/detalle_venta/' + id
    console.log(src)


    fetch(src, {

    })
      .then(response => response.json()).then(data => {
        console.log('aaa')
        console.log(data[0])
        setDetalleVentas(data[0])

        console.log('bbbb')
        console.log(detalleVentas[0])
      })

    let src2: string = 'https://decorisaserver.azurewebsites.net/api/procedimientos/productos_venta/' + id
    fetch(src2, {

    })
      .then(response => response.json()).then(data => {
        console.log('aaa')
        console.log(data[0])

        setProductosVenta(data[0])

        console.log('bbbb')
        console.log(productosVenta)
        setShowWindow(true);
        setIsLoading(false)
      })
    



    

  }

  const borrarVenta = (id: number): any => {
    setIdVenta(id);
    //llamar para que borre la venta con este id
    setIsLoading(true)
    let src:string='https://decorisaserver.azurewebsites.net/api/venta/'+idVenta
    console.log(src)
    fetch(src, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      

    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
      .then(() => {
        setIsLoading(false)
        

      })
   


  }
  const CrearVenta = async (values: initial) => {
    let ventaCrear: initial = {
      ven_id: values.ven_id, cli_documento: values.cli_documento,
      ase_documento: values.ase_documento, ven_fecha: values.ven_fecha, ins_documento: values.ins_documento, ven_precio: values.ven_precio
    }
   
    console.log(JSON.stringify(ventaCrear))

    fetch('https://decorisaserver.azurewebsites.net/api/venta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(ventaCrear)

    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
      .then(() => {
        setShowForm(false)
        setShowProducts(false)
        setHaveProducts(false)
        //guardar productos tambien
        setNumProducts(0)
        

      })
      console.log(Productos)
      for(const obj of Productos){
        console.log('soy obj')
        console.log(JSON.stringify(obj))
        fetch('https://decorisaserver.azurewebsites.net/api/venta_incluye_producto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(obj)

    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
      .then(() => {
        
      })

      }
      



  }
  
  const guardarProductos = async (values: Product) => {
    setIsLoading(true)
    productCrear.push(values);
    console.log('array')
    console.log(productCrear)
    setProductos(productCrear)
    console.log('array2')
    console.log(Productos)
    setNumProducts(numProducts + 1)
    setHaveProducts(true)
    setShowProducts(false)
    setIsLoading(false)
  }

  const TraerVentas = async (values: Fechas) => {
    setIsLoading(true)

    // busca trae las sucursales
    let fechai = values.fecha_inicio.replaceAll('/', '-')
    let fechaf = values.fecha_fin.replaceAll('/', '-')

    let src: string = 'https://decorisaserver.azurewebsites.net/api/procedimientos/ventas_rango/' + fechai + '&' + fechaf
    console.log(src)


    fetch(src, {

    })
      .then(response => response.json()).then(data => {
        console.log('aaa')
        console.log(data[0])

        setInfoVentas(data[0])


        setIsLoading(false)
      })

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
            <h1>Ventas realizadas</h1>
            <div className='flex flex-wrap place-items-end'>
              <button onClick={() => setShowForm(true)} className=' text-right' >
                <IconContext.Provider value={{ className: 'button-add' }}>
                  <ioIcon.IoMdAddCircle />
                </IconContext.Provider>

              </button>
              <h2>Nueva Venta</h2>


            </div>

          </div>





          {showForm ? (
            <div className='formVP'>
              <div className='grid grid-rows-1 grid-cols-2 items-center '>
                <div className='col-start-1'>
                  {/* Formulario de creacion de venta */}
                  <Formik
                    initialValues={{
                      ven_id: 0,
                      cli_documento: 0,
                      ase_documento: 0,
                      ins_documento: 0,
                      ven_fecha: '',
                      ven_precio: 0,

                    }}
                    onSubmit={async (values) => {

                      CrearVenta(values)


                      //alert(JSON.stringify(values));

                    }}

                  >
                    {({ handleSubmit, values, handleChange }) => (
                      <form onSubmit={handleSubmit}>
                        <iconMenu.AiFillCloseCircle onClick={() => {
                          setShowForm(false)
                          productCrear=[]
                          setProductos(productCrear)
                          setHaveProducts(false)
                          
                          }} className='btn' />
                        <h1 className="font-bold text-3xl p-4 ">Nueva Venta</h1>



                        <div className="flex flex-nowrap items-center ">
                          <label className="">IdVenta:</label>
                          <input name="ven_id" type="number" placeholder="" className=""
                            value={values.ven_id}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="flex flex-nowrap items-center">
                          <label className="">Cliente</label>
                          <select
                            name="cli_documento" placeholder="Nombre del cliente" className=""
                            value={values.cli_documento}
                            onChange={handleChange}
                          >
                            {Clientes.map((item, index) => {
                              return (
                                <option key={index} value={item.cli_documento}>{item.cli_nombreCompleto}</option>
                              )
                            })}
                          </select>
                        </div>
                        <div className="flex flex-nowrap items-center">
                          <label className="">Instalador</label>
                          <select
                            name="ins_documento" placeholder="Instalador Encargado" className=""
                            value={values.ins_documento}
                            onChange={handleChange}
                          >
                            {instaladores.map((item, index) => {
                              return (
                                <option key={index} value={item.ins_documento}>{item.ins_nombreCompleto}</option>
                              )
                            })}
                          </select>
                        </div>
                        <div className="flex flex-nowrap items-center">
                          <label className="">Asesor Encargado</label>
                          <select
                            name="ase_documento" placeholder="Asesor" className=""
                            value={values.ase_documento}
                            onChange={handleChange}
                          >
                            {Asesores.map((item, index) => {
                              return (
                                <option key={index} value={item.ase_documento}>{item.ase_nombreCompleto}</option>
                              )
                            })}
                          </select>
                        </div>
                        <div className="flex flex-nowrap items-center">
                          <div>
                            <label className="">Fecha de la venta</label>
                            {/*<input id="fechaI" type="date" placeholder ="Ingrese su usuario" className=""/>*/}

                            <input name="ven_fecha" type="date" placeholder="Ingrese la fecha" className=""
                              value={values.ven_fecha}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="flex flex-nowrap items-center ">
                          <label className="">Precio:</label>
                          <input name="ven_precio" type="number" placeholder="Ingrese el precio de la Venta" className=""
                            value={values.ven_precio}
                            onChange={handleChange}
                          />
                        </div>
                        <br></br>


                        <div className='flex flex-col justify-center items-center '>
                          <button type="submit" className="button-detalles "> Crear </button>
                        </div>

                      </form>
                    )}

                  </Formik>
                </div>

                <div className='col-start-2'>
                  <div className="flex flex-nowrap items-center ">
                    <ioIcon.IoMdAddCircle className='button-add' onClick={() => setShowProducts(true)} />
                    <label className="">Agregar un producto</label>


                  </div>
                  
                  <div className='flex flex-nowrap items-center'>
                    {showProducts ? (

                      <div>
                        <div className=" ">
                          {/* Formulario para añadir productos a la venta*/}
                          <Formik
                            initialValues={{
                              ven_id: 0,
                              pro_nombreId: '',
                              productor_pro_nombreEmpresa: '',
                              vip_prod_ancho: 0,
                              vip_prod_alto: 0,
                              vip_cantidad: 0,
                            }}
                            onSubmit={async (values) => {

                              guardarProductos(values)


                              //alert(JSON.stringify(values));

                            }}

                          >
                            {({ handleSubmit, values, handleChange }) => (
                              <form onSubmit={handleSubmit}>
                                
                                  <div className="flex flex-wrap items-center ">
                                      <label className="">Id Venta:</label>
                                      <input name="ven_id" type="text" placeholder="idVenta" className=""
                                        value={values.ven_id}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="flex flex-wrap items-center ">
                                      <label className="">Nombre Producto:</label>
                                      <input name="pro_nombreId" type="text" placeholder="Nombre" className=""
                                        value={values.pro_nombreId}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="flex flex-nowrap items-center ">
                                      <label className="">Productor:</label>
                                      <input name="productor_pro_nombreEmpresa" type="text" placeholder="Ingrese el precio de la Venta" className=""
                                        value={values.productor_pro_nombreEmpresa}
                                        onChange={handleChange}
                                      />
                                    </div>

                                    <div className="flex flex-nowrap items-center ">
                                      <label className="">Ancho:</label>
                                      <input name="vip_prod_ancho" type="number" placeholder="Ingrese el precio de la Venta" className=""
                                        value={values.vip_prod_ancho}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="flex flex-nowrap items-center ">
                                      <label className="">Alto:</label>
                                      <input name="vip_prod_alto" type="number" placeholder="Ingrese el precio de la Venta" className=""
                                        value={values.vip_prod_alto}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="flex flex-nowrap items-center ">
                                      <label className="">Cantidad:</label>
                                      <input name="vip_cantidad" type="number" placeholder="Ingrese el precio de la Venta" className=""
                                        value={values.vip_cantidad}
                                        onChange={handleChange}
                                      />
                                    </div>


                                 


                                <div className='flex flex-col justify-center items-center '>
                                  <button type="submit" className="btn-add-product "> Añadir </button>
                                </div>

                              </form>
                            )}

                          </Formik>
                        </div>

                      </div>

                    )

                      : null}

                  </div>
                </div>
                <div className='col-span-2'>

                  {haveProducts ? (

                    <table>
                      <tbody>

                        <tr>
                          <th>Nombre Producto</th>
                          <th>Productor</th>
                          <th>Ancho</th>
                          <th>Alto</th>
                          <th>Cantidad</th>
                        </tr>
                        {Productos.map((pro, index) => {
                          return (

                            <>
                              <tr key={index} className={colorFondo(index)}>
                                <td >{pro.pro_nombreId}</td>
                                <td >{pro.productor_pro_nombreEmpresa}</td>
                                <td>{pro.vip_prod_ancho}</td>
                                <td>{pro.vip_prod_alto}</td>
                                <td>{pro.vip_cantidad}</td>
                              </tr>
                            </>
                          )

                        }

                        )

                        }


                      </tbody>
                    </table>
                  ) : null}



                </div>

              </div>




            </div>

          ) : null}

          {showWindow ? (
            <div className='ventana'>
              <iconMenu.AiFillCloseCircle onClick={() => setShowWindow(false)} className='btn' />
              <div >
                <h1 >ID VENTA:{detalleVentas[0].ven_id}</h1>
                <h2>Precio: {detalleVentas[0].ven_precio}</h2>
              </div>

              <h2>Cliente:{detalleVentas[0].cli_nombreCompleto}</h2>
              <h2>Fecha:{detalleVentas[0].ven_fecha}</h2>
              <h2>Asesor:{detalleVentas[0].ase_nombreCompleto}</h2>
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
              fecha_inicio: '',
              fecha_fin: ''
            }}
            onSubmit={async (values) => {

              TraerVentas(values)


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
                  <th>Id Venta</th>
                  <th>Cliente</th>
                  <th>Precio</th>
                  <th>Detalle</th>
                </tr>
                {infoVentas.map((item, index) => {
                  return (
                    <>
                      <tr key={index} className={colorFondo(index)} >
                        <td className='w-48'>
                          <button className='button-eliminar' onClick={() => { borrarVenta(item.ven_id) }}>
                            <h2 className='fond-bold'>Eliminar</h2>

                          </button>
                          {item.ven_id}</td>
                        <td className='w-72'>{item.cli_nombreCompleto}</td>
                        <td className='w-36'>{item.ven_precio}</td>
                        <td className='detalles w-32'>

                          <button className='button-detalles' onClick={() => {
                            stateShowWindow(item.ven_id)

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

export default Venta

function then(arg0: () => void) {
  throw new Error('Function not implemented.');
}
