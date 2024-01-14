import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Contact from './components/Contact/Contact.jsx';

const router =  createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact_me",
        element:<Contact/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
