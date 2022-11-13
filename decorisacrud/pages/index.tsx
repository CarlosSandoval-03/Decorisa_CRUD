import Head from 'next/head'
import Image from 'next/image'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <>
    <Router>
       <Navbar/>
       <Routes>
        <Route path='/'/>
       </Routes>

    </Router>
     
    </>
  )
}
