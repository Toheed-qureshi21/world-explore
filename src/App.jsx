import React from 'react'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient,QueryClientProvider } from "@tanstack/react-query"
import AppLayout from './components/Layout/AppLayout'
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Country from "./components/pages/Country"
import Contact from "./components/pages/Contact"
import ErrorComponent from './components/UI/ErrorComponent'
import { OurProvider } from './context/Provider'
import CountryDetails from './components/UI/CountryDetails'
const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorComponent/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/about",
          element:<About/>,
        },
        {
          path:"/country",
          element:<Country/>,
        },
        {
          path:"/country/:id",
          element:<CountryDetails/>,
        },
        {
          path:"/contact",
          element:<Contact/>,
        },
      ],
    }
  ]);
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
    <OurProvider>
        <RouterProvider router={router} />
          </OurProvider>
    </QueryClientProvider>
          
  )
}

export default App
