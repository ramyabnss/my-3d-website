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
              className="skew-x-12 space-y-6"
            >
              <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqS5mbq_KJtMlaUaJr8ZKrb-1Y0HL8eUieDQ&s" className="w-[80%] mx-auto rounded-xl shadow-lg" />
              <img src="https://plus.unsplash.com/premium_photo-1661611489843-d9745676b52b?fm=jpg&q=60&w=3000&auto=format&fit=crop" className="w-[80%] mx-auto rounded-xl shadow-lg" />
              <img src="https://plus.unsplash.com/premium_photo-1664299728921-02e66e6146b4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D" className="w-[80%] mx-auto rounded-xl shadow-lg" />
            </motion.div>

            {/* COLUMN 2 - STATIC */}
            <div className="skew-y-6 space-y-6">
              <img src="https://plus.unsplash.com/premium_photo-1733342472892-a877e65af289?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdmVyc2l0eSUyMHN0dWRlbnRzfGVufDB8fDB8fHww" className="w-[80%] mx-auto rounded-xl shadow-lg" />
              <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGVnZSUyMGxpYnJhcnl8ZW58MHx8MHx8fDA%3D" className="w-[80%] mx-auto rounded-xl shadow-lg" />
              <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[80%] mx-auto rounded-xl shadow-lg" />
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
              className="skew-x-12 space-y-6"
            >
              <img src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[80%] mx-auto rounded-xl shadow-lg" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqS5mbq_KJtMlaUaJr8ZKrb-1Y0HL8eUieDQ&s" className="w-[80%] mx-auto rounded-xl shadow-lg" />
              <img src="https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[80%] mx-auto rounded-xl shadow-lg" />
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