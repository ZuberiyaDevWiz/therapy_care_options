"use client";
import Link from "next/link";
import { FaPhone, FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

const Navbar = () => {
  return (
<header className="shadow-sm">
  {/* --- Top Purple Bar --- */}
  <div className="bg-[#5b2d91] text-white flex justify-between items-center px-28 py-3">
    {/* Phone Number */}
    <div className="flex items-center space-x-2 text-xs md:text-sm">
      <FaPhone className="font-heading text-[#49b8e8]" />
      <span>(225) 888-7705</span>
    </div>

    {/* Social Media Icons */}
    <div className="flex space-x-3">
      <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#49b8e8] p-1.5 rounded-sm hover:opacity-80 transition">
        <FaFacebookF size={14} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#49b8e8] p-1.5 rounded-sm hover:opacity-80 transition">
        <FaXTwitter size={14} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#49b8e8] p-1.5 rounded-sm hover:opacity-80 transition">
        <FaInstagram size={14} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#49b8e8] p-1.5 rounded-sm hover:opacity-80 transition">
        <FaYoutube size={14} />
      </a>
    </div>
  </div>

  {/* --- Main White Navbar --- */}
  <nav className="bg-white py-4 px-28 flex justify-between items-center">
    {/* Logo */}
    <img
      src="/images/therapy_logo.png"
      alt="therapy logo"
      className="w-40 h-auto"
    />

    {/* Navigation Links */}
    <div className="hidden md:flex space-x-8">
      {["About", "Services", "Contact"].map((item) => (
        <Link
          key={item}
          href={`#${item.toLowerCase()}`}
          className="font-heading text-[20px] font-bold text-[#1580A3] hover:text-[#61b1e5] transition-colors duration-200"
        >
          {item}
        </Link>
      ))}
    </div>
  </nav>
</header>

  );
};

export default Navbar;
