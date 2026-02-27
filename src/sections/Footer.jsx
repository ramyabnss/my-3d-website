

import FloatingParticles from "../animations/FloatingParticles";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white overflow-hidden min-h-[550px]">

      {/* 3D Particle Background */}
      <div className="absolute inset-0 z-0">
        <FloatingParticles />
      </div>

      {/* Dark overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/60 z-10"></div> */}

      {/* Glass Content Container */}
      <div className="relative z-20 w-[80%] mx-auto py-20">

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo / About */}
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
              TechNova
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Empowering students with innovation, discipline, and excellence in education.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">📍 Chennai, Tamil Nadu</p>
            <p className="text-gray-300 mb-2">📞 +91 98765 43210</p>
            <p className="text-gray-300">✉️ info@sjgs.edu</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-pink-400 transition cursor-pointer">Home</li>
              <li className="hover:text-pink-400 transition cursor-pointer">About Us</li>
              <li className="hover:text-pink-400 transition cursor-pointer">Admissions</li>
              <li className="hover:text-pink-400 transition cursor-pointer">Campus Life</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <div className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-pink-500 transition cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-pink-500 transition cursor-pointer">
                <FaInstagram />
              </div>
              <div className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-pink-500 transition cursor-pointer">
                <FaTwitter />
              </div>
              <div className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-pink-500 transition cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="text-center text-white text-sm mt-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10">
          © {new Date().getFullYear()} <span className="bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">BNSS</span>. All rights reserved.
        </div>

      </div>
    </footer>
  );
}