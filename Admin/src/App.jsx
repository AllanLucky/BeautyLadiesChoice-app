import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Menu from "./components/Menu"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Users from "./pages/Users"
import Orders from "./pages/Orders"
import Banners from "./pages/Banners"
import Settings from "./pages/Settings"
import BackUp from "./pages/BackUp"
import MyAccount from "./pages/MyAccount"

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
        path: "/my-account",
        element: <MyAccount />,
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
        path: "/banners",
        element: <Banners />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/back-up",
        element: <BackUp />,
      },





    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
