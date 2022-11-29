import React, { useState, useEffect } from 'react'
import { IconContext } from 'react-icons';
import * as hiIcon from 'react-icons/hi';
import * as mdIcon from 'react-icons/md';
import * as biIcon from 'react-icons/bi';
import * as aiIcon from 'react-icons/ai';

import Navbar from '../Components/Navbar'
import { Formik } from 'formik';


function Sucursal() {
  const [showEditarSucursal, setShowEditarSucursal] = useState(false)
  const [idSucursalEditar, setIdSucursalEditar] = useState('')
  const [showFormCrearSucursal, setshowFormCrearSucursal] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [Sucursales, setSucursales] = useState([{ suc_direccion:'', suc_nombre:'' }])

  interface Sucursal {
    suc_nombre: string,
    suc_direccion: string,

  }
  
  


  const traerSucursales = async()=>{
    
    let sucursal: { suc_direccion: string; suc_nombre: string; }[] = []
    // busca trae las sucursales
    fetch('https://decorisaserver.azurewebsites.net/api/sucursal', {
      mode: 'cors'
    })
      .then(response => response.json()).then(data => {
        for (const obj of data) {
          sucursal.push(obj)
        }
        console.log(sucursal)
      })
    setSucursales(sucursal)
    
    
    setIsLoading(false)
  }
    
  

  const statusShowEditarSucursal = (direccion: string) => {
    setShowEditarSucursal(true)
    setIdSucursalEditar(direccion)
  }

  const editarSucursal = async (values: Sucursal) => {
    let SucEditada={suc_nombre: values.suc_nombre,
      suc_direccion: values.suc_direccion}

    let id:string=values.suc_direccion.replaceAll(' ', '%20')
    id=id.replaceAll('-','%23')

    let url:string='https://decorisaserver.azurewebsites.net/api/sucursal/'+id
    console.log(url)

    setIsLoading(true)
    fetch(url, {
      method:'PUT',
      body:JSON.stringify(SucEditada)

    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    
    traerSucursales()
    setShowEditarSucursal(false)

  }
  const crearSucursal =  (values: Sucursal) => {
    // se envia la info para crear
    let SucCrear={suc_nombre: values.suc_nombre,
      suc_direccion: values.suc_direccion}
    console.log(JSON.stringify(SucCrear))


    setIsLoading(true)
    fetch('https://decorisaserver.azurewebsites.net/api/sucursal', {
      method:'POST',
      body:JSON.stringify(SucCrear)

    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    
    traerSucursales()
    setshowFormCrearSucursal(false)

  }

  useEffect(() => {
    traerSucursales()
  }, []);

  if (isLoading==false) {
    return (
    <>
      <Navbar></Navbar>

      <div className='pagina'>
        <h1></h1>
        <div className='flex flex-wrap'>
          <IconContext.Provider value={{ size: '2.5rem' }}>
            <hiIcon.HiOfficeBuilding />
          </IconContext.Provider>
          <h1>Sucursales</h1>
        </div>
        <h2>Ubica la Sucursal que te quede mas cerca y visitanos</h2>

        <div className='flex flex-wrap'>
          
          {Sucursales.map((item, index) => {
            if (item.suc_direccion == idSucursalEditar && showEditarSucursal == true) {
              return (

                <div key={index} className='ventana-edit-sucursal '>
                  <aiIcon.AiFillCloseCircle onClick={() => setShowEditarSucursal(false)} className='button-cerrar' />
                  <div className=' grid justify-items-center'>
                    <div className='circulo   grid justify-items-center'>
                      <mdIcon.MdPlace color='000000' size={'6rem'} />
                    </div>
                    <Formik
                      initialValues={{
                        suc_nombre: item.suc_nombre,
                        suc_direccion: item.suc_direccion,
                      }}
                      onSubmit={async (values) => {

                        editarSucursal(values)
                        //alert(JSON.stringify(values));

                      }}

                    >
                      {({ handleSubmit, values, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                          <div className=''>
                            <div className="flex flex-nowrap items-center ">
                              <label className="">Nombre:</label>
                              <input name="suc_nombre" type="text" placeholder={item.suc_nombre} className=""
                                value={values.suc_nombre}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex flex-nowrap items-center ">
                              <label className="">Direccion:</label>
                              <input name="suc_direccion" type="text" placeholder={item.suc_nombre} className=""
                                value={values.suc_direccion}
                                onChange={handleChange}
                              />
                            </div>
                            <div className='flex flex-col justify-center items-center '>
                              <button type="submit" className="btn-add-product "> Editar </button>
                            </div>

                          </div>




                        </form>
                      )}

                    </Formik>


                  </div>



                </div>


              )
            } else {


              return (
                
                <div key={index} className='sucursal grid justify-items-center'>
                  
                  <div className='circulo   grid justify-items-center'>
                    <mdIcon.MdPlace color='FFEEDF' size={'6rem'} />
                  </div>
                  <h2 className='text-3xl font-bold'>{item.suc_nombre}</h2>
                  <div className='flex flex-wrap'>
                    <label>Direccion</label>
                    <h2 className='text-base'>{item.suc_direccion}</h2>
                  </div>
                  <biIcon.BiEditAlt onClick={() => { statusShowEditarSucursal(item.suc_direccion) }} className='icono-boton' size={'5rem'} />

                </div>
              )
            }
          })
          }


          <div className='sucursal-nuevo grid justify-items-center content-center'>
            <mdIcon.MdOutlineAddBusiness onClick={() => { setshowFormCrearSucursal(true) }} className='icono-boton' size={'9rem'} />
            <h2 className='text-3xl font-bold'>Nueva Sucursal</h2>
          </div>
          {showFormCrearSucursal ? (
            <div className='sucursal-form'>
              <aiIcon.AiFillCloseCircle onClick={() => setshowFormCrearSucursal(false)} className='button-cerrar' />
              <h3>Nueva Sucursal</h3>

              <div className=' grid justify-items-center'>
                <Formik
                  initialValues={{
                    suc_nombre: '',
                    suc_direccion: '',


                  }}
                  onSubmit={async (values) => {

                    crearSucursal(values)


                    //alert(JSON.stringify(values));

                  }}

                >
                  {({ handleSubmit, values, handleChange }) => (
                    <form onSubmit={handleSubmit}>
                      <div className=''>
                        <div className="flex flex-nowrap items-center ">
                          <label className="">Nombre:</label>
                          <input name="suc_nombre" type="text" placeholder='nombre' className=""
                            value={values.suc_nombre}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="flex flex-nowrap items-center ">
                          <label className="">Direccion:</label>
                          <input name="suc_direccion" type="text" placeholder='direccion' className=""
                            value={values.suc_direccion}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='flex flex-col justify-center items-center '>
                          <button type="submit" className="button-mas "> Crear </button>
                        </div>
                      </div>
                    </form>
                  )}

                </Formik>


              </div>


            </div>
          ) : null

          }


        </div>






      </div>
    </>

  )
    


  }

}

export default Sucursal