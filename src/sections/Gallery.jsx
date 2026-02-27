import { motion } from "framer-motion";

export default function DiagonalSection() {
  return (
    <section className="py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 w-[80%] mx-auto items-center gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-8 relative h-[530px] overflow-hidden">

          <div className="grid grid-cols-3 -skew-x-12">

            {/* COLUMN 1 - MOVE UP */}
            <motion.div
             animate={{ y: [0, -40] }}
  transition={{
    duration: 3, 
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  }}
              className="skew-x-12 space-y-6 will-change-transform transform-gpu"
            >
              <img  src="./assets/gallery/1.jpg" className="w-[80%] mx-auto rounded-xl shadow-lg" />
              <img src="./assets/gallery/2.jpg" className="w-[80%] mx-auto rounded-xl shadow-lg" />
              <img src="./assets/gallery/3.jpg" className="w-[80%] mx-auto rounded-xl shadow-lg" />
            </motion.div>

            {/* COLUMN 2 - STATIC */}
            <div className="skew-y-6 space-y-6">
              <img src="./assets/gallery/4.jpg" className="w-[80%] mx-auto rounded-xl shadow-lg" />
              <img src="./assets/gallery/5.jpg" className="w-[80%] mx-auto rounded-xl shadow-lg" />
              <img src="./assets/gallery/6.jpg" className="w-[80%] mx-auto rounded-xl shadow-lg" />
            </div>

            {/* COLUMN 3 - MOVE DOWN */}
            <motion.div
             animate={{ y: [0, 40] }}
  transition={{
    duration: 3, 
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  }}
              className="skew-x-12 space-y-6 will-change-transform transform-gpu"
            >
              <img src="./assets/gallery/7.jpg" className="w-[80%] mx-auto rounded-xl shadow-lg" />
              <img src="./assets/gallery/8.jpg" className="w-[80%] mx-auto rounded-xl shadow-lg" />
              <img src="./assets/gallery/1.jpg" className="w-[80%] mx-auto rounded-xl shadow-lg" />
            </motion.div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-4 text-center lg:text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Vibrant{" "}
            <span className="bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
              Campus Life
            </span>
          </h2>

          <p className="text-gray-600">
            A dynamic learning environment with creativity and joyful experiences.
          </p>

          <button className="px-5 py-2 bg-black text-white rounded-full hover:scale-105 transition duration-300">
            Explore More
          </button>
        </div>

      </div>
    </section>
  );
}