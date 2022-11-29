import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons';
import * as faIcon from 'react-icons/fa';
import * as aiIcon from 'react-icons/ai';
import * as bsIcon from 'react-icons/bs';
import * as siIcon from 'react-icons/si';

import Navbar from '../Components/Navbar'
import { setMaxIdleHTTPParsers } from 'http';





function Cliente() {
    const [showClientes, setShowClientes] = useState(true)
    const [showformCrearCliente, setShowFormCrearCliente] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [Clientes, setClientes] = useState([{
        cli_documento: 0,
        cli_nombreCompleto: "",
        cli_direccion: "",
        cli_numContacto: 0,
        cli_correo: ""
    }])
    const [maxVentasClientes, setmaxVentasClientes] = useState([{
        cli_nombreCompleto: "",
        Num_compras: 0
    }])

    interface Cliente {
        cli_nombreCompleto: String;

    }
    interface crearCliente {
        cli_documento: number,
        cli_nombreCompleto: String,
        cli_direccion: String,
        cli_numContacto: number,
        cli_correo: String,


    }



    const buscarClientes = async (values: Cliente) => {
        //pasar el parametro y busque a ese cliente
        // buscar los datos la base de datos


    }
    const allClientes = () => {
        // traer todos los clientes
        setIsLoading(true)
        fetch('https://decorisaserver.azurewebsites.net/api/cliente', {

        })
            .then(response => response.json()).then(data => {
                console.log(data)
                setClientes(data)

            })

    }
    const crearCliente = async (values: crearCliente) => {
        setIsLoading(true)
        let clienteCrear: crearCliente = {
            cli_documento: values.cli_documento,
            cli_nombreCompleto: values.cli_nombreCompleto,
            cli_direccion: values.cli_direccion,
            cli_numContacto: values.cli_numContacto,
            cli_correo: values.cli_correo,
        }

        console.log(JSON.stringify(clienteCrear))

        fetch('https://decorisaserver.azurewebsites.net/api/cliente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clienteCrear)

        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response))
            .then(() => {
                setShowFormCrearCliente(false)
                allClientes()
                setIsLoading(false)

            })
        //enviar la info


    }
    const mejoresClientes = () => {

        //
        fetch('https://decorisaserver.azurewebsites.net/api/consultas/clientes_frecuentes', {

        })
            .then(response => response.json()).then(data => {
                console.log(data)
                setmaxVentasClientes(data)
                setIsLoading(false)
            })


    }

    useEffect(() => {
        allClientes()
        mejoresClientes()
    }, []);
    if (isLoading == false) {
        return (

            <>


                <Navbar></Navbar>
                <div className='pagina'>
                    <h1>Clientes:</h1>
                    <Formik
                        initialValues={{
                            cli_nombreCompleto: ''
                        }}
                        onSubmit={async (values) => {

                            buscarClientes(values)


                            //alert(JSON.stringify(values));

                        }}

                    >
                        {({ handleSubmit, values, handleChange }) => (
                            <form onSubmit={handleSubmit}>
                                <div className='flex flex-nowrap'>
                                    <div className="flex flex-nowrap items-center ">
                                        <label className="">Nombre del cliente:</label>
                                        <input name="cli_nombreCompleto" type="text" placeholder="" className=""
                                            value={values.cli_nombreCompleto}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col justify-center items-center '>
                                        <button type="submit" className="button-detalles "> Buscar </button>
                                    </div>

                                </div>




                            </form>
                        )}

                    </Formik>
                    <div className='grid grid-cols-4'>
                        <div className='col-span-2 flex flex-wrap'>
                            {showClientes ? (
                                Clientes.map((item, index) => {
                                    return (
                                        <div key={index} className='Cliente'>
                                            <div className='grid  grid-cols-3'>
                                                <div className='col-start-1  grid justify-items-center items-center'>

                                                    <IconContext.Provider value={{ color: 'FF9F76', size: '4rem' }}>
                                                        <faIcon.FaUserAlt />
                                                    </IconContext.Provider>

                                                </div>
                                                <div className='col-span-2 pd-5'>
                                                    <h2>{item.cli_nombreCompleto}</h2>
                                                    <div className='flex flex-wrap'>
                                                        <aiIcon.AiFillHome />
                                                        <h3 className='text-sm'>{item.cli_direccion}</h3>

                                                    </div>
                                                    <div className='flex flex-wrap'>
                                                        <bsIcon.BsFillTelephoneFill />
                                                        <h3 className='text-sm'>{item.cli_numContacto}</h3>
                                                    </div>
                                                    <div className='flex flex-wrap'>
                                                        <siIcon.SiGmail />
                                                        <h3 className='text-sm'>{item.cli_correo}</h3>

                                                    </div>






                                                </div>

                                            </div>


                                        </div>
                                    )


                                })



                            ) : null}
                            <div className='Cliente grid justify-items-center'>
                                <IconContext.Provider value={{ size: '5.5rem', className: 'icono-boton' }}>
                                    <aiIcon.AiOutlineUserAdd onClick={() => setShowFormCrearCliente(true)} />
                                </IconContext.Provider>
                                <h2 className='text-2xl'>Nuevo Cliente</h2>
                            </div>
                            {showformCrearCliente ? (
                                <div className='formCrearCli'>
                                    <aiIcon.AiFillCloseCircle onClick={() => setShowFormCrearCliente(false)} className='button-cerrar' />
                                    <h2>Nuevo Cliente</h2>
                                    <Formik
                                        initialValues={{
                                            cli_documento: 0,
                                            cli_nombreCompleto: '',
                                            cli_direccion: '',
                                            cli_numContacto: 0,
                                            cli_correo: '',
                                        }}
                                        onSubmit={async (values) => {

                                            crearCliente(values)


                                            //alert(JSON.stringify(values));

                                        }}

                                    >
                                        {({ handleSubmit, values, handleChange }) => (
                                            <form onSubmit={handleSubmit}>


                                                <div className='grid grid-cols-2'>
                                                    <div className='col-star1-1'>
                                                        <div className="">
                                                            <label className="">Documento:</label>
                                                            <input name="cli_documento" type="number" placeholder="Precio Minimo" className=""
                                                                value={values.cli_documento}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="">
                                                            <label className="">Nombre:</label>
                                                            <input name="cli_nombreCompleto" type="text" placeholder="Precio Minimo" className=""
                                                                value={values.cli_nombreCompleto}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="">
                                                            <label className="">Direccion:</label>
                                                            <input name="cli_direccion" type="text" placeholder="Precio Minimo" className=""
                                                                value={values.cli_direccion}
                                                                onChange={handleChange}
                                                            />
                                                        </div>



                                                    </div>
                                                    <div className='col-start-2'>

                                                        <div className="">
                                                            <label className="">Correo:</label>
                                                            <input name="cli_correo" type="text" placeholder="Precio Minimo" className=""
                                                                value={values.cli_correo}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="">
                                                            <label className="">Telefono:</label>
                                                            <input name="cli_numContacto" type="number" placeholder="Precio Minimo" className=""
                                                                value={values.cli_numContacto}
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

                        <div className='col-span-2'>
                            <h1>Clientes Frecuentes</h1>
                            {maxVentasClientes.map((item, index) => {

                                if (index == 0) {
                                    return (

                                        <div key={index} className=' flex flex-wrap'>
                                            <div className='mayor'>
                                                <h2>{item.cli_nombreCompleto}</h2>
                                            </div>
                                            <h2>{item.Num_compras}</h2>


                                        </div>

                                    )
                                }
                                else if (index == 1) {
                                    return (
                                        <div key={index} className=' flex flex-wrap'>
                                            <div className='medio'>
                                                <h2>{item.cli_nombreCompleto}</h2>
                                            </div>
                                            <h2>{item.Num_compras}</h2>


                                        </div>

                                    )
                                }
                                else {
                                    return (
                                        <div key={index} className=' flex flex-wrap'>
                                            <div className='bajo'>
                                                <h2>{item.cli_nombreCompleto}</h2>
                                            </div>
                                            <h2>{item.Num_compras}</h2>


                                        </div>
                                    )
                                }

                            })
                            }



                        </div>

                    </div>




                </div>




            </>
        )
    }

}

export default Cliente