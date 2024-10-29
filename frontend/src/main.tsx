import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Courses from './components/courses.tsx'
import Login from './components/login.tsx'
import Register from './components/register.tsx'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'


const  router=createBrowserRouter(
  [
    { 
      path:'/',
      element:<Courses/>
    },
    {
      path:'/signin',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    }
  ]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
