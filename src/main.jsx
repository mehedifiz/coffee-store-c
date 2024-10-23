import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffee from './components/UpdateCoffee.jsx';
import AddCoffee from './components/AddCoffee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:"addCoffee",
    element:<AddCoffee></AddCoffee>
  },
  {
    path:"updateCofee",
    element:<UpdateCoffee></UpdateCoffee>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
