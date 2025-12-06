import Typewriter from "typewriter-effect";
const Announcement = () => {
  return (
    <div className="bg-[#e9acd9] flex items-center justify-center text-white text-[18px] font-semibold h-[30px] p-6 text-2xl">
      <Typewriter
        options={{
          strings: [
            "✨ Welcome to Beauty Bliss – Where Elegance Meets You",
            "💖 Indulge in Luxurious Skincare Crafted for Your Glow",
            "🌸 Transform Your Daily Routine into a Spa-Worthy Ritual",
            "🚚 Complimentary Shipping on Orders Over $150 – Just for You!",
            "🔥 Limited Time Offer: Enjoy 50% OFF on Selected Beauty Essentials",
            "💎 Elevate Your Beauty Game with Exclusive Must-Have Picks",
            "🎁 Shop Now & Treat Yourself – You Deserve the Best!"
          ],
          autoStart: true,
          loop: true,
          delay: 60,
          deleteSpeed: 40,
        }}
      />
    </div>
  );
};

export default Announcement;
