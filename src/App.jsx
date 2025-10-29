import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/Experience'
import Work from './Components/Work/Work'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import NotFound from './Components/NotFound/NotFound'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  let routes = createBrowserRouter([
    {path : '/', element:<MasterLayout/>, errorElement:<NotFound/>,
        children:[
          {index:true, element:<Home/>},
          {path:'home',element:<Home/>},
          {path:'about',element: <About/>},
          {path:'skills',element: <Skills/>},
          {path:'experience',element: <Experience/>},
          {path:'work',element: <Work/>},
    ]},
    
  ])


  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
