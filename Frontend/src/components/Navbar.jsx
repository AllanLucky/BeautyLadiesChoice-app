import { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between h-[90px] shadow-xl px-6 md:px-12">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/blisslogo1.png"
            alt="Bliss Store Logo"
            className="h-[70px] w-[90px]"
          />
        </Link>

        {/* Search Desktop */}
        <div className="relative hidden md:flex flex-1 mx-6 max-w-[500px]">
          <input
            type="text"
            placeholder="Search products"
            className="p-[14px] pl-4 border-2 border-pink-300 w-full outline-none rounded-lg pr-10"
          />
          <FaSearch className="absolute right-4 top-[16px] text-gray-600" />
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          {/* Mobile Search Icon */}
          <FaSearch
            className="text-[22px] text-pink-500 cursor-pointer md:hidden"
            onClick={() => setOpenSearch(!openSearch)}
          />

          {/* Cart Icon */}
          <Link to="/cart" className="cursor-pointer">
            <Badge badgeContent={2} color="secondary" className="cursor-pointer">
              <ShoppingBasketIcon className="text-pink-500 text-[26px]" />
            </Badge>
          </Link>

          {/* Login */}
          <Link to="/login">
            <div className="flex items-center gap-2 border border-pink-300 px-3 py-2 rounded-lg hover:bg-pink-100 duration-300 cursor-pointer">
              <FaUser className="text-[#e455c5]" />
              <span className="text-[#e455c5] hidden md:block font-semibold">
                Login
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Search */}
      {openSearch && (
        <div className="px-6 py-4 md:hidden">
          <input
            type="text"
            placeholder="Search Products"
            className="p-[15px] border-2 border-pink-300 w-full outline-none rounded-lg"
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
