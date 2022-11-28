import { Formik } from 'formik'
import React from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'
import * as ioIcon from 'react-icons/io';
import * as aiIcon from 'react-icons/ai';
import { IconContext } from 'react-icons';
import * as faIcon from 'react-icons/fa';
import Image from 'next/image';



let Productos = [
    {
        pro_nombreId: 'Sheer Screen',
        pro_nombreEmpresa: 'Panorama',
        pro_precio: 100000,
        pro_funcionamiento: 'Enrrollable',
        pro_foto: 'http//',
    },
    {
        pro_nombreId: 'Sheer Screen',
        pro_nombreEmpresa: 'Panorama',
        pro_precio: 100000,
        pro_funcionamiento: 'Enrrollable',
        pro_foto: 'http//',
    }
    ,
    {
        pro_nombreId: 'Sheer Screen',
        pro_nombreEmpresa: 'Panorama',
        pro_precio: 100000,
        pro_funcionamiento: 'Enrrollable',
        pro_foto: 'http//',
    }
]

function Producto() {
    const [showProduct, setShowProduct] = useState(false)
    const [ShowFormCrearProducto, setShowFormCrearProducto] = useState(false)

    interface initial {

        pro_ven_min: number,
        pro_ven_max: number,
        pro_funcionamiento: string


    }
    interface Producto {

        pro_nombreId: string,
        pro_nombreEmpresa: string,
        pro_funcionamiento: string,
        pro_precio: number,
        pro_foto: string
    }

    const filtrarProductos = async (values: initial) => {
        setShowProduct(false)
        // buscar los datos la base de datos
        setShowProduct(true)

    }

    const crearProducto = async (values: Producto) => {
        // instruccion para mandar a la base
        setShowFormCrearProducto(false)
        console.log(values.pro_foto)
    }

    return (

        <>
            <Navbar></Navbar>
            <div className='pagina'>
                <h1>En Decorisa tenemos gran variedad de productos que se acomodan a sus necesidades</h1>

                <h2 className='text-orangePagina'>Seleccione de acuerdo a lo que esta buscando</h2>


                <Formik
                    initialValues={{
                        pro_ven_min: 0,
                        pro_ven_max: 500000,
                        pro_funcionamiento: 'Enrrollable'
                    }}
                    onSubmit={async (values) => {

                        filtrarProductos(values)


                        //alert(JSON.stringify(values));

                    }}

                >
                    {({ handleSubmit, values, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-nowrap'>

                                <div className="flex flex-nowrap items-center ">
                                    <label className="">Funcionamiento:</label>

                                    <select name="pro_funcionamiento" placeholder="Funcionamiento" className=""
                                        value={values.pro_funcionamiento}
                                        onChange={handleChange}
                                    >
                                        <option value='Enrrollable'>Enrrollable</option>
                                        <option value='Tradicional'>Tradicional</option>
                                        <option value='Panel Japones'>Panel Japones</option>
                                        <option value='Romana'>Romana</option>
                                        <option value='Sheer'>Sheer</option>
                                        <option value='Vertical'>Vertical</option>
                                        <option value='Persiana'>Persiana</option>
                                    </select>
                                </div>
                                <div className="flex flex-nowrap items-center ">
                                    <label className="">Precio Minimo:</label>
                                    <input name="pro_ven_min" type="number" placeholder="Precio Minimo" className=""
                                        value={values.pro_ven_min}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="flex flex-nowrap items-center ">
                                    <label className="">Precio Maximo:</label>
                                    <input name="pro_ven_max" type="number" placeholder="Precio Maximo" className=""
                                        value={values.pro_ven_max}
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
                {//aqui se muestran los productos
                }
                <div className='flex flex-wrap'>
                    {showProduct ? (
                        Productos.map((item, index) => {
                            return (
                                <div key={index} className='producto'>
                                    <div className='grid  grid-cols-2'>
                                        <div className='col-start-1'>
                                            <div className='imagen'>

                                                {/*<Image  src={item.pro_foto} alt='' width={136} height={172} src={item.pro_foto}></Image> */}
                                                <img src={item.pro_foto}></img>
                                            </div>
                                        </div>
                                        <div className='col-start-2 pd-5'>
                                            <h1 className='text-2xl'>{item.pro_nombreId}</h1>
                                            <div className='flex flex-wrap'>
                                                <h3 className='text-base'>Marca:</h3>
                                                <label>{item.pro_nombreEmpresa}</label>
                                            </div>


                                            <label>{item.pro_funcionamiento}</label>
                                            <div className='flex flex-nowrap items-center'>
                                                <IconContext.Provider value={{ color: 'Black', size: '1.5rem' }}>
                                                    <faIcon.FaMoneyBill />
                                                </IconContext.Provider>

                                                <h3 className='text-2xl'>Precio m2:</h3>


                                            </div>
                                            <h2 className='font-bold'> {item.pro_precio}</h2>

                                        </div>

                                    </div>


                                </div>
                            )


                        })



                    ) : null}
                    <div className='producto grid justify-items-center'>

                        <IconContext.Provider value={{ size: '7rem', className: 'icono-boton' }}>
                            <ioIcon.IoMdAddCircle onClick={() => setShowFormCrearProducto(true)} />
                        </IconContext.Provider>
                        <h2 className='font-bold'>Nuevo Producto</h2>

                    </div>
                    {ShowFormCrearProducto ? (
                        <div className='formCrearPr '>

                            <Formik
                                initialValues={{
                                    pro_nombreId: '',
                                    pro_nombreEmpresa: '',
                                    pro_funcionamiento: '',
                                    pro_precio: 0,
                                    pro_foto: ''
                                }}
                                onSubmit={async (values) => {

                                    crearProducto(values)


                                    //alert(JSON.stringify(values));

                                }}

                            >
                                {({ handleSubmit, values, handleChange }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className='flex flex-wrap items-center'>
                                            <aiIcon.AiFillCloseCircle onClick={() => setShowFormCrearProducto(false)} className='button-cerrar' />
                                            <h3>Nuevo Productor</h3>
                                        </div>
                                        <div className='grid grid-cols-2'>
                                            <div className='col-start-1 '>
                                                <div className="flex flex-wrap items-center">
                                                    <div className='w-24'>
                                                        <label className="">Nombre:</label>
                                                    </div>

                                                    <input name="pro_nombreId" type="text" placeholder="Precio Minimo" className=""
                                                        value={values.pro_nombreId}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="flex flex-wrap items-center">
                                                    <label className="">Distribuidor:</label>
                                                    <input name="pro_nombreId" type="text" placeholder="Precio Minimo" className=""
                                                        value={values.pro_nombreEmpresa}
                                                        onChange={handleChange}
                                                    />
                                                </div>




                                            </div>
                                            <div className='col-start-2'>
                                                <div className="flex flex-wrap items-center">
                                                    <div className='w-24'>
                                                        <label className="">Precio:</label>
                                                    </div>

                                                    <input name="pro_precio" type="number" placeholder="Precio Minimo" className=""
                                                        value={values.pro_precio}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className=" flex flex-nowrap items-center ">
                                                    <label >Funcionamiento:</label>

                                                    <select name="pro_funcionamiento" placeholder="Funcionamiento"
                                                        value={values.pro_funcionamiento}
                                                        onChange={handleChange}
                                                    >
                                                        <option value='Enrrollable'>Enrrollable</option>
                                                        <option value='Tradicional'>Tradicional</option>
                                                        <option value='Panel Japones'>Panel Japones</option>
                                                        <option value='Romana'>Romana</option>
                                                        <option value='Sheer'>Sheer</option>
                                                        <option value='Vertical'>Vertical</option>
                                                        <option value='Persiana'>Persiana</option>
                                                    </select>
                                                </div>
                                                <br></br>
                                                <div className='grid place-items-end'>
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

export default Producto