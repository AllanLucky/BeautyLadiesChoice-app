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
  FaUsers
} from "react-icons/fa";

const Menu = () => {
  return (
    // Sidebar Container
    <div className="h-[100vh] bg-gray-50 p-[20px] w-[260px] shadow-lg overflow-y-auto">

      {/* Sidebar Items */}
      <ul className="flex flex-col items-start justify-start mt-[20px] pl-[20px]">

        {/* Home */}
        <li className="flex items-center text-[18px] cursor-pointer mt-[15px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaHome className="mr-[15px] text-[#ef93db]" />
          Home
        </li>

        {/* Profile */}
        <li className="flex items-center text-[18px] cursor-pointer mt-[15px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaUser className="mr-[15px] text-[#ef93db]" />
          Profile
        </li>

        {/* Divider */}
        <hr className="w-full my-[20px] border-gray-300" />

        {/* Users */}
        <li className="flex items-center text-[18px] cursor-pointer mt-[15px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaUsers className="mr-[15px] text-[#ef93db]" />
          Users
        </li>

        {/* Products */}
        <li className="flex items-center text-[18px] cursor-pointer mt-[15px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaBox className="mr-[15px] text-[#ef93db]" />
          Products
        </li>

        {/* Orders */}
        <li className="flex items-center text-[18px] cursor-pointer mt-[15px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaClipboardList className="mr-[15px] text-[#ef93db]" />
          Orders
        </li>

        {/* Divider */}
        <hr className="w-full my-[20px] border-gray-300" />

        {/* Banners */}
        <li className="flex items-center text-[18px] cursor-pointer mt-[15px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaElementor className="mr-[15px] text-[#ef93db]" />
          Banners
        </li>

        {/* Settings */}
        <li className="flex items-center text-[18px] cursor-pointer mt-[15px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaCog className="mr-[15px] text-[#ef93db]" />
          Settings
        </li>

        {/* Back up */}
        <li className="flex items-center text-[18px] cursor-pointer mt-[15px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaHdd className="mr-[15px] text-[#ef93db]" />
          Back Up
        </li>

        {/* Divider */}
        <hr className="w-full my-[20px] border-gray-300" />

        {/* Charts */}
        <li className="flex items-center text-[18px] cursor-pointer mt-[15px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaChartBar className="mr-[15px] text-[#ef93db]" />
          Charts
        </li>

        {/* Logs */}
        <li className="flex items-center text-[18px] cursor-pointer mt-[15px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaClipboard className="mr-[15px] text-[#ef93db]" />
          All logs
        </li>

        {/* Logout */}
        <li className="flex items-center text-[18px] cursor-pointer mt-[15px] transition-all duration-150 hover:text-[#d01fad] hover:translate-x-1">
          <FaSignOutAlt className="mr-[15px] text-[#ef93db]" />
          LogOut
        </li>
      </ul>
    </div>
  )
}

export default Menu;

