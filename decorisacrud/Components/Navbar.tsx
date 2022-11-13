import React, {useState} from 'react'
import * as iconBar from 'react-icons/fa';
import * as iconMenu from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {SidebarData} from './SidebarData'
//import './styles/Navbar.css'


function Navbar() {
  const [sidebar, setSidebar]= useState(false)
  const stateSideBar= ()=> setSidebar(!sidebar)
  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <iconBar.FaBars onClick={stateSideBar}/>

        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className="navbar-toggle">
            <Link to='#' className='menu-bars'>
              <iconMenu.AiFillCloseCircle/>

            </Link>
          </li>
          {SidebarData.map((item,index)=>{
            return(
              <li key={index} className={item.cName}>

                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
              
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Navbar