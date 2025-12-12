import React from "react";
import { FaPlus } from "react-icons/fa";

const NewProduct = () => {
  return (
    <div className="p-6 bg-gray-100 w-[75vw] mx-8">

      {/* Page Title */}
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-3xl font-bold">New Product</h1>
      </div>

      {/* Main Card */}
      <div className="bg-white p-8 shadow-xl rounded-xl w-full max-w-[1600px] mx-auto">

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="flex flex-col items-center">
              <label className="font-semibold mb-3">Product Image</label>
              <div className="border-2 border-gray-400 h-[250px] w-[250px] rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
                <FaPlus className="text-4xl text-gray-600" />
              </div>
            </div>

            {/* Product Name */}
            <div>
              <label className="block mb-2 font-semibold">Product Name</label>
              <input
                type="text"
                placeholder="Product Name"
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Product Description */}
            <div>
              <label className="block mb-2 font-semibold">Product Description</label>
              <textarea
                rows={8}
                placeholder="Product Description"
                className="w-full p-3 border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-gray-400"
              ></textarea>
            </div>

            {/* Original Price */}
            <div>
              <label className="block mb-2 font-semibold">Product Original Price</label>
              <input
                type="number"
                placeholder="KES 9000"
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Discounted Price */}
            <div>
              <label className="block mb-2 font-semibold">Discounted Price</label>
              <input
                type="number"
                placeholder="KES 9000"
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* Wholesale Price */}
            <div>
              <label className="block mb-2 font-semibold">Wholesale Price</label>
              <input
                type="number"
                placeholder="KES 9000"
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Wholesale Min Qty */}
            <div>
              <label className="block mb-2 font-semibold">Wholesale Minimum Quantity</label>
              <input
                type="number"
                placeholder="Min quantity"
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Brand */}
            <div>
              <label className="block mb-2 font-semibold">Brand</label>
              <input
                type="text"
                placeholder="Brand name"
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Concern */}
            <div>
              <label className="block mb-2 font-semibold">Concern</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400">
                <option value="">Select Concern</option>
                <option value="acne">Acne & Blemishes</option>
                <option value="hyperpigmentation">Dark Spots</option>
                <option value="dry-skin">Dry Skin</option>
                <option value="oily-skin">Oily Skin</option>
                <option value="sensitive-skin">Sensitive Skin</option>
                <option value="anti-aging">Anti Aging</option>
                <option value="uneven-tone">Uneven Skin Tone</option>
                <option value="dull-skin">Dull Skin</option>
                <option value="sun-protection">Sun Protection</option>
                <option value="pore-care">Pore Care</option>
              </select>
            </div>

            {/* Skin Type */}
            <div>
              <label className="block mb-2 font-semibold">Select Skin Type</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400">
                <option>Select Skin Type</option>
                <option>All</option>
                <option>Oily</option>
                <option>Dry</option>
                <option>Sensitive</option>
                <option>Normal</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 font-semibold">Category</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400">
                <option>Select Category</option>
                <option>Foundation</option>
                <option>Serum</option>
                <option>Toner</option>
                <option>Lotion</option>
              </select>
            </div>

            {/* Submit Button */}
            <button className="bg-gray-800 text-white w-full py-3 rounded-lg font-semibold hover:bg-black transition mt-5">
              Create Product
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
