import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainSection from './pages/MainSection.jsx'
import Services from './pages/Services.jsx'
import Register from './pages/Register.jsx'
import LoginPage from './pages/LoginPage.jsx'
import LoginSuccess from './pages/LoginSuccess.jsx'
import AvailWorker from './pages/AvailWorkers.jsx'
import Home from './pages/Home.jsx'
import Profile from "./pages/Profile.jsx";
import PostWork from './pages/WorkDetails.jsx'
import PostWorkerDe from './pages/Worker.jsx'

const router = createBrowserRouter([
   
  {
    path:"/",
    element:<App />,
    children:[
    {
    path:'',
    element:<Home />
   },
    {
    path:'/works',
    element:< MainSection/>
   },
   {
    path:'/Provide-services',
    element:<Services />
   },
   {
    path:'/register',
    element:<Register/>
   },
   {
    path:'/login-page',
    element:<LoginPage />
   },
   {
    path:'/login-success',
    element:<LoginSuccess />
   },
   {
    path:'/Avail-workers',
    element:<AvailWorker />
   },
   {
    path:"/Profile",
    element:<Profile />
   },
   {
    path:"/Post-Work",
    element:<PostWork />
   },
   {
    path:"/Post-Worker",
    element:<PostWorkerDe />
   }

    ]
   },
   
])
createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
