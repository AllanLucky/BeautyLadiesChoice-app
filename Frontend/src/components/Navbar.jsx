import { FaSearch, FaUser } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px] shadow-2xl p-6">
      {/* Logo */}
      <div className="cursor-pointer mt-2">
        <img src="/blisslogo1.png" alt="Bliss Store Logo" height="100px" width="120px" />
      </div>

      {/* Search input */}
      <div className="flex items-center mt-2">
        <input
          type="text"
          placeholder="Search Products"
          className="p-[15px] border-2 border-[#f096dd] border-solid w-[500px] outline-none rounded-lg mr-[-30px]"
        />
        <FaSearch className="text-[20px] cursor-pointer" />
      </div>

      {/* Cart and Login together */}
      <div className="flex items-center space-x-4 mt-2">
        {/* Cart Badge */}
        <Badge badgeContent={2} color="secondary">
          <ShoppingBasketIcon className="text-pink-500"/>
        </Badge>

        {/* Login */}
        <div className="flex items-center space-x-2 border border-pink-300 p-2 rounded-lg hover:bg-pink-100 duration-300 cursor-pointer">
          <FaUser className="text-[#e455c5] hover:text-pink-600 transition duration-300" />
          <span className="text-[#e455c5] hover:bg-pink-100 duration-300 cursor-pointer font-semibold">
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
