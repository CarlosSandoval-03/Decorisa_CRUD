import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import * as faIcon from 'react-icons/fa';
import * as biIcon from 'react-icons/bi';
import * as mdIcon from 'react-icons/md';
import * as bsIcon from 'react-icons/bs';
import * as aiIcon from 'react-icons/ai';
import Navbar from '../Components/Navbar';
import { Formik } from 'formik';



function Cita() {
  const [showDetallesCita, setShowDetallesCita] = useState(false)
  const [showDetalleCitAnt, setShowDetalleCitAnt] = useState(false)
  const [showFormCrearCita, setshowFormCrearCita] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showEditarCita, setShowEditarCita] = useState(false)
  const [idCita, setIdCita] = useState([{cli_documento:0,ase_documento:0,cit_fecha:''}])
  const [CitasPendientes, setCitasPendientes] = useState([{
    cit_fecha: '',
    cit_direccion: '',
    cli_documento: 0,
    ase_documento: 0,
  }])
  const [allCitas, setallCitas] = useState([{
    cit_fecha: '',
    cit_direccion: '',
    cli_documento: 0,
    ase_documento: 0,
  }])
  const [detalleCita, setDetalleCita] = useState([{
    cit_fecha: '',
    cit_direccion: '',
    cli_documento: 0,
    ase_documento: 0,
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


  interface Citas {
    cli_documento: number,
    ase_documento: number,
    cit_fecha: string,

    cit_direccion: string
  }

  const traerInfoAseAndCli =()=>{
    fetch('https://decorisaserver.azurewebsites.net/api/asesor', {

    })
      .then(response => response.json()).then(data => {
        console.log('aaa')
        console.log(data)

        setAsesores(data)

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


  const traerCitasPendientes = () => {
    setIsLoading(true)
    fetch('https://decorisaserver.azurewebsites.net/api/procedimientos/citas_pendientes', {

    })
      .then(response => response.json()).then(data => {
        console.log('sera')
        console.log(data)
        setCitasPendientes(data[0])
        setIsLoading(false)
      })

  }
  const traerAllCitas = () => {
    setIsLoading(true)
    fetch('https://decorisaserver.azurewebsites.net/api/cita', {

    })
      .then(response => response.json()).then(data => {
        console.log(data)
        setallCitas(data)
        setIsLoading(false)
      })

  }
  const stateShowDetallesCita = (cli_Documento: number, ase_Documento: number, cit_fecha: string) => {
    //traer la info de esa cita
    setIsLoading(true)
    let url:string='https://decorisaserver.azurewebsites.net/api/cita/key/'+cit_fecha+'&'+ase_Documento+'&'+cli_Documento
    fetch(url, {

    })
      .then(response => response.json()).then(data => {
        console.log(data)

        setDetalleCita(data)
        setIsLoading(false)
        setShowDetallesCita(true)
      })
    

  }
  const stateShowDetallesCitaAntigua = (cli_Documento: number, ase_Documento: number, cit_fecha: string) => {
    //traer la info de esa cita
    setIsLoading(true)
    let url:string='https://decorisaserver.azurewebsites.net/api/cita/key/'+cit_fecha+'&'+ase_Documento+'&'+cli_Documento
    fetch(url, {

    })
      .then(response => response.json()).then(data => {
        console.log(data)
        setDetalleCita(data)
        setIsLoading(false)
        setShowDetalleCitAnt(true)
      })
    
    
    

  }
  const crearCita = async (values: Citas) => {
    
    setIsLoading(true)
    let citaCrear:Citas={
      cli_documento:values.cli_documento, ase_documento:values.ase_documento, cit_fecha:values.cit_fecha, cit_direccion:values.cit_direccion
    }
    fetch('https://decorisaserver.azurewebsites.net/api/cita', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(citaCrear)

    })
    .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
      .then(() => {
       setshowFormCrearCita(false)
        traerAllCitas()
        traerCitasPendientes()
        setIsLoading(false)


      })
    
    
    

  }
  const eliminarCita = (cli_documento: number, ase_documento: number, cit_fecha: string) => {
    //llamar para 
    setIsLoading(true)
    let fechaDelete=cit_fecha.split('T',1)
    let url:string='https://decorisaserver.azurewebsites.net/api/cita/key/'+fechaDelete+'&'+ase_documento+'&'+cli_documento
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },

    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
    .then(() => {
      setShowDetalleCitAnt(false)
      setShowDetallesCita(false)
      traerAllCitas()
      traerCitasPendientes()
      setIsLoading(false)
      

    })
      
    
  }
  const editarCita=(values: Citas)=>{
    
    console.log(JSON.stringify(values))
    let url:string='https://decorisaserver.azurewebsites.net/api/cita/key/'+idCita[0].cit_fecha+':00.000Z'+'&'+idCita[0].ase_documento+'&'+idCita[0].cli_documento 
    console.log(url)
    setIsLoading(true)
    fetch(url, {
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(response => console.log('Success:', response))
    .then(() => {
      traerAllCitas()
      traerCitasPendientes()
      setShowEditarCita(false)
      setIsLoading(false)
    })



  }

  const colorFondo = (index: number): string => {
    if (index % 2 == 0) {
      return (
        'CitaPendiente1'
      )
    } else {
      return (
        'CitaPendiente2'
      )
    }
  }
  const colorFondoCitasPasadas = (index: number): string => {
    if (index % 2 == 0) {
      return (
        'CitaPasada1'
      )
    } else {
      return (
        'CitaPasada2'
      )
    }
  }
  const colorIcono = (index: number): string => {
    if (index % 2 == 0) {
      return (
        'FF9F76'
      )
    } else {
      return (
        'FFEEDF'
      )
    }
  }

  useEffect(() => {
    traerCitasPendientes()
    traerAllCitas()
    traerInfoAseAndCli()
  }, []);


  if (isLoading == false) {
    return (
      <>
        <Navbar></Navbar>
        <div className='pagina'>
          <div className='flex flex-wrap'>
            <IconContext.Provider value={{ size: '2.5rem' }}>
              <faIcon.FaCalendarAlt />
            </IconContext.Provider>
            <h1>Proximas Citas</h1>
          </div>

          <div className='flex flex-wrap'>
            {CitasPendientes.map((item, index) => {

              
                return (
                  <div key={index} className={colorFondo(index)}>
                    <div className='flex flex-nowrap text-center'>
                      <IconContext.Provider value={{ size: '2rem' }}>
                        <biIcon.BiTime />
                      </IconContext.Provider>


                      <h2 className=' font-bold'>{item.cit_fecha}</h2>


                    </div>
                    <div className='flex flex-nowrap'>
                      <IconContext.Provider value={{ size: '2.5rem' }}>
                        <mdIcon.MdPlace color={colorIcono(index)} />
                      </IconContext.Provider>
                      <label>{item.cit_direccion}</label>


                    </div>
                    <div className='flex flex-nowrap grid justify-items-center'>
                      <button onClick={() => {stateShowDetallesCita(item.cli_documento, item.ase_documento, item.cit_fecha) }} className='button-mas'>
                        <h2>Mas..</h2>
                      </button>

                    </div>

                  </div>
                )
              })

            }

          </div>
          <div className='flex flex-wrap'>

            {showDetallesCita ?  (
              <div key='citaReciente' className='ventana-detalles-cita'>
                <div className='flex flex wrap'>
                  <aiIcon.AiFillCloseCircle key='iconoCitaReciente' onClick={() => setShowDetallesCita(false)} className='button-cerrar' />
                  <h2 className='text-3xl font-bold'>Detalle Cita</h2>

                </div>

                <div className='flex flex-wrap'>
                  {detalleCita.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className='flex flex-wrap'>
                          <h3 className='text-base'>Fecha:</h3>
                          <h2 className='text-base font-bold'>{item.cit_fecha}</h2>
                        </div>
                        <div className='flex flex-wrap'>
                          <h3 className='text-base'>Cliente:</h3>
                          <h2 className='text-base font-bold'>{item.cli_documento}</h2>
                        </div>
                        <div className='flex flex-wrap'>
                          <h3 className='text-base'>Asesor:</h3>
                          <h2 className='text-base font-bold'>{item.ase_documento}</h2>
                        </div>
                        <div className='flex flex-wrap'>
                          <h3 className='text-base'>Direccion:</h3>
                          <h2 className='text-base font-bold'>{item.cit_direccion}</h2>
                        </div>
                        <div className='flex flex-row-reverse w-full'>
                          <button className='btn-eliminar-cita' onClick={() => { eliminarCita(item.cli_documento, item.ase_documento, item.cit_fecha) }} >Eliminar</button>
                          <biIcon.BiEditAlt onClick={() => { 
                           setIdCita([{cli_documento:item.cli_documento, ase_documento:item.ase_documento,cit_fecha:item.cit_fecha}]) 
                           setShowEditarCita(true)
                           }} className='icono-boton' size={'5rem'} />

                        </div>
                      </div>


                    )

                  })}



                </div>



              </div>
            ) : null

            }
          </div>
          {/**CITAS PASADAS */}
          <div className='flex flex-wrap mt-6'>
            <IconContext.Provider value={{ size: '2.5rem' }}>
              <bsIcon.BsFillCalendarCheckFill />
            </IconContext.Provider>
            <h1>Citas Pasadas</h1>
          </div>
          {/**CITAS PASADAS */}
          <div className='flex flex-wrap'>
            {allCitas.map((item, index) => {
              if(item.cli_documento==idCita[0].cli_documento && item.ase_documento==idCita[0].ase_documento &&  item.cit_fecha==idCita[0].cit_fecha && showEditarCita==true ){
                return(
                  <div className='form-editar-cita'>
                    <aiIcon.AiFillCloseCircle onClick={() => setShowEditarCita(false)} className='button-cerrar' />
                    <Formik
                  initialValues={{
                    cli_documento: item.cli_documento,
                    ase_documento: item.ase_documento,
                    cit_fecha: '',
                    cit_hora: '',
                    cit_direccion: item.cit_direccion
                  }}
                  onSubmit={async (values) => {
                    var nuevaCita: Citas = {
                      cli_documento: values.cli_documento,
                      ase_documento: values.ase_documento,
                      cit_fecha: values.cit_fecha +'T' + values.cit_hora,
                      cit_direccion: values.cit_direccion,
                    };


                    editarCita(nuevaCita)


                    //alert(JSON.stringify(values));

                  }}

                >
                  {({ handleSubmit, values, handleChange }) => (
                    <form onSubmit={handleSubmit}>


                      <div className='grid grid-cols-2'>
                        <div className='col-star1-1'>
                        <div className=" ">
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
                        <div className="">
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


                        </div>
                        <div className='col-start-2'>

                          <div className="">
                            <label className="">Fecha:</label>
                            <input name="cit_fecha" type="date" placeholder="" className=""
                              value={values.cit_fecha}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="">
                            <label className="">Hora:</label>
                            <input name="cit_hora" type="time" placeholder="" className=""
                              value={values.cit_hora}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="">
                            <label className="">Direccion:</label>
                            <input name="cit_direccion" type="text" placeholder="" className=""
                              value={values.cit_direccion}
                              onChange={handleChange}
                            />
                          </div>



                        </div>
                        <div className='grid col-span-2 place-items-end'>
                          <button type="submit" className="btn-add-product "> Editar </button>
                        </div>

                      </div>

                    </form>
                  )}

                </Formik>
                  </div>
                  

                )
              }else{
                return (
                  <div key={index} className={colorFondoCitasPasadas(index)}>
                    <div className='flex flex-nowrap text-center'>
                      <IconContext.Provider value={{ size: '2rem' }}>
                        <biIcon.BiTime />
                      </IconContext.Provider>


                      <h2 className='text-base font-bold'>{item.cit_fecha}</h2>


                    </div>
                    <div className='flex flex-nowrap items-center'>
                      <IconContext.Provider value={{ size: '1.5rem' }}>
                        <mdIcon.MdPlace color='FF9F76' />
                      </IconContext.Provider>
                      <label className='text-sm'>{item.cit_direccion}</label>

                      
                    </div>
                    <div className='flex flex-nowrap items-center'>
                      <IconContext.Provider value={{ size: '1rem' }}>
                        <biIcon.BiEditAlt onClick={() => { 
                          setIdCita([{cli_documento:item.cli_documento, ase_documento:item.ase_documento, cit_fecha:item.cit_fecha}])
                          setShowEditarCita(true)
                        }} className='icono-boton' size={'2.5rem'} />
                      </IconContext.Provider>
                      <label className='text-sm'>Editar</label>

                      
                    </div>

                    <div className='flex flex-nowrap grid justify-items-center'>
                      <button onClick={() => stateShowDetallesCitaAntigua(item.cli_documento, item.ase_documento, item.cit_fecha)} className='button-mas2'>
                        <h2 className='text-base'>Mas..</h2>
                      </button>

                    </div>


                  </div>
                )
              }

                
              })

            }

          </div>
          <div className='flex flex-wrap'>
            


          </div>
          <div className='flex flex-wrap'>
            {showDetalleCitAnt ? (
              


              <div key='citaantigua' className='ventana-detalles-cita'>
                <div className='flex flex-wrap'>
                  <aiIcon.AiFillCloseCircle key='iconoCitaantigua' onClick={() => setShowDetalleCitAnt(false)} className='button-cerrar' />
                  <h2 className='text-3xl font-bold'>Detalle Cita</h2>
                </div>

                <div className='flex flex-wrap'>
                  {detalleCita.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className='flex flex-wrap'>
                          <h3 className='text-base'>Fecha:</h3>
                          <h2 className='text-base font-bold'>{item.cit_fecha}</h2>
                        </div>
                        <div className='flex flex-wrap'>
                          <h3 className='text-base'>Cliente:</h3>
                          <h2 className='text-base font-bold'>{item.cli_documento}</h2>
                        </div>
                        <div className='flex flex-wrap'>
                          <h3 className='text-base'>Asesor:</h3>
                          <h2 className='text-base font-bold'>{item.ase_documento}</h2>
                        </div>
                        <div className='flex flex-wrap'>
                          <h3 className='text-base'>Direccion:</h3>
                          <h2 className='text-base font-bold'>{item.cit_direccion}</h2>
                        </div>
                        <div className='flex flex-row-reverse w-full items-center'>
                          <button className='btn-eliminar-cita' onClick={() => { eliminarCita(item.cli_documento, item.ase_documento, item.cit_fecha) }} >Eliminar</button>
                          <h2 className='text-base font-bold mr-12'>Editar Cita</h2>
                          

                        </div>

                      </div>

                    )

                  })}



                </div>


              </div>
            ) : null

            }
          </div>


          <div className='nueva-cita flex flex-row-reverse'>
            <div className='CitaPendiente1  grid justify-items-center'>
              <mdIcon.MdAccessTimeFilled className='icono-boton' size={'7rem'} onClick={() => setshowFormCrearCita(true)} />
              <h2 className='font-bold'>Nueva Cita</h2>
            </div>
            {showFormCrearCita ? (
              <div className='form-crear-cita'>
                <div className='flex flex-wrap'>
                  <aiIcon.AiFillCloseCircle onClick={() => setshowFormCrearCita(false)} className='button-cerrar' />
                  <h3>Nueva Cita</h3>

                </div>

                <Formik
                  initialValues={{
                    cli_documento: 0,
                    ase_documento: 0,
                    cit_fecha: '',
                    cit_hora: '',
                    cit_direccion: ''
                  }}
                  onSubmit={async (values) => {
                    var nuevaCita: Citas = {
                      cli_documento: values.cli_documento,
                      ase_documento: values.ase_documento,
                      cit_fecha: values.cit_fecha +'T' + values.cit_hora,
                      cit_direccion: values.cit_direccion,
                    };


                    crearCita(nuevaCita)


                    //alert(JSON.stringify(values));

                  }}

                >
                  {({ handleSubmit, values, handleChange }) => (
                    <form onSubmit={handleSubmit}>


                      <div className='grid grid-cols-2'>
                        <div className='col-star1-1'>
                        <div className=" ">
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
                        <div className="">
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


                        </div>
                        <div className='col-start-2'>

                          <div className="">
                            <label className="">Fecha:</label>
                            <input name="cit_fecha" type="date" placeholder="" className=""
                              value={values.cit_fecha}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="">
                            <label className="">Hora:</label>
                            <input name="cit_hora" type="time" placeholder="" className=""
                              value={values.cit_hora}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="">
                            <label className="">Direccion:</label>
                            <input name="cit_direccion" type="text" placeholder="" className=""
                              value={values.cit_direccion}
                              onChange={handleChange}
                            />
                          </div>



                        </div>




                        <div className='grid col-span-2 place-items-end'>
                          <button type="submit" className="button-detalles "> Crear </button>
                        </div>

                      </div>






                    </form>
                  )}

                </Formik>

              </div>

            ) : null

            }
          </div>









        </div>
      </>

    )
  }

}

export default Cita