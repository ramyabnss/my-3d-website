import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imagesRef.current, {
        y: 150,
        opacity: 0,
        duration: 1.4,
        stagger: 0.25,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= IMAGE SIDE ================= */}
        <div className="grid grid-cols-2 gap-6">

          {/* TOP BIG */}
          <img
            ref={el => imagesRef.current[0] = el}
            src="./assets/about/1.jpg"
            alt=""
            className="h-[420px] w-full object-cover rounded-2xl shadow-xl"
          />

          {/* TOP SMALL */}
          <img
            ref={el => imagesRef.current[1] = el}
            src="./assets/about/2.jpg"
            alt=""
            className="h-[300px] w-full object-cover rounded-2xl shadow-xl mt-20"
          />

          {/* BOTTOM SMALL */}
          <img
            ref={el => imagesRef.current[2] = el}
            src="./assets/about/3.jpg"
            alt=""
            className="h-[300px] w-full object-cover rounded-2xl shadow-xl"
          />

          {/* BOTTOM BIG */}
          <img
            ref={el => imagesRef.current[3] = el}
            src="./assets/about/4.jpg"
            alt=""
            className="h-[420px] w-full object-cover rounded-2xl shadow-xl -mt-10"
          />

        </div>

        {/* ================= CONTENT SIDE ================= */}
        <div>
          <p className="text-orange-500 font-semibold mb-4 tracking-widest">
            About Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to <span className="text-orange-500">TechNova</span>
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
            Aliqu diam amet diam et eos erat ipsum et lorem et sit.
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
          </p>

          <div className="flex gap-12 mb-8">
            <div>
              <h3 className="text-4xl font-bold text-orange-500">15</h3>
              <p className="text-gray-700 font-medium">
                Years of EXPERIENCE
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">50</h3>
              <p className="text-gray-700 font-medium">
                MASTERS
              </p>
            </div>
          </div>

          {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition duration-300 shadow-md">
            READ MORE
          </button> */}
          <button class="relative inline-block font-medium group py-2.5 px-6.5 ">
<span class="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span class="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
<span class="relative text-indigo-600 ">Button Hover</span>
</button>
        </div>

      </div>
    </section>
  );
}
