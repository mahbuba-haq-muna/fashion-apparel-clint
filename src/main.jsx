import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './components/Home/Home';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import AddProducts from './pages/AddProducts/AddProducts';
import UpdateProducts from './pages/UpdateProducts/UpdateProducts';
import ErrorPage from './pages/ErrorPage/ErrorPage';
// import Login from './pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/addProducts",
        element: <AddProducts></AddProducts>
      },
      {
        path: "/updateProducts",
        element: <UpdateProducts></UpdateProducts>
      },
      // {
      //   path: "/login",
      //   element: <Login></Login>
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
