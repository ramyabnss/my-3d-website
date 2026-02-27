import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { color } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function CampusLifePinned() {
  const sectionRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = slidesRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
        },
      });

      slides.forEach((slide, i) => {
        tl.fromTo(
          slide,
          { opacity: 0, scale: 1.2 },
          { opacity: 1, scale: 1, duration: 1 }
        );

        if (i !== slides.length - 1) {
          tl.to(slide, { opacity: 0, duration: 1 });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-inherit text-white overflow-hidden"
    >
      {/* Slide 1 */}
      <div
        ref={(el) => (slidesRef.current[0] = el)}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src="./assets/campus-life/academic-excellence.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="relative z-10 text-center">
          <h2 className="text-5xl lg:text-7xl font-bold bg-black/25 px-[5px] py-[5px] inline-block">
            Academic Excellence
          </h2>
        </div>
      </div>

      {/* Slide 2 */}
      <div
        ref={(el) => (slidesRef.current[1] = el)}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src="./assets/campus-life/vibrant-campus.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="relative z-10 text-center">
         <h2 className="text-5xl lg:text-7xl font-bold bg-black/25 px-[5px] py-[5px] inline-block">
  Vibrant Campus Life
</h2>

        </div>
      </div>

      {/* Slide 3 */}
      <div
        ref={(el) => (slidesRef.current[2] = el)}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src="./assets/campus-life/global-opportunities.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="relative z-10 text-center">
          <h2 className="text-5xl lg:text-7xl font-bold bg-black/25 px-[5px] py-[5px] inline-block">
            Global Opportunities
          </h2>
        </div>
      </div>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}
    </section>
  );
}
