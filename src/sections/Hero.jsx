import { useEffect, useRef } from "react";
import HeroCanvas from "../animations/HeroCanvas";

import img1 from "/assets/top-header/1.jpg";
import img2 from "/assets/top-header/2.jpg";
import img3 from "/assets/top-header/3.jpg";

const images = [img1, img2, img3];

export default function Hero() {
  const stackRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".card-premium");

    const handleMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 25;
      const y = (window.innerHeight / 2 - e.clientY) / 25;

      cards.forEach((card) => {
        card.style.transform = `
        rotateY(${x}deg)
        rotateX(${-y}deg)
      `;
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Gradient Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0a0f1f] to-black"></div>
      {/* Background Canvas */}
      <div className="absolute inset-0 z-0 opacity-50">
        <HeroCanvas />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        {/* LEFT TEXT */}
        <div className="relative text-white">

          {/* ✨ Soft Glow Behind Text */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
          <div className="absolute top-20 left-40 w-72 h-72 bg-purple-600/20 blur-[140px] rounded-full"></div>

          <h1 className="relative shimmer-text text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6 tracking-tight">
            Your TechNova Experience
          </h1>

          <p className="relative text-base sm:text-lg lg:text-xl text-gray-300/90 leading-relaxed max-w-xl">
            Explore innovation, excellence, and vibrant student life
            in a next-generation campus designed for future leaders.
          </p>

          <button className="relative mt-10 px-8 py-3 rounded-2xl 
  backdrop-blur-xl bg-white/5 border border-white/10
  hover:bg-white/10 transition-all duration-300
  shadow-[0_0_30px_rgba(0,255,255,0.2)]">
            Explore More
          </button>
        </div>

        {/* RIGHT SIDE – Advanced Diagonal Premium */}
        {/* RIGHT SIDE – Balanced Diagonal */}
        <div className="relative flex justify-center items-center h-[600px] w-full">

          {/* Left Bottom Card */}
          <div className="card-premium absolute bottom-0 left-0 
  w-[240px] h-[340px] 
  -rotate-6 z-10">

            <img
              src={images[2]}
              className="w-full h-full object-cover rounded-3xl"
              alt=""
            />
          </div>

          {/* Center Card (Slightly Bigger but Not Blocking) */}
          <div className="card-premium absolute top-20 
  w-[270px] h-[390px] 
  z-20">

            <img
              src={images[1]}
              className="w-full h-full object-cover rounded-3xl"
              alt=""
            />
          </div>

          {/* Right Top Card */}
          <div className="card-premium absolute top-0 right-0 
  w-[240px] h-[340px] 
  rotate-6 z-10">

            <img
              src={images[0]}
              className="w-full h-full object-cover rounded-3xl"
              alt=""
            />
          </div>

        </div>

      </div>

      {/* Smooth Luxury Animation */}
      <style>
        {`
        .swap {
          animation: luxurySlide 0.8s ease forwards;
        }

        @keyframes luxurySlide {
          0% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          40% {
            transform: translate(-120%, -50%) scale(0.9);
          }
          100% {
            transform: translate(-180%, -50%) scale(0.6);
            opacity: 0;
          }
        }
          /* Shimmer Gradient Animation */
.shimmer-text {
  background: linear-gradient(
    90deg,
    #ffb86a,
    #ffffff,
    #fb64b6,
    #ffffff,
    #67e8f9
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmerMove 6s linear infinite;
}

@keyframes shimmerMove {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 300% 50%;
  }
}


/* Slow Float */
@keyframes floatSlow {
  0%,100% { transform: translateY(0px) rotate(6deg); }
  50% { transform: translateY(-20px) rotate(6deg); }
}

.animate-floatSlow {
  animation: floatSlow 6s ease-in-out infinite;
}

/* Fast Float */
@keyframes floatFast {
  0%,100% { transform: translateY(0px) rotate(-6deg); }
  50% { transform: translateY(20px) rotate(-6deg); }
}

.animate-floatFast {
  animation: floatFast 5s ease-in-out infinite;
}
  .perspective {
  perspective: 1200px;
}

.card-premium {
  position: absolute;
  border-radius: 24px;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0 30px 80px rgba(0,0,0,0.6);
  border: 1px solid #67e8f9;
  backdrop-filter: blur(20px);
}

.card-premium:hover {
  transform: rotateY(12deg) rotateX(8deg) scale(1.05);
  box-shadow: 0 40px 100px rgba(0,0,0,0.8);
}

/* Shine Sweep Effect */
.card-premium::after {
  content: "";
  position: absolute;
  top: -100%;
  left: -50%;
  width: 200%;
  height: 300%;
  background: linear-gradient(
    120deg,
    transparent 40%,
    rgba(255,255,255,0.25),
    transparent 60%
  );
  transform: rotate(25deg);
  transition: 0.6s;
}

.card-premium:hover::after {
  top: 100%;
}

        `}
      </style>

    </section>
  );
}