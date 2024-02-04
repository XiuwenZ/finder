// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Login from './components/Login.jsx'; // Adjust the import path as necessary
import Signup from './components/Signup.jsx'; // Adjust the import path as necessary
import Mainpage from './components/MainPage.jsx'; // Adjust the import path as necessary
import Footer from './components/Footer.jsx'; // Adjust the import path as necessary


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer /> {/* Include the Footer component */}
  </React.StrictMode>,
)