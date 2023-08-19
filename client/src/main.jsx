import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  
} from "react-router-dom";

import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import Home from './pages/home/index';
import Detail from './pages/detail/index';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    loader: ()=>{
      const user = localStorage.getItem('user')
      const is_login = JSON.parse(user)?.token
      if(!is_login){
        return redirect('/sign_in')
      }
      return null
    }
  },
  {
    path: "sign_in",
    element: <SignIn/>
  },
  {
    path: "sign_up",
    element: <SignUp/>
  },
  {
    path: "/detail/:id",
    element: <Detail />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
