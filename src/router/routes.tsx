import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home/home"
import Blogs from "../pages/blogs/blogs"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/blogs",
    element: <Blogs/>,
  },
])
export default router