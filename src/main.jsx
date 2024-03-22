import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/home",
    element: <div>Hello From Home</div>,
  },
  {
    path: "/contact",
    element: <div>Hello From Contact</div>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/header",
    element: <Header></Header>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
