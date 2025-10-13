import { createBrowserRouter ,createRoutesFromElements , Route , RouterProvider } from "react-router"
import Home from "./pages/HomePage"
export default function App() 
{
  const router = createBrowserRouter(createRoutesFromElements(<><Route path="/" element={<Home/>}/></>))
  return <RouterProvider router={router}/>
}

