import React, {useState} from 'react'
import * as iconBar from 'react-icons/fa';
import * as iconMenu from 'react-icons/ai';

import {SidebarData} from './SidebarData'

//import './styles/Navbar.css'
import {IconContext} from 'react-icons'
import Link from 'next/link';



function Navbar() {
  const [sidebar, setSidebar]= useState(false)
  const stateSideBar= ()=> setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{className:'color-icon'}}>
      <div className='navbar'>
        <div className='menu-bars'>
          <iconBar.FaBars onClick={stateSideBar}/>
        </div>
          

        
      </div>
      <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
        <ul className='nav-menu-items' onClick={stateSideBar}>
          <li className="navbar-toggle">
            <div className='menu-bars'>
              <iconMenu.AiFillCloseCircle/>
            </div>

          </li>
          {SidebarData.map((item,index)=>{
            return(
              <li key={index} className={item.cName}>

                <Link href={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
              
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar