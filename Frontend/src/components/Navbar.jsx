import { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between h-[100px] shadow-2xl p-6">

        {/* Logo */}
        <div className="cursor-pointer mt-2 flex-shrink-0">
          <img src="/blisslogo1.png" alt="Bliss Store Logo" className="h-[80px] w-[100px]" />
        </div>

        {/* Search Desktop */}
        <div className="relative mt-2 w-[500px] max-w-[50%] hidden md:flex">
          <FaSearch className="absolute right-3 top-[18px] text-gray-500" />
          <input
            type="text"
            placeholder="Search Products"
            className="p-[15px] border-2 border-[#f096dd] w-full outline-none rounded-lg pr-10"
          />
        </div>

        {/* Cart + Login + Search Mobile */}
        <div className="flex items-center space-x-4 mt-2 flex-shrink-0 gap-1">

          {/* Mobile Search */}
          <FaSearch
            className="text-[22px] text-pink-500 cursor-pointer md:hidden"
            onClick={() => setOpenSearch(!openSearch)}
          />

          <Badge badgeContent={2} color="secondary">
            <ShoppingBasketIcon className="text-pink-500" />
          </Badge>

          <div className="flex items-center space-x-2 border border-pink-300 p-2 rounded-lg hover:bg-pink-100 duration-300 cursor-pointer">
            <FaUser className="text-[#e455c5]" />
            <span className="text-[#e455c5] font-semibold">
              Login
            </span>
          </div>

        </div>
      </div>

      {/* Mobile Search Drawer */}
      {openSearch &&
        <div className="p-4 md:hidden">
          <input
            type="text"
            placeholder="Search Products"
            className="p-[15px] border-2 border-[#f096dd] w-full outline-none rounded-lg"
          />
        </div>
      }
    </>
  );
};

export default Navbar;
