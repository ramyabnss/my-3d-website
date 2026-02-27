import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NextSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Parallax background effect
      gsap.to(sectionRef.current, {
        backgroundPositionY: "40%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Heading reveal animation
      gsap.from(headingRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      // Image zoom animation
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
          },
        }
      );

      // Content stagger
      gsap.from(contentRef.current.children, {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-fixed bg-center bg-cover bg-no-repeat py-28 px-6"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1562774053-701939374585)",
      }}
    >
      <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-sm p-12 rounded-3xl">

        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-4xl lg:text-6xl font-bold text-white mb-10 text-center"
        >
          Mesmerising Culinary Experience
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
            alt=""
            className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
          />

          {/* Content */}
          <div ref={contentRef}>
            <p className="text-gray-200 text-xl mb-6 leading-relaxed">
              Experience the perfect blend of taste, ambience and artistry.
              Every dish crafted with passion and precision.
            </p>

            <p className="text-gray-200 text-xl mb-6 leading-relaxed">
              From modern interiors to traditional flavors, we redefine dining
              into a magical journey.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition duration-300 shadow-lg">
              Discover More
            </button>
        
          </div>

        </div>
      </div>
    </section>
  );
}
