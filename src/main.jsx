import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import DetailsShow from './pages/DetailsShow/DetailsShow';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import About from './pages/About/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader:()=>fetch('/service.json')
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/user/:id',
        loader:()=>fetch('/service.json'),
        element:<PrivateRoute><DetailsShow></DetailsShow></PrivateRoute>
      },
      {
        path:'/about',
        element:<PrivateRoute><About></About></PrivateRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)