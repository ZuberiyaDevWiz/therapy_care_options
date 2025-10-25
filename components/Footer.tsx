"use client";
import { JSX } from "react";
import {  FaFacebookF,  FaInstagram, FaXTwitter, FaLinkedinIn} from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-white py-10 flex flex-col items-center justify-center space-y-6">
      {/* Social Icons */}
      <div className="flex space-x-3">
        <a
          href="#"
          aria-label="Facebook"
               className="text-gray-500 hover:bg-[#F74f22] hover:rounded-full p-2 transition-colors duration-300"

        >
          <FaFacebookF size={22} />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="text-gray-500 hover:bg-[#F74f22] hover:rounded-full p-2 transition-colors duration-300"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="#"
          aria-label="X (Twitter)"
                   className="text-gray-500 hover:bg-[#F74f22] hover:rounded-full p-2 transition-colors duration-300"

        >
          <FaXTwitter size={22} />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
                   className="text-gray-500 hover:bg-[#F74f22] hover:rounded-full p-2 transition-colors duration-300"

        >
          <FaLinkedinIn size={22} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-[#1C7896] text-center font-poppins">
        © Copyright Care Options Therapy 2024. All Rights Reserved.
      </p>

      {/* .Bottom Logo */}
     <Link href="https://remiah.com/" target="_blank" className="cursor-pointer">
      <div className="flex flex-col items-center space-y-1 ">
        <Image
          src="/images/footer-img.png" 
          alt="REMIAH Logo"
          width={110}
          height={40}
          className="object-contain"
        />
       
      </div>
     </Link>
    </footer>
  );
}
