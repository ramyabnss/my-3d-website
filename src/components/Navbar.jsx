import { useState, useRef } from "react"
import collegeLogo from "../assets/logo.png"


import gsap from "gsap"
import {
  Cpu,
  CircuitBoard,
  Wrench,
  Building2,
  GraduationCap,
  BookOpen
} from "lucide-react"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(null)

  const megaMenuRef = useRef(null)

  const handleMouseEnter = () => {
    gsap.to(megaMenuRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      display: "block",
      ease: "power3.out",
    })

    gsap.fromTo(
      megaMenuRef.current.querySelectorAll(".mega-item"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: "power3.out",
      }
    )
  }

  const handleMouseLeave = () => {
    gsap.to(megaMenuRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      display: "none",
      ease: "power2.inOut",
    })
  }

  const NavItem = ({ children }) => (
    <span className="relative cursor-pointer group">
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
    </span>
  )

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* Logo + Name */}
          <div className="flex items-center gap-3 cursor-pointer">
<img
  src={collegeLogo}
  alt="College Logo"
  className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
/>

            <div className="leading-tight">
              <h1 className="text-base md:text-lg font-bold tracking-wide">
                TechNova College of Engineering
              </h1>
              <p className="text-xs text-gray-300 tracking-wider">
                Engineering College
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium relative">

            <NavItem>Home</NavItem>

            {/* Courses Mega Menu */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavItem>Courses ▾</NavItem>

              <div
                ref={megaMenuRef}
                className="absolute left-1/2 -translate-x-1/2 mt-6 w-[850px] bg-black/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl p-8 opacity-0 hidden"
              >
                <div className="grid grid-cols-3 gap-8 text-sm">

                  {/* UG */}
                  <div>
                    <h3 className="font-semibold mb-4 text-indigo-400">
                      Undergraduate
                    </h3>
                    <ul className="space-y-3">
                      <li className="mega-item flex items-center gap-2 hover:text-indigo-400 cursor-pointer">
                        <Cpu size={16} /> B.E Computer Science
                      </li>
                      <li className="mega-item flex items-center gap-2 hover:text-indigo-400 cursor-pointer">
                        <CircuitBoard size={16} /> B.E Electronics
                      </li>
                      <li className="mega-item flex items-center gap-2 hover:text-indigo-400 cursor-pointer">
                        <Wrench size={16} /> B.E Mechanical
                      </li>
                      <li className="mega-item flex items-center gap-2 hover:text-indigo-400 cursor-pointer">
                        <Building2 size={16} /> B.E Civil
                      </li>
                    </ul>
                  </div>

                  {/* PG */}
                  <div>
                    <h3 className="font-semibold mb-4 text-indigo-400">
                      Postgraduate
                    </h3>
                    <ul className="space-y-3">
                      <li className="mega-item flex items-center gap-2 hover:text-indigo-400 cursor-pointer">
                        <GraduationCap size={16} /> M.E Computer Science
                      </li>
                      <li className="mega-item flex items-center gap-2 hover:text-indigo-400 cursor-pointer">
                        <GraduationCap size={16} /> M.E Electronics
                      </li>
                      <li className="mega-item flex items-center gap-2 hover:text-indigo-400 cursor-pointer">
                        <BookOpen size={16} /> MBA
                      </li>
                      <li className="mega-item flex items-center gap-2 hover:text-indigo-400 cursor-pointer">
                        <BookOpen size={16} /> MCA
                      </li>
                    </ul>
                  </div>

                  {/* Departments */}
                  <div>
                    <h3 className="font-semibold mb-4 text-indigo-400">
                      Departments
                    </h3>
                    <ul className="space-y-3">
                      <li className="mega-item hover:text-indigo-400 cursor-pointer">
                        CSE Department
                      </li>
                      <li className="mega-item hover:text-indigo-400 cursor-pointer">
                        ECE Department
                      </li>
                      <li className="mega-item hover:text-indigo-400 cursor-pointer">
                        MECH Department
                      </li>
                      <li className="mega-item hover:text-indigo-400 cursor-pointer">
                        Civil Department
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>

            <NavItem>Admissions</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Contact</NavItem>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 text-sm">
            <p>Home</p>

            <div>
              <p
                className="cursor-pointer"
                onClick={() =>
                  setMobileDropdown(
                    mobileDropdown === "courses" ? null : "courses"
                  )
                }
              >
                Courses ▾
              </p>

              {mobileDropdown === "courses" && (
                <div className="ml-4 mt-2 space-y-2 text-gray-300">
                  <p>B.E CSE</p>
                  <p>B.E ECE</p>
                  <p>B.E MECH</p>
                  <p>B.E Civil</p>
                </div>
              )}
            </div>

            <p>Admissions</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        )}

      </div>
    </nav>
  )
}
