import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import * as faIcon from 'react-icons/fa';
import * as biIcon from 'react-icons/bi';
import * as mdIcon from 'react-icons/md';
import * as bsIcon from 'react-icons/bs';
import * as aiIcon from 'react-icons/ai';
import Navbar from '../Components/Navbar';

let CitasPendientes=[
  {
    cit_fecha:'2020/07/10 14:00',
    cit_direccion:'Cra 102 #154-30 int a apto 205',
    cli_documento:100021212,
    ase_documento:123442121,
  },
  {
    cit_fecha:'2020/07/10 14:00',
    cit_direccion:'Cra 102 #154-30 int a apto 205',
    cli_documento:100021212,
    ase_documento:123442121,
  },
  {
    cit_fecha:'2020/07/10 14:00',
    cit_direccion:'Cra 102 #154-30 int a apto 205',
    cli_documento:100021212,
    ase_documento:123442121,
  },

]
let detalleCitaPendiente=[
  {
    cit_fecha:'',
    cit_direccion:'',
    cli_documento:0,
    ase_documento:0,
  }
]

function Cita() {
  const [showDetallesCita, setShowDetallesCita]=useState(false)
  const [showDetallesCitaAntigua, setShowDetallesCitaAntigua]=useState(false)
  const traerCitasPendientes=()=>{
    let proximasCitas=[
      {
        cit_fecha:'2020/07/10 14:00',
        cit_direccion:'Cra 100 #154-30 int a apto 205',
        cli_documento:100021212,
        ase_documento:123442121,
      },
      {
        cit_fecha:'2020/07/10 14:00',
        cit_direccion:'Cra 102 #154-30 int a apto 205',
        cli_documento:100021212,
        ase_documento:123442121,
      },
      {
        cit_fecha:'2020/07/10 14:00',
        cit_direccion:'Cra 102 #154-30 int a apto 205',
        cli_documento:100021212,
        ase_documento:123442121,
      },
    ]
    CitasPendientes=proximasCitas
    

  }
  const stateShowDetallesCita=(cli_Documento:number, ase_Documento:number, cit_fecha:string)=>{
    //traer la info de esa cita
    let cita=[
      {
        cit_fecha:'2020/07/10 14:00',
        cit_direccion:'Cra 102 #154-30 int a apto 205',
        cli_documento:100021212,
        ase_documento:123442121,
      }
      
    ]
    detalleCitaPendiente=cita
    setShowDetallesCita(true)

  }
  const stateShowDetallesCitaAntigua=(cli_Documento:number, ase_Documento:number, cit_fecha:string)=>{
    //traer la info de esa cita
    let cita=[
      {
        cit_fecha:'2020/07/10 14:00',
        cit_direccion:'Cra 102 #154-30 int a apto 205',
        cli_documento:100021212,
        ase_documento:123442121,
      }
      
    ]
    detalleCitaPendiente=cita
    setShowDetallesCitaAntigua(true)

  }

  const colorFondo=(index:number):string=>{
    if(index%2==0){
      return(
        'CitaPendiente1'
      )
    }else{
      return(
        'CitaPendiente2'
      )
    }
  }
  const colorFondoCitasPasadas=(index:number):string=>{
    if(index%2==0){
      return(
        'CitaPasada1'
      )
    }else{
      return(
        'CitaPasada2'
      )
    }
  }
  const colorIcono=(index:number):string=>{
    if(index%2==0){
      return(
        'FF9F76'
      )
    }else{
      return(
        'FFEEDF'
      )
    }
  }
  traerCitasPendientes()
  return (
    <>
    <Navbar></Navbar>
    <div className='pagina'>
      <div className='flex flex-wrap'>
        <IconContext.Provider value={{size:'2.5rem'}}>
          <faIcon.FaCalendarAlt />
        </IconContext.Provider>
        <h1>Proximas Citas</h1>
      </div>
      
      <div className='flex flex-wrap'>
        {
          
          CitasPendientes.map((item,index)=>{
            
            return(
              <div key={index} className={colorFondo(index)}>
                <div className='flex flex-nowrap text-center'>
                  <IconContext.Provider value={{size:'2rem'}}>
                    <biIcon.BiTime />
                  </IconContext.Provider>

                  
                  <h2 className=' font-bold'>{item.cit_fecha}</h2>
                  

                </div>
                <div className='flex flex-nowrap'>
                  <IconContext.Provider value={{size:'2.5rem'}}>
                      <mdIcon.MdPlace color={colorIcono(index)}/>
                  </IconContext.Provider>
                  <label>{item.cit_direccion}</label>


                </div>
                <div className='flex flex-nowrap grid justify-items-center'>
                  <button onClick={()=>{stateShowDetallesCita(item.cli_documento,item.ase_documento,item.cit_fecha)}} className='button-mas'>
                    <h2>Mas..</h2>
                  </button>

                </div>

              </div>
            )
          })

        }

      </div>
      <div className='flex flex-wrap'>
        {showDetallesCita ?(
          <div className='ventana-detalles-cita'>
             <aiIcon.AiFillCloseCircle onClick={()=>setShowDetallesCita(false)} className='button-cerrar'/>
            <h3>
              Detalle Cita
            </h3>
            <div className='flex flex-wrap'>
              {detalleCitaPendiente.map((item,index)=>{
                return(
                  <div key={index}>
                    <div className='flex flex-wrap'>
                      <label>Fecha:</label>
                      <h4>{item.cit_fecha}</h4>
                    </div>
                    <div className='flex flex-wrap'>
                      <label>Cliente:</label>
                      <h4>{item.cli_documento}</h4>
                    </div>
                    <div className='flex flex-wrap'>
                      <label>Asesor:</label>
                      <h4>{item.ase_documento}</h4>
                    </div>
                    <div className='flex flex-wrap'>
                      <label>Direccion:</label>
                      <h4>{item.cit_direccion}</h4>
                    </div>

                  </div>

                )
                
              })}

              
              
            </div>


          </div>
        ):null

        }
      </div>
      {/**CITAS PASADAS */}
      <div className='flex flex-wrap mt-6'>
        <IconContext.Provider value={{size:'2.5rem'}}>
          <bsIcon.BsFillCalendarCheckFill />
        </IconContext.Provider>
        <h1>Citas Pasadas</h1>
      </div>
      {/**CITAS PASADAS */}
      <div className='flex flex-wrap'>
      {
          
          CitasPendientes.map((item,index)=>{
            
            return(
              <div key={index} className={colorFondoCitasPasadas(index)}>
                <div className='flex flex-nowrap text-center'>
                  <IconContext.Provider value={{size:'2rem'}}>
                    <biIcon.BiTime />
                  </IconContext.Provider>

                  
                  <h2 className='text-base font-bold'>{item.cit_fecha}</h2>
                  

                </div>
                <div className='flex flex-nowrap'>
                  <IconContext.Provider value={{size:'2.5rem'}}>
                      <mdIcon.MdPlace color='FF9F76'/>
                  </IconContext.Provider>
                  <label className='text-sm'>{item.cit_direccion}</label>


                </div>
                <div className='flex flex-nowrap grid justify-items-center'>
                  <button onClick={()=>stateShowDetallesCitaAntigua(item.cli_documento,item.ase_documento,item.cit_fecha)} className='button-mas2'>
                    <h2 className='text-base'>Mas..</h2>
                  </button>

                </div>

              </div>
            )
          })

        }

      </div>
      <div className='flex flex-wrap'>
        {showDetallesCitaAntigua ?(
          <div className='ventana-detalles-cita'>
            <aiIcon.AiFillCloseCircle onClick={()=>setShowDetallesCitaAntigua(false)} className='button-cerrar'/>
            <h3>
              Detalle Cita
            </h3>
            <div className='flex flex-wrap'>
              {detalleCitaPendiente.map((item,index)=>{
                return(
                  <div key={index}>
                    <div className='flex flex-wrap'>
                      <label>Fecha:</label>
                      <h4>{item.cit_fecha}</h4>
                    </div>
                    <div className='flex flex-wrap'>
                      <label>Cliente:</label>
                      <h4>{item.cli_documento}</h4>
                    </div>
                    <div className='flex flex-wrap'>
                      <label>Asesor:</label>
                      <h4>{item.ase_documento}</h4>
                    </div>
                    <div className='flex flex-wrap'>
                      <label>Direccion:</label>
                      <h4>{item.cit_direccion}</h4>
                    </div>

                  </div>

                )
                
              })}

              
              
            </div>


          </div>
        ):null

        }
      </div>

      

      

    </div>
    </>
    
  )
}

export default Cita