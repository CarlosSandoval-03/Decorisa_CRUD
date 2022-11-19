import React, { FormEventHandler, useState, useMemo, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import ReactTable from 'react'
import request from 'graphql-request';
import { Column, useTable } from "react-table";

import * as iconMenu from 'react-icons/ai';


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
function Venta() {

  const [showWindow, setShowWindow]= useState(false)
  const [idVenta, setIdVenta]= useState(0)
  const stateShowWindow= (id:number):any=> {
    setIdVenta(id);
    setShowWindow(true);
    
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
        <div className='ventas'>
        <h1>Ventas realizadas</h1>

        {showWindow ? (
        <div className='ventana'>
          <iconMenu.AiFillCloseCircle onClick={()=>setShowWindow(false)} className='btn'/>
          <div className='flex bg-black'>
            <h1>ID VENTA:{idVenta}</h1>
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