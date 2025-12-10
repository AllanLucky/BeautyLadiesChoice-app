import { FaBox, FaChartBar, FaClipboard, FaClipboardList, FaCog, FaElementor, FaHdd, FaHome, FaSignOutAlt, FaUser, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="h-[100vh] bg-gray-50 p-[20px] w-[280px] shadow-lg overflow-y-auto">
      <ul className="flex flex-col items-start justify-start mt-[20px] pl-[20px]">

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaHome className="mr-[15px] text-[#ef93db]" />
          Home
        </li>

        <Link to="/profile">
          <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
            <FaUser className="mr-[15px] text-[#ef93db]" />
            Profile
          </li>
        </Link>

        <hr className="w-full my-[20px] border-gray-300" />

        <Link to="/users">
          <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
            <FaUsers className="mr-[15px] text-[#ef93db]" />
            Users
          </li>
        </Link>

        <Link to="/products">
          <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
            <FaBox className="mr-[15px] text-[#ef93db]" />
            Products
          </li>
        </Link>
        <Link to="/orders">
          <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
            <FaClipboardList className="mr-[15px] text-[#ef93db]" />
            Orders
          </li>
        </Link>

        <hr className="w-full my-[20px] border-gray-300" />
        <Link>
          <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
            <FaElementor className="mr-[15px] text-[#ef93db]" />
            Banners
          </li>
        </Link>
        <Link>
          <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
            <FaCog className="mr-[15px] text-[#ef93db]" />
            Settings
          </li>
        </Link>

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaHdd className="mr-[15px] text-[#ef93db]" />
          Back Up
        </li>

        <hr className="w-full my-[20px] border-gray-300" />

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaChartBar className="mr-[15px] text-[#ef93db]" />
          Charts
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaClipboard className="mr-[15px] text-[#ef93db]" />
          All logs
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaSignOutAlt className="mr-[15px] text-[#ef93db]" />
          LogOut
        </li>

      </ul>
    </div>
  )
}

export default Menu;
