import { createBrowserRouter ,createRoutesFromElements , Route , RouterProvider } from "react-router"
import Home, { loader } from "./pages/HomePage"
export default function App() 
{
  const router = createBrowserRouter(createRoutesFromElements(<><Route path="/" element={<Home/>} loader={loader}/></>))
  return <RouterProvider router={router}/>
}

