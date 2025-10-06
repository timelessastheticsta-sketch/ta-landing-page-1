import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// ✅ Import all your featured logo images (example)
import logo1 from "@/assets/logos/1.jpg"; 
import logo2 from "@/assets/logos/2.jpg"; 
import logo3 from "@/assets/logos/3.jpg"; 
import logo4 from "@/assets/logos/4.jpg"; 
import logo5 from "@/assets/logos/5.jpg"; 
import logo6 from "@/assets/logos/6.jpg";
import logo7 from "@/assets/logos/7.jpg";

// ✅ Featured brand/media logos array
const featured = [
  { name: "Femina India", logo: logo1 },
  { name: "Vogue", logo: logo2 },
  { name: "India Today", logo: logo3 },
  { name: "Times of India", logo: logo4 },
  { name: "StyleCraze", logo: logo5 },
  { name: "Elle India", logo: logo6 },
  { name: "AAM USA", logo: logo7 },
];

const Associations = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-100/30 rounded-full blur-3xl -z-10" />

      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="uppercase tracking-widest text-base text-pink-500 font-semibold">
          Recognized Excellence
        </p>
        <h3 className="text-4xl md:text-6xl font-extrabold text-black mt-4">
          We Are Featured
        </h3>

        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto mt-6 rounded-full" />
        <p className="text-xl md:text-2xl text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
          Timeless Aesthetics has been proudly featured and recognized by{" "}
          <span className="font-semibold text-pink-500">leading beauty magazines</span>,{" "}
          <span className="font-semibold text-pink-500">global organizations</span>, and{" "}
          <span className="font-semibold text-pink-500">professional aesthetic councils</span>.
        </p>
      </motion.div>

      {/* Featured Logos Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 1600, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {featured.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div whileHover={{ scale: 1.07 }} transition={{ duration: 0.3 }}>
              <Card className="rounded-2xl border border-gray-200 shadow-lg bg-white/70 backdrop-blur-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-10 flex justify-center items-center">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-28 md:max-h-24 object-contain transition-all"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mt-16 text-xl md:text-2xl text-gray-700 font-medium"
      >
        Empowering beauty and education —{" "}
        <span className="font-bold text-pink-600">Timeless Aesthetics</span> has been 
        celebrated by renowned platforms for its innovation and excellence in 
        aesthetics and cosmetology.
      </motion.div>
    </section>
  );
};

export default Associations;
