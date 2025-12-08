import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-10">
      <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden max-w-[900px] w-full">

        {/* REGISTER IMAGE */}
        <div className="w-full md:w-1/2 hidden md:flex items-center justify-center bg-gray-50">
          <img
            src="/lotion1.jpg"
            alt="register"
            className="w-full object-contain p-6 transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* REGISTER FORM */}
        <div className="p-8 md:p-12 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center md:text-left">
            Create Account
          </h2>

          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d55fbb]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d55fbb]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                placeholder="******"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d55fbb]"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-600 mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="******"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d55fbb]"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full py-3 bg-[#d55fbb] text-white font-semibold rounded-md transition duration-300 hover:bg-[#c54fae]">
              Register
            </button>

            {/* Login Link */}
            <div className="text-sm text-gray-600 text-center">
              Already have an account?
              <Link to="/login" className="text-[#d55fbb] hover:underline ml-1">
                Login
              </Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Register
