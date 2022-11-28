import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import * as faIcon from 'react-icons/fa';
import * as biIcon from 'react-icons/bi';
import * as mdIcon from 'react-icons/md';
import * as bsIcon from 'react-icons/bs';
import * as aiIcon from 'react-icons/ai';
import Navbar from '../Components/Navbar';
import { Formik } from 'formik';

let CitasPendientes = [
  {
    cit_fecha: '2020/07/10 14:00',
    cit_direccion: 'Cra 102 #154-30 int a apto 205',
    cli_documento: 100021212,
    ase_documento: 123442121,
  },
  {
    cit_fecha: '2020/07/10 14:00',
    cit_direccion: 'Cra 102 #154-30 int a apto 205',
    cli_documento: 100021212,
    ase_documento: 123442121,
  },
  {
    cit_fecha: '2020/07/10 14:00',
    cit_direccion: 'Cra 102 #154-30 int a apto 205',
    cli_documento: 100021212,
    ase_documento: 123442121,
  },

]
let detalleCitaPendiente = [
  {
    cit_fecha: '',
    cit_direccion: '',
    cli_documento: 0,
    ase_documento: 0,
  }
]

function Cita() {
  const [showDetallesCita, setShowDetallesCita] = useState(false)
  const [showDetallesCitaAntigua, setShowDetallesCitaAntigua] = useState(false)
  const [showFormCrearCita, setshowFormCrearCita] = useState(false)

  interface Citas {
    cli_documento: number,
    ase_documento: number,
    cit_fecha: string,
    cit_direccion: string
  }

  const traerCitasPendientes = () => {
    let proximasCitas = [
      {
        cit_fecha: '2020/07/10 14:00',
        cit_direccion: 'Cra 100 #154-30 int a apto 205',
        cli_documento: 100021212,
        ase_documento: 123442121,
      },
      {
        cit_fecha: '2020/07/10 14:00',
        cit_direccion: 'Cra 102 #154-30 int a apto 205',
        cli_documento: 100021212,
        ase_documento: 123442121,
      },
      {
        cit_fecha: '2020/07/10 14:00',
        cit_direccion: 'Cra 102 #154-30 int a apto 205',
        cli_documento: 100021212,
        ase_documento: 123442121,
      },
    ]
    CitasPendientes = proximasCitas


  }
  const stateShowDetallesCita = (cli_Documento: number, ase_Documento: number, cit_fecha: string) => {
    //traer la info de esa cita
    let cita = [
      {
        cit_fecha: '2020/07/10 14:00',
        cit_direccion: 'Cra 102 #154-30 int a apto 205',
        cli_documento: 100021212,
        ase_documento: 123442121,
      }

    ]
    detalleCitaPendiente = cita
    setShowDetallesCita(true)

  }
  const stateShowDetallesCitaAntigua = (cli_Documento: number, ase_Documento: number, cit_fecha: string) => {
    //traer la info de esa cita
    let cita = [
      {
        cit_fecha: '2020/07/10 14:00',
        cit_direccion: 'Cra 102 #154-30 int a apto 205',
        cli_documento: 100021212,
        ase_documento: 123442121,
      }

    ]
    detalleCitaPendiente = cita
    setShowDetallesCitaAntigua(true)

  }
  const crearCita = async (values: Citas) => {
    //enviar la info
    console.log(values.cit_fecha)
    setshowFormCrearCita(false)

  }
  const eliminarCita = (cli_documento: number, ase_documento: number, cit_fecha: string) => {
    //llamar para eliminar
    console.log('aaaaaa')
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
  traerCitasPendientes()
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
          {

            CitasPendientes.map((item, index) => {

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
                    <button onClick={() => { stateShowDetallesCita(item.cli_documento, item.ase_documento, item.cit_fecha) }} className='button-mas'>
                      <h2>Mas..</h2>
                    </button>

                  </div>

                </div>
              )
            })

          }

        </div>
        <div className='flex flex-wrap'>
          {showDetallesCita ? (
            <div  key='citaReciente' className='ventana-detalles-cita'>
              <div className='flex flex wrap'>
                <aiIcon.AiFillCloseCircle key='iconoCitaReciente' onClick={() => setShowDetallesCita(false)} className='button-cerrar' />
                <h2 className='text-3xl font-bold'>Detalle Cita</h2>

              </div>

              <div className='flex flex-wrap'>
                {detalleCitaPendiente.map((item, index) => {
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
          {

            CitasPendientes.map((item, index) => {

              return (
                <div key={index} className={colorFondoCitasPasadas(index)}>
                  <div className='flex flex-nowrap text-center'>
                    <IconContext.Provider value={{ size: '2rem' }}>
                      <biIcon.BiTime />
                    </IconContext.Provider>


                    <h2 className='text-base font-bold'>{item.cit_fecha}</h2>


                  </div>
                  <div className='flex flex-nowrap'>
                    <IconContext.Provider value={{ size: '2.5rem' }}>
                      <mdIcon.MdPlace color='FF9F76' />
                    </IconContext.Provider>
                    <label className='text-sm'>{item.cit_direccion}</label>


                  </div>
                  <div className='flex flex-nowrap grid justify-items-center'>
                    <button onClick={() => stateShowDetallesCitaAntigua(item.cli_documento, item.ase_documento, item.cit_fecha)} className='button-mas2'>
                      <h2 className='text-base'>Mas..</h2>
                    </button>

                  </div>

                </div>
              )
            })

          }

        </div>
        <div className='flex flex-wrap'>
          {showDetallesCitaAntigua ? (


            <div key='citaantigua' className='ventana-detalles-cita'>
              <div className='flex flex-wrap'>
                <aiIcon.AiFillCloseCircle key='iconoCitaantigua' onClick={() => setShowDetallesCitaAntigua(false)} className='button-cerrar' />
                <h2 className='text-3xl font-bold'>Detalle Cita</h2>
              </div>

              <div className='flex flex-wrap'>
                {detalleCitaPendiente.map((item, index) => {
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
                    cit_fecha: values.cit_fecha + ' ' + values.cit_hora,
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
                        <div className="">
                          <label className="">Documento Cliente:</label>
                          <input name="cli_documento" type="number" placeholder="" className=""
                            value={values.cli_documento}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="">
                          <label className="">Documento Asesor:</label>
                          <input name="ase_documento" type="text" placeholder="" className=""
                            value={values.ase_documento}
                            onChange={handleChange}
                          />
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

export default Cita