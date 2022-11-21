import { Formik } from 'formik'
import React from 'react'
import { useState} from 'react'
import Navbar from '../Components/Navbar'


const Productos = [
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
    const [showProduct, setShowProduct]=useState(false)
    interface initial {

        pro_ven_min: number,
        pro_ven_max: number,
        pro_funcionamiento: string


    }

    const filtrarProductos = async (values: initial) => {
        setShowProduct(false)
        // buscar los datos la base de datos
        setShowProduct(true)

    }
    return (

        <>
            <Navbar></Navbar>
            <div className='pagina'>
                <h1>Productos:</h1>
                <Formik
                    initialValues={{
                        pro_ven_min: 0,
                        pro_ven_max: 500000,
                        pro_funcionamiento: 'Enrrolable'
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
                        Productos.map((item,index)=>{
                            return(
                                <div className='producto'>
                                    <div className='grid  grid-cols-2'>
                                        <div className='col-start-1'>
                                            <div className='imagen'>
                                                <h1>img</h1>
                                            </div>
                                        </div>
                                        <div className='col-start-2 pd-5'>
                                            <h2 className='text-2xl'>{item.pro_nombreId}</h2>
                                            <h2>{item.pro_nombreEmpresa}</h2>
                                            <h2>{item.pro_funcionamiento}</h2>
    
                                            <h2 className='text-amber-600'>Precio: {item.pro_precio}</h2>
                                        </div>
    
                                    </div>
                                    
    
                                </div>
                            )
                            
    
                        })
    
                        

                    ):null}
                    

                </div>
            </div>


        </>
    )
}

export default Producto