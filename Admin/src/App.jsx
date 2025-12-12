import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Menu from "./components/Menu"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Users from "./pages/Users"
import Orders from "./pages/Orders"
import Banner from "./pages/Banners"
import NewProduct from "./pages/NewProduct"
import Product from "./pages/Product"

const Layout = () => {
  return (
    <div className="flex">
      <div>
        <Menu />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/newproduct",
        element: <NewProduct />,
      },
      {
        path: "/banners",
        element: <Banner />,
      },

      {
        path: "/product",
        element: <Product />,
      },




    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
