const Footer = () => {
  return (
    <div className="bg-gray-100 px-6 md:px-20 lg:px-40 py-12">

      {/* MAIN SECTION */}
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* LOGO + TEXT */}
        <div className="md:w-1/3 text-center md:text-left">
          <img src="/blisslogo1.png" alt="" className="mx-auto md:mx-0" height={200} width={200} />
          <p className="mt-2 text-gray-600">
            LET`S MAKE YOUR SKIN FLOURISH WITH OUR PRODUCTS.
          </p>
        </div>

        {/* LINKS */}
        <div className="md:w-1/4 text-center md:text-left">
          <h3 className="text-xl font-semibold">Quick Links</h3>

          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>

        </div>

        {/* CONTACT */}
        <div className="md:w-1/3 text-center md:text-left">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-2">123 BeautyBliss Ave, City, Country</p>
          <p className="mt-2">Phone: (123) 788425000</p>
          <p className="mt-2">Email: info@beautybliss.com</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-10 border-t-4 border-[#e9acd9] pt-4 text-center">
        <p>&copy; 2024 BeautyBliss. All rights reserved.</p>

        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-red-400"><i className="fab fa-github"></i></a>
          <a href="#" className="hover:text-red-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-red-400"><i className="fab fa-facebook"></i></a>
        </div>
      </div>

    </div>
  );
};

export default Footer;
