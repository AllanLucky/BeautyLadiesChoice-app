import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import MyAccount from "./pages/MyAccount"
import Announcement from "./components/Announcement"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Product from "./pages/Product"
import Login from "./pages/Login"
import Register from "./pages/Register"

const Layout = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/profile",
          element: <MyAccount />
        },
        {
          path: "/product/:productId",
          element: < Product />
        },
        {
          path: "/login",
          element: < Login />
        },
        {
          path: "/create-account",
          element: < Register />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
export default App