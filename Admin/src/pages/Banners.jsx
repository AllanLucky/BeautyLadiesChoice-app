import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex ml-12 w-full">

      {/* LEFT BANNERS - 50% width */}
      <div className="w-1/2 pr-4">
        <h2 className="text-2xl font-semibold mb-6">Active Banners</h2>

        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between border-b border-gray-300 pb-4">
            <img
              src="/beautybanner4.jpg"
              alt=""
              className="w-32 h-32 object-cover rounded-md"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-semibold">Beauty Essentials</h3>
              <p className="text-gray-600 mb-2">
                Discover our latest collection of beauty products and skincare essentials designed to make you shine.
              </p>
            </div>
            <button className="bg-red-500 p-2 text-white font-semibold cursor-pointer">
              Delete
            </button>
          </div>

          <div className="flex items-center justify-between border-b border-gray-300 pb-4">
            <img
              src="/beautybanner4.jpg"
              alt=""
              className="w-32 h-32 object-cover rounded-md"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-semibold">Beauty Essentials</h3>
              <p className="text-gray-600 mb-2">
                Discover our latest collection of beauty products and skincare essentials designed to make you shine.
              </p>
            </div>
            <button className="bg-red-500 p-2 text-white font-semibold cursor-pointer">
              Delete
            </button>
          </div>

          <div className="flex items-center justify-between border-b border-gray-300 pb-4">
            <img
              src="/beautybanner4.jpg"
              alt=""
              className="w-32 h-32 object-cover rounded-md"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-semibold">Beauty Essentials</h3>
              <p className="text-gray-600 mb-2">
                Discover our latest collection of beauty products and skincare essentials designed to make you shine.
              </p>
            </div>
            <button className="bg-red-500 p-2 text-white font-semibold cursor-pointer">
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT BANNER ADD BUTTON - 50% width */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="border-2 h-24 w-24 border-gray-700 rounded-md flex items-center justify-center cursor-pointer">
            <FaPlus className="text-2xl text-gray-700" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;
