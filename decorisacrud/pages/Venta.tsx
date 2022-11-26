import React, {  useState} from 'react'
import Navbar from '../Components/Navbar';
import { Formik } from "formik";
import * as iconMenu from 'react-icons/ai';
import * as ioIcon from 'react-icons/io';
import { IconContext } from 'react-icons';



const rowData=[
  {
    idVenta:1212312,
    Cliente:'Juanda',
    precio:100000,
    detalles:'boton-detalles'
  },
  {
    idVenta:111312,
    Cliente:'Carlos',
    precio:13000,
    detalles:'boton-detalles'
  },
  {
    idVenta:1212312,
    Cliente:'Gianka',
    precio:20000,
    detalles:'boton-detalles'
  },

]

const Clientes=[
  {
    cli_documento:32355542,
    cli_nombreCompleto:'Juanda',
    
  },
  {
    cli_documento:10001772233,
    cli_nombreCompleto:'Carlos',
   
  },
  {
    cli_documento:3333111122,
    cli_nombreCompleto:'Gianka',
    
  },

]
const Instaladores=[
  {
    ins_documento:341345543,
    ins_nombreCompleto:'Jose',
    
  },
  {
    ins_documento:2423233322,
    ins_nombreCompleto:'Wilson',
   
  },
  {
    ins_documento:3333111122,
    ins_nombreCompleto:'Javier',
    
  },

]
const Asesores=[
  {
    ase_documento:343243,
    ase_nombreCompleto:'Marta',
    
  },
  {
    ase_documento:1235543334,
    ase_nombreCompleto:'Sebastian',
   
  },
  {
    ase_documento:5423333,
    ase_nombreCompleto:'Lina',
    
  },

]
function Venta() {
  interface Product{
    ven_id:number,
    pro_nombreId:string,
    productor_pro_nombreEmpresa:string,
    vip_prod_ancho:number,
    vip_prod_alto:number,
    vip_cantidad:number,
  }
  
  let proArray:Product[]= new Array<Product>
  interface initial{
      
    cli_Documento:number,
    ase_Documento:number,
    ins_Documento:number,
    ven_fecha:string,
    ven_precio:number,
    
    
  }
  interface Fechas{
      
    fecha_inicio:string,
    fecha_fin:string
    
  }


  const [showWindow, setShowWindow]= useState(false)
  const [idVenta, setIdVenta]= useState(0)
  const [showForm, setShowForm]= useState(false)
  const [showProducts, setShowProducts]=useState(false)
  const [numProducts, setNumProducts]=useState(0)
  const [haveProducts, setHaveProducts]=useState(false)

  const stateShowWindow= (id:number):any=> {
    setIdVenta(id);
    setShowWindow(true);
    
  }
  const borrarVenta= (id:number):any=> {
    setIdVenta(id);
    //llamar para que borre la venta con este id
    
  }
  const guardarInfo = async (values:initial) =>{
    setShowForm(false)
    setShowProducts(false)
    setHaveProducts(false)
    setNumProducts(0)

  }
  const guardarProductos = async (values:Product) =>{
    
    proArray[numProducts]=values;
    setNumProducts(numProducts+1)
    setHaveProducts(true)
  }

  const getDates=async (values:Fechas)=>{
    console.log(values.fecha_fin)
    console.log(values.fecha_inicio)
  }
  
  const colorFondo= (a:number):string=> {
    if(a%2==0){
      return 'tr0';
    }else{
      return 'tr1';
    }
  }

  


  return (
    <>
        <Navbar></Navbar>
        <div className='pagina'>
        

            
            <div className='flex flex-wrap items-center'>
              <h1>Ventas realizadas</h1>
              <div className='flex flex-wrap place-items-end'>
                <button onClick={()=>setShowForm(true)} className=' text-right' >
                  <IconContext.Provider value={{className:'button-add'}}>
                    <ioIcon.IoMdAddCircle />
                  </IconContext.Provider>
                
                </button>
                <h2>Nueva Venta</h2>


              </div>
              
            </div>
            
          
        
        
        
        {showForm ? (
          <div className='formVP'>
            <div className='grid grid-rows-1 grid-cols-2'>
              <div className='col-start-1'>
                {/* Formulario de creacion de venta */}
              <Formik
          initialValues={{
            cli_Documento:0,
            ase_Documento:0,
            ins_Documento:0,
            ven_fecha:'',
            ven_precio:0,
            
          }}
          onSubmit={async (values)=>{

            guardarInfo(values)

            
            //alert(JSON.stringify(values));
        
          }}
          
          >
          {({handleSubmit, values, handleChange})=>(
          <form  onSubmit={handleSubmit}>
            <iconMenu.AiFillCloseCircle onClick={()=>setShowForm(false)} className='btn'/>
            <h1 className="font-bold text-3xl p-4 ">Nueva Venta</h1>
            
              
                
                
                <div className="flex flex-nowrap items-center">
                    <label className ="">Cliente</label>
                    <select
                    name="cli_Documento"  placeholder ="Nombre del cliente" className=""
                    value={values.cli_Documento}
                    onChange={handleChange}
                    >
                      {Clientes.map((item,index)=>{
                        return(
                          <option key={index} value={item.cli_documento}>{item.cli_nombreCompleto}</option>
                        )
                      })}
                    </select>
                </div>
                <div className="flex flex-nowrap items-center">
                    <label className ="">Instalador</label>
                    <select
                    name="ins_Documento"  placeholder ="Instalador Encargado" className=""
                    value={values.ins_Documento}
                    onChange={handleChange}
                    >
                      {Instaladores.map((item,index)=>{
                        return(
                          <option key={index} value={item.ins_documento}>{item.ins_nombreCompleto}</option>
                        )
                      })}
                    </select>
                </div>
                <div className="flex flex-nowrap items-center">
                    <label className ="">Asesor Encargado</label>
                    <select
                    name="ase_Documentor"  placeholder ="Asesor" className=""
                    value={values.ase_Documento}
                    onChange={handleChange}
                    >
                      {Asesores.map((item,index)=>{
                        return(
                          <option key={index} value={item.ase_documento}>{item.ase_nombreCompleto}</option>
                        )
                      })}
                    </select>
                </div>
                <div className="flex flex-nowrap items-center">
                  <div>
                    <label className ="">Fecha de la venta</label>
                    {/*<input id="fechaI" type="date" placeholder ="Ingrese su usuario" className=""/>*/}

                    <input name="ven_fecha" type="date" placeholder ="Ingrese la fecha" className=""
                    value={values.ven_fecha}
                    onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-nowrap items-center ">
                    <label className ="">Precio:</label>
                    <input name="ven_precio" type="number" placeholder ="Ingrese el precio de la Venta" className=""
                    value={values.ven_precio}
                    onChange={handleChange}
                    />
                </div>

                  
              
              
            

            
            
            
            
            
            <div className='flex flex-col justify-center items-center '>
              <button type="submit"  className="button-detalles "> Crear </button>  
            </div>
                    
        </form>
        )}
      
              </Formik>
              </div>

              <div className='col-start-2'>
                <div className="flex flex-nowrap items-center ">
                  <ioIcon.IoMdAddCircle className='button-add' onClick={()=>setShowProducts(true)}/>
                  <label className ="">Agregar un producto</label>
                  
                
                </div> 
                <div className='flex flex-nowrap items-center'>
                {showProducts ?(
                  
                  <div>
                    <div className=" ">
                      {/* Formulario para añadir productos a la venta*/ }
                    <Formik
                    initialValues={{
                      ven_id:0,
                      pro_nombreId:'',
                      productor_pro_nombreEmpresa:'',
                      vip_prod_ancho:0,
                      vip_prod_alto:0,
                      vip_cantidad:0,
                  }}
                  onSubmit={async (values)=>{
        
                    guardarProductos(values)
        
                    
                    //alert(JSON.stringify(values));
                
                  }}
                  
                  >
                  {({handleSubmit, values, handleChange})=>(
                  <form  onSubmit={handleSubmit}>
                    <div className='grid grid-rows-1 grid-cols-2'>
                      <div className='col-start-1'>
                        <div className="flex flex-nowrap items-center ">
                          <label className ="">Nombre Producto:</label>
                          <input name="pro_nombreId" type="text" placeholder ="Ingrese el precio de la Venta" className=""
                          value={values.pro_nombreId}
                          onChange={handleChange}
                              />
                        </div>
                        <div className="flex flex-nowrap items-center ">
                          <label className ="">Productor:</label>
                          <input name="productor_pro_nombreEmpresa" type="text" placeholder ="Ingrese el precio de la Venta" className=""
                          value={values.productor_pro_nombreEmpresa}
                          onChange={handleChange}
                          />
                        </div>
                        
                        <div className="flex flex-nowrap items-center ">
                              <label className ="">Ancho:</label>
                              <input name="vip_prod_ancho" type="number" placeholder ="Ingrese el precio de la Venta" className=""
                              value={values.vip_prod_ancho}
                              onChange={handleChange}
                              />
                        </div>
                        <div className="flex flex-nowrap items-center ">
                          <label className ="">Alto:</label>
                          <input name="vip_prod_alto" type="number" placeholder ="Ingrese el precio de la Venta" className=""
                          value={values.vip_prod_alto}
                          onChange={handleChange}
                          />
                        </div>
                        <div className="flex flex-nowrap items-center ">
                          <label className ="">Cantidad:</label>
                          <input name="vip_cantidad" type="number" placeholder ="Ingrese el precio de la Venta" className=""
                          value={values.vip_cantidad}
                          onChange={handleChange}
                          />
                        </div>
                          
                      
                      </div> 
                    </div>
                    
                    
                    <div className='flex flex-col justify-center items-center '>
                      <button type="submit"  className="btn-add-product "> Añadir </button>  
                    </div>
                            
                </form>
                )}
              
                    </Formik>
                    </div>
          
                  </div>
          
                )
                          
                :null}

                </div>
              </div>
              <div className='col-span-2'>

              {haveProducts ?(

                <table>
                <tbody>

                <tr>  
                  <th>Nombre Producto</th>
                  <th>Productor</th>
                  <th>Ancho</th>
                  <th>Alto</th>
                  <th>Cantidad</th>
                </tr>
                {proArray.map((pro,index)=>{
                  return(

                    <>
                    <tr key={index}className={colorFondo(index)}>
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
              ):null}

              

            </div>

            </div>
            
          
          
            
            </div>
            
        ) :null}

                {showWindow ? (
                <div className='ventana'>
                  <iconMenu.AiFillCloseCircle onClick={()=>setShowWindow(false)} className='btn'/>
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
                        <th>Precio</th>
                      
                      </tr>
                    
                    
                      {rowData.map((item,index)=>{
                      return(
                        <><tr key={index}className={colorFondo(index)}>
                          <td >{item.idVenta}</td>
                          <td>{item.Cliente}</td>
                          <td>{item.precio}</td>
                          <td>{item.precio}</td>
                          <td>{item.precio}</td>
                          <td>{item.precio}</td>
                    
        
                        </tr><>
                        </></>
                        
                      )
                    })}
                  </tbody>
                </table>
        
                  
        
                </div>
                  
                  ):null
        
                }
                {/* Formulario de fechas*/}
              <Formik
                    initialValues={{
                      fecha_inicio:'',
                      fecha_fin:''
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
            {rowData.map((item,index)=>{
              return(
                <>
                <tr key={index} className={colorFondo(index)} >
                  <td className='w-48'>
                  <button  className='button-eliminar' onClick={()=>{borrarVenta(item.idVenta)}}>
                    <h2 className='fond-bold'>Eliminar</h2>
                    
                    </button>
                    {item.idVenta}</td>
                  <td className='w-72'>{item.Cliente}</td>
                  <td className='w-36'>{item.precio}</td>
                  <td className='detalles w-32'>

                    <button  className='button-detalles' onClick={()=>{stateShowWindow(item.idVenta)
                    
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

export default Venta