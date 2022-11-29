import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import * as riIcon from 'react-icons/ri';
import * as imIcon from 'react-icons/im';
import * as bsIcon from 'react-icons/bs';
import * as aiIcon from 'react-icons/ai';
import * as biIcon from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { Formik } from 'formik';

let Productores = [
  {
    pro_nombreEmpresa: '',
    pro_contactoAsesor: '',
    pro_nombre_asesor: '',
    pro_comprasMes: 0,
    pro_tipoProductos: ''

  },

]


function Productor() {

  interface Productor {
    pro_nombreEmpresa: string,
    pro_contactoAsesor: number,
    pro_nombre_asesor: string,
    pro_tipoProductos: string,
    pro_comprasMes: number,

  }
  const [ShowFormCrearProductor, setShowFormCrearProductor] = useState(false)
  const traerProductores = () => {
    // traer datos de la base
    fetch('https://decorisaserver.azurewebsites.net/api/productor',{
      mode:'no-cors'
    })
    .then(response =>{ 
      console.log(JSON.stringify(response))
    })
    let productor = [
      {
        pro_nombreEmpresa: 'Panorama',
        pro_contactoAsesor: '3143587489',
        pro_nombre_asesor: 'Gloria',
        pro_comprasMes: 21,
        pro_tipoProductos: 'Cortinas'

      },
      {
        pro_nombreEmpresa: 'Porcelanatos',
        pro_contactoAsesor: '3143587489',
        pro_nombre_asesor: 'Gloria',
        pro_comprasMes: 3,
        pro_tipoProductos: 'Pisos'


      },
      {
        pro_nombreEmpresa: 'Panorama',
        pro_contactoAsesor: '3143587489',
        pro_nombre_asesor: 'Gloria',
        pro_comprasMes: 21,
        pro_tipoProductos: 'Cortinas'

      },
    ]

    Productores = productor
  }
  const CrearProductor = async (values: Productor) => {
    setShowFormCrearProductor(false)
  }
  traerProductores()
  return (
    <>
      <Navbar></Navbar>
      <div className='pagina space-y-4'>
        <div className='flex flex-wrap'>
          <IconContext.Provider value={{ size: '2.5rem' }}>
            <riIcon.RiBuilding3Fill />
          </IconContext.Provider>
          <h1>Productores</h1>
        </div>
        <div>
          <h2 className='text-3xl font-bold'>Cortinas:</h2>
          <div className='flex flex-wrap'>
            {Productores.map((item, index) => {
              if (item.pro_tipoProductos == 'Cortinas') {
                return (
                  <div key={index} className='productor'>
                    <div className='grid grid-cols-3'>

                      <div className='col-span-2 space-y-2'>
                        <h2 className='text-3xl font-bold'>{item.pro_nombreEmpresa}</h2>
                        <div className='flex flex-wrap items-center'>
                          <imIcon.ImUserTie />
                          <h3 className='text-base'>Asesor:</h3>
                          <h2 className='text-base'>{item.pro_nombre_asesor}</h2>

                        </div>
                        <div className='flex flex-wrap items-center'>
                          <bsIcon.BsFillTelephoneFill />
                          <h3 className='text-base'>Tel:   </h3>
                          <h2 className='text-base'>{item.pro_contactoAsesor}</h2>
                        </div>
                        <div className='flex flex-wrap items-center'>
                          <biIcon.BiPackage />
                          <h3 className='text-base'>Numero Compras:   </h3>
                          <h2 className='text-base'>{item.pro_comprasMes}</h2>

                        </div>

                      </div>

                      <div className='col-start-3  grid justify-items-center items-center'>
                        <IconContext.Provider value={{ color: 'FF9F76', size: '6rem' }}>
                          <bsIcon.BsFillBriefcaseFill />
                        </IconContext.Provider>


                      </div>


                    </div>


                  </div>
                )
              }



            })

            }


          </div>
        </div>
        <div>
          <h2 className='text-3xl font-bold'>Pisos:</h2>
          <div className='flex flex-wrap'>
            {Productores.map((item, index) => {
              if (item.pro_tipoProductos == 'Pisos') {
                return (
                  <div key={index} className='productor'>
                    <div className='grid grid-cols-3'>

                      <div className='col-span-2 space-y-2'>
                        <h2 className='text-3xl font-bold'>{item.pro_nombreEmpresa}</h2>
                        <div className='flex flex-wrap items-center'>
                          <imIcon.ImUserTie />
                          <h3 className='text-base'>Asesor:</h3>
                          <h2 className='text-base'>{item.pro_nombre_asesor}</h2>

                        </div>
                        <div className='flex flex-wrap items-center'>
                          <bsIcon.BsFillTelephoneFill />
                          <h3 className='text-base'>Tel:   </h3>
                          <h2 className='text-base'>{item.pro_contactoAsesor}</h2>
                        </div>
                        <div className='flex flex-wrap items-center'>
                          <biIcon.BiPackage />
                          <h3 className='text-base'>Numero Compras:   </h3>
                          <h2 className='text-base'>{item.pro_comprasMes}</h2>

                        </div>

                      </div>

                      <div className='col-start-3  grid justify-items-center items-center'>
                        <IconContext.Provider value={{ color: 'FF9F76', size: '6rem' }}>
                          <bsIcon.BsFillBriefcaseFill />
                        </IconContext.Provider>


                      </div>


                    </div>


                  </div>
                )
              }



            })

            }


          </div>

        </div>
        <div className='flex flex-wrap'>
          <div className='productor grid justify-items-center'>
            <riIcon.RiBriefcase3Line size={'6rem'} className='icono-boton' onClick={() => setShowFormCrearProductor(true)} />
            <h2 className='text-3xl font-bold'>Nuevo Productor</h2>
          </div>
          {ShowFormCrearProductor ? (
            <div className='productor-form'>
              
              <Formik
                initialValues={{
                  pro_nombreEmpresa: '',
                  pro_contactoAsesor: 0,
                  pro_nombre_asesor: '',
                  pro_tipoProductos: '',
                  pro_comprasMes: 0,


                }}
                onSubmit={async (values) => {

                  CrearProductor(values)


                  //alert(JSON.stringify(values));

                }}

              >
                {({ handleSubmit, values, handleChange }) => (
                  <form onSubmit={handleSubmit}>
                    <div className='flex flex-wrap items-center'>
                      <aiIcon.AiFillCloseCircle onClick={() => setShowFormCrearProductor(false)} className='button-cerrar' />
                      <h3>Nuevo Productor</h3>
                    </div>
                    


                    <div className='grid grid-cols-2'>

                      <div className='col-start-1'>
                        <div>
                          <label className="font-bold">Nombre Empresa</label>
                          <input name="pro_nombreEmpresa" type="text" placeholder="" className=""
                            value={values.pro_nombreEmpresa}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="flex flex-nowrap items-center ">
                          <label className="">Contacto Asesor:</label>
                          <input name="pro_contactoAsesor" type="number" placeholder="" className=""
                            value={values.pro_contactoAsesor}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="flex flex-nowrap items-center ">
                          <label className="">Nombre Asesor:</label>
                          <input name="pro_nombre_asesor" type="text" placeholder="" className=""
                            value={values.pro_nombre_asesor}
                            onChange={handleChange}
                          />
                        </div>





                      </div>
                      <div className='col-start-2'>
                        <div className="flex flex-nowrap items-center">
                          <label className="">Tipo Productos</label>
                          <select
                            name="pro_tipoProductos" placeholder="" className=""
                            value={values.pro_tipoProductos}
                            onChange={handleChange}
                          >
                            <option value='Cortinas'>Cortinas</option>
                            <option value='Pisos'>Pisos</option>

                          </select>
                        </div>
                        <div className="flex flex-nowrap items-center ">
                          <label className="">Numero Compras:</label>
                          <input name="pro_comprasMes" type="number" placeholder="" className=""
                            value={values.pro_comprasMes}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='flex flex-col  place-items-end'>
                          <button type="submit" className="button-detalles "> Crear </button>
                        </div>


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

export default Productor