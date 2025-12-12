import axios from "axios"
import { userRequest } from "../RequestMethed";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useState } from "react";

const NewProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputs, setIputs] = useState({});
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState("Uploading is 0%");
  const [selectedOptions, setSelectedOption] = useState({
    concern: [],
    skinType: [],
    categories: []
  });

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSelectedChange = (e) => {
    const { name, value } = e.target;
    setSelectedOption((prev) => ({
      ...prev,
      [name]: [...prev[name], value]
    }));
  };

  const handleTRemoveOption = (name, value) => {
    setSelectedOption((prev) => ({
      ...prev,
      [name]: prev[name].filter((options) => options !== value)
    }));
  };

  const handleChange = (e) =>{
   setIputs((prev)=>{
    return{...prev, [e.target.value]:e.target.value}
   })
  }

  const handlleUpload = async (e) =>{
    e.preventDefault();
    const data = new FormData
    data.append("file", selectedImage);
    data.append("upload_preset", "uploads");
    setUploading("Uploading...")

    try{
      const uploadRes = await axios.post(
         "http://api.cloudinary.com/v1_1/dkdx7xytz/image/upload",
        data
      );
      const {url} = uploadRes.data;
      setImage(url)
      setUploading("uploaded 100%")
      await userRequest.post("/products",{img:image,...inputs, ...selectedOptions})

    }catch(error){
      console.log(error);
      setUploading("Uploading failed")

    }
  }

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
              {!selectedImage ? (
                <label htmlFor="file" className="border-2 border-gray-400 h-[250px] w-[250px] rounded-lg flex items-center   justify-center cursor-pointer hover:bg-gray-100 transition">
                <FaPlus className="text-4xl text-gray-600" />
              </label>
              ):(
                <img src={URL.createObjectURL(selectedImage)} alt="Product"
                className="h-[100px] w-[100px]"
                
                 />
              )}
              <input 
              type="file"
              id="file"
              onChange={imageChange}
              style={{ display:"none" }}
              />
            </div>
            <span className="text-green-500 mt-2 text-2xl">{uploading}</span>
            {/* Product Name */}
            <div>
              <label className="block mb-2 font-semibold">Product Name</label>
              <input
                type="text"
                title="name"
                placeholder="Product Name"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Product Description */}
            <div>
              <label className="block mb-2 font-semibold">Product Description</label>
              <textarea
                rows={8}
                name="desc"
                placeholder="Product Description"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-gray-400"
              ></textarea>
            </div>

            {/* Original Price */}
            <div>
              <label className="block mb-2 font-semibold">Product Original Price</label>
              <input
                type="number"
                name="originalPrice"
                onChange={handleChange}
                placeholder="KES 9000"
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Discounted Price */}
            <div>
              <label className="block mb-2 font-semibold">Discounted Price</label>
              <input
              name="discountedPrice"
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
                name="wholesale Price"
                onChange={handleChange}
                placeholder="KES 9000"
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Wholesale Min Qty */}
            <div>
              <label className="block mb-2 font-semibold">Wholesale Minimum Quantity</label>
              <input
                type="number"
                name="wholesaleMinimumQuantity"
                onChange={handleChange}
                placeholder="Min quantity"
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Brand */}
            <div>
              <label className="block mb-2 font-semibold">Brand</label>
              <input
                type="text"
                name="brand"
                onChange={handleChange}
                placeholder="Brand name"
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Concern */}
            <div>
              <label className="block mb-2 font-semibold">Concern</label>
              <select
                name="concern"
                onChange={handleSelectedChange}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
              >
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

            <div className="mt-2">
              {selectedOptions.concern.map((option)=>(
                <div key={option} className="flex items-center space-x-2">
                  <span>{option}</span>
                  <FaTrash className="text-red-500 cursor-pointer" onClick={()=>handleTRemoveOption("concern", option)}/>
                </div>
              ))}
            </div>

            {/* Skin Type */}
            <div>
              <label className="block mb-2 font-semibold">Select Skin Type</label>
              <select
                name="skinType"
                onChange={handleSelectedChange}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option>Select Skin Type</option>
                <option value="all">All</option>
                <option value="oily">Oily</option>
                <option value="dry">Dry</option>
                <option value="sensitive">Sensitive</option>
                <option value="normal">Normal</option>
              </select>
              <div className="mt-2">
              {selectedOptions.skinType.map((option)=>(
                <div key={option} className="flex items-center space-x-2">
                  <span>{option}</span>
                  <FaTrash className="text-red-500 cursor-pointer" onClick={()=>handleTRemoveOption("skinType", option)}/>
                </div>
              ))}
            </div>
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 font-semibold">Category</label>
              <select
                name="categories"
                onChange={handleSelectedChange}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option>Select Category</option>
                <option value="Foundation">Foundation</option>
                <option value="Serum">Serum</option>
                <option value="Toner">Toner</option>
                <option value="Lotion">Lotion</option>
              </select>
              <div className="mt-2">
              {selectedOptions.categories.map((option)=>(
                <div key={option} className="flex items-center space-x-2">
                  <span>{option}</span>
                  <FaTrash className="text-red-500 cursor-pointer" onClick={()=>handleTRemoveOption("categories", option)}/>
                </div>
              ))}
            </div>
            </div>

            {/* Submit Button */}
            <button className="bg-gray-800 text-white w-full py-3 rounded-lg font-semibold hover:bg-black transition mt-5" onClick={handlleUpload}>
              Create Product
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
