import React, {  useState} from 'react'
import Navbar from '../Components/Navbar'
import ReactTable from 'react'
import request from 'graphql-request';
import { Column, useTable } from "react-table";
import { Formik } from "formik";

import * as iconMenu from 'react-icons/ai';

import * as ioIcon from 'react-icons/io';
import { IconContext } from 'react-icons';
import { FaProductHunt } from 'react-icons/fa';

var fechai:Date;
var fechaf:Date;

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

  const getDates=() => {
    
  fechai= new Date((document.getElementById("fechai") as HTMLInputElement).value);
  fechaf= new Date((document.getElementById("fechaf") as HTMLInputElement).value);


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
          <div className='grid grid-rows-1 grid-cols-2'>

            <h1 className='col-start-1'>Ventas realizadas</h1>
            <button onClick={()=>setShowForm(true)} className='col-start-2 text-right' >
              <IconContext.Provider value={{className:'bg-orange-600 text-3xl'}}>
                <ioIcon.IoMdAddCircle className='bg-orange w-24'/>
              </IconContext.Provider>
              
            </button>
          </div>
        
        
        
        {showForm ? (
          <div className='formVP'>
            <div className='grid grid-rows-1 grid-cols-2'>
              <div className='col-start-1'>
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
                          <option value={item.cli_documento}>{item.cli_nombreCompleto}</option>
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
                          <option value={item.ins_documento}>{item.ins_nombreCompleto}</option>
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
                          <option value={item.ase_documento}>{item.ase_nombreCompleto}</option>
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
                      <button type="submit"  className="button-detalles "> Añadir </button>  
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
                    <tr className={colorFondo(index)}>
                      <td >{pro.pro_nombreId}</td>
                      <td>{pro.productor_pro_nombreEmpresa}</td>
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
                        <><tr className={colorFondo(index)}>
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


        
        
          <form className='ventas-realizadas'>

            <label>Fecha inicio </label>
            <input id='fechai' type='Date'  className='input'  ></input>
            <label>Fecha fin</label>
            <input id='fechaf' type='Date'  className='input' ></input>
          </form>

        <div className='ventas-info'>
        

        <table>
          <tbody>
            <tr>  
              <th>Id Venta</th>
              <th>Cliente</th>
              <th>Precio</th>
              <th>Detalle</th>
            </tr>
            {rowData.map((item,index)=>{
              return(
                <>
                <tr className={colorFondo(index)}>
                  <td >{item.idVenta}</td>
                  <td>{item.Cliente}</td>
                  <td>{item.precio}</td>
                  <td className='detalles'>

                    <button  className='button-detalles' onClick={()=>{stateShowWindow(item.idVenta)
                    
                    }}>Detalles</button>
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