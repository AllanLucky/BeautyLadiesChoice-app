const Banner = () => {
  return (
    <div className="bg-[url('/beautybanner2.jpg')] bg-no-repeat bg-cover h-[80vh]">
      <div className="absolute inset-0 bg-black opacity-20">
      </div>
      <div className="relative flex flex-col text-white w-50% p-[10%]">
        <span className="text-3xl font-bold mt-3">Discover Your Radiance Our Handpick Beauty Essentials</span>
        <h1 className="text-2xl font-bold mt-3">Glow With Confidence</h1>
        <div className="flex items-center mt-20">
          <button className="bg-purple-500 p-4 w-64 text-white cursor-pointer mr-9">Shop  Now</button>
          <button className="bg-pink-400 p-4 w-64 text-white cursor-pointer mr-9">Call: (+25488425000)</button>
        </div>
      </div>
    </div>
  )
}

export default Banner


