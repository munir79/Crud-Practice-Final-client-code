
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Component/Main'
import Registar from './Component/Registar'
import SeeUser from './Component/SeeUser'

function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/registar',
        element:<Registar></Registar>
      },
      {
      path:'/see',
      element:<SeeUser></SeeUser>,
      loader:()=>fetch('http://localhost:5000/users')
      }
    ]
  }
])

  return (
    <>
      
      <div className="card">
       <RouterProvider router={router}></RouterProvider>
      </div>
     
    </>
  )
}

export default App
