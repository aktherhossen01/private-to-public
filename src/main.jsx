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
import NotFound from './NotFound/NotFound';
import Service from './Service/Service';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
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
        loader:()=>fetch('/card.json'),
        element:<PrivateRoute><About></About></PrivateRoute>
      },
      {
        path:'/service',
        element:<PrivateRoute><Service></Service></PrivateRoute>
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
