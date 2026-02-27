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
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww"
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
          src="https://plus.unsplash.com/premium_photo-1691962725028-e825955a7c1e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"
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
          src="https://images.unsplash.com/photo-1564981797816-1043664bf78d"
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
