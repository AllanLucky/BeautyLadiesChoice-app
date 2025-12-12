import {
  FaBox,
  FaChartBar,
  FaClipboard,
  FaClipboardList,
  FaCog,
  FaElementor,
  FaHdd,
  FaHome,
  FaSignOutAlt,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="h-screen bg-gray-50 p-5 w-[280px] shadow-lg overflow-y-auto sticky top-0">
      <ul className="flex flex-col mt-5 space-y-3">
        <Link to="/">
          <li className="flex items-center text-[20px] cursor-pointer transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
            <FaHome className="mr-4 text-[#ef93db]" />
            Home
          </li>
        </Link>

        <Link to="/profile">
          <li className="flex items-center text-[20px] cursor-pointer transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
            <FaUser className="mr-4 text-[#ef93db]" />
            Profile
          </li>
        </Link>

        <hr className="w-full my-4 border-gray-300" />

        <Link to="/users">
          <li className="flex items-center text-[20px] cursor-pointer transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
            <FaUsers className="mr-4 text-[#ef93db]" />
            Users
          </li>
        </Link>

        <Link to="/products">
          <li className="flex items-center text-[20px] cursor-pointer transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
            <FaBox className="mr-4 text-[#ef93db]" />
            Products
          </li>
        </Link>

        <Link to="/orders">
          <li className="flex items-center text-[20px] cursor-pointer transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
            <FaClipboardList className="mr-4 text-[#ef93db]" />
            Orders
          </li>
        </Link>

        <hr className="w-full my-4 border-gray-300" />

        <Link to="/banners">
          <li className="flex items-center text-[20px] cursor-pointer transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
            <FaElementor className="mr-4 text-[#ef93db]" />
            Banners
          </li>
        </Link>

        <Link to="/my-profile">
          <li className="flex items-center text-[20px] cursor-pointer transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
            <FaCog className="mr-4 text-[#ef93db]" />
            Settings
          </li>
        </Link>

        <li className="flex items-center text-[20px] cursor-pointer transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaHdd className="mr-4 text-[#ef93db]" />
          Backup
        </li>

        <hr className="w-full my-4 border-gray-300" />

        <li className="flex items-center text-[20px] cursor-pointer transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaChartBar className="mr-4 text-[#ef93db]" />
          Charts
        </li>

        <li className="flex items-center text-[20px] cursor-pointer transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaClipboard className="mr-4 text-[#ef93db]" />
          All Logs
        </li>

        <li className="flex items-center text-[20px] cursor-pointer transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaSignOutAlt className="mr-4 text-[#ef93db]" />
          LogOut
        </li>
      </ul>
    </div>
  );
};

export default Menu;
