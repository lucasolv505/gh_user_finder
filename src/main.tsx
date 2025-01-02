import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createHashRouter, RouterProvider } from 'react-router-dom'


import Home from './routes/Home.tsx'
import BestRepos from './components/BestRepos.tsx'

const router = createHashRouter([
  {
    path: '/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/repos/:login',
        element: <BestRepos/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
