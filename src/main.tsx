import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home'
import Info from './Info'
import Acquisition from './Acquisition';
import {createGlobalStyle} from 'styled-components'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "infos/:id",
    element: <Info />,
  },
  {
    path: "acquisition/:id",
    element: <Acquisition />,
  },
]);

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
  body{
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVW60DZm5zjUF0KehcFHuJlkHFkwdyxuQCkGd9KEituyfm6ovCnSF0O4IRzNqTwr5OVWo&usqp=CAU");
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
