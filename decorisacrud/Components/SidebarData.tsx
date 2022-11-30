import React from "react";
import * as iconBar from 'react-icons/fa';
import * as iconMenu from 'react-icons/ai';
import * as ioIcons from 'react-icons/io';
import * as mdIcons from 'react-icons/md';
import * as biIcons from 'react-icons/bi';
import * as bsIcons from 'react-icons/bs';
import * as riIcons from 'react-icons/ri';
import * as tbIcons from 'react-icons/tb';

export const SidebarData =[
    {
        title:'Inicio',
        path:'/',
        icon: <iconMenu.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Ventas',
        path:'/Venta',
        icon: <mdIcons.MdSell/>,
        cName:'nav-text'
    },
    {
        title:'Pedidos',
        path:'/Pedido',
        icon: <biIcons.BiPackage/>,
        cName:'nav-text'
    },
    {
        title:'Clientes',
        path:'/Cliente',
        icon: <ioIcons.IoMdPerson/>,
        cName:'nav-text'
    },
    {
        title:'Citas',
        path:'/Cita',
        icon: <mdIcons.MdDateRange/>,
        cName:'nav-text'
    },
    {
        title:'Sucursales',
        path:'/Sucursal',
        icon: <mdIcons.MdBusiness/>,
        cName:'nav-text'
    },
    {
        title:'Productos',
        path:'/Producto',
        icon: <bsIcons.BsFillBagFill/>,
        cName:'nav-text'
    },
    {
        title:'Productores',
        path:'/Productor',
        icon: <tbIcons.TbBuildingFactory2/>,
        cName:'nav-text'
    }





    
]