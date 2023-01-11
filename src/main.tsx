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
    background-color: #fff6;
    overflow-x: hidden;
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
