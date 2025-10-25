"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function Hero() {
  const handleCalendlyClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/admin-therapycareoptions",
      });
    } else {
      window.open("https://calendly.com/admin-therapycareoptions", "_blank");
    }
  };

  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 0px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(61, 90, 219, 0.38) 1%, rgba(90, 49, 146, 0.9) 100%)",
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-6xl px-6 text-center text-white"
      >
        <h1 className="text-[70px] font-bold uppercase drop-shadow-lg font-heading leading-[70px]">
          YOUR PATH TO BETTER PHYSICAL <br /> WELLNESS STARTS HERE
        </h1>
        <p className="mt-4 text-xl drop-shadow-md max-w-4xl mx-auto">
          We provide holistic physical therapy services that transform you from
          the inside out
        </p>

       <Link href="https://calendly.com/admin-therapycareoptions" target="_blank">
        <div className="flex justify-center mt-8">
          <div className="flex justify-center relative">
            <motion.button
              onClick={handleCalendlyClick}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="group relative cursor-pointer flex items-center justify-center font-heading text-xl rounded-full bg-[#2B99AD] px-6 py-2 font-semibold text-white hover:bg-[#1F7181] transition-all duration-100"
            >
              Schedule a Consultation
              <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 right-1 transform -translate-x-3 group-hover:translate-x-0">
                <IoIosArrowForward />
              </span>
            </motion.button>
          </div>
        </div>
       </Link>
      </motion.div>
    </section>
  );
}
