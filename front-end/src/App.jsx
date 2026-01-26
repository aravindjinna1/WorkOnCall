import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import MainSection from './pages/MainSection'
import NavBar from './pages/NavBar'
import Footer from './pages/Footer'
import MenuProvider from './pages/MenuContext'
import MobileMenu from './pages/MobileMenu'
// import SearchValueProvider from './pages/SearchContext'
import { SearchProvider } from './pages/SearchContext'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Outlet } from 'react-router-dom'


function App() {

 return(
   <div>

   <MenuProvider>
<SearchProvider >
     <NavBar />
     <MobileMenu />
     <Outlet />
     <Footer />
 
 </SearchProvider>
    </MenuProvider>
    

   </div>
 )
}

export default App
