"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { section } from "framer-motion/client";
import Link from "next/link";

export default function AboutPage() {
  return (
   <section id="about">
     <motion.section
      initial={{ opacity: 0, y: 80 }} // 👈 Start slightly below and invisible
      whileInView={{ opacity: 1, y: 0 }} // 👈 Animate up into place
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // 👈 Animate once when 20% visible
      className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center md:items-start gap-12"
    >
      {/* Image on the left */}
      <div className="relative w-full flex justify-center">
        <Image
          src="/images/about-img.png"
          width={1000}
          height={1000}
          alt="Therapy session"
          className="w-full max-w-[600px] h-auto object-cover" // 👈 Makes it scale properly
        />
      </div>

      {/* Text content */}
      <div className="w-full flex flex-col gap-2 font-heading">
        <p className="text-xl text-[#2c85a3] font-medium">+ About Us</p>
        <h1 className="text-3xl md:text-3xl font-bold text-[#5a3192]">
          Feeling better starts with moving better
        </h1>

        <div className="space-y-5 pt-5">
          <p className="font-sans font-semibold">
            With over a decade of experience in physical therapy, our founder
            Christy was struck by a profound insight during a moment of deep
            reflection.
          </p>
          <p className="font-sans font-semibold">
            This realization wasn’t about the multitude of treatment options
            available; instead, it highlighted a necessary shift in our
            therapeutic approach. It became clear that to truly make a lasting
            impact, our interventions need to begin as early as possible.
          </p>
          <p className="font-sans font-semibold">
            Driven by this vision, Therapy Care Options focuses on early
            intervention for patients, recognizing the importance of foundational
            care in physical therapy. From young children to older adults, we’re
            dedicated to setting the stage for a lifetime of mobility and
            well-being.
          </p>
          <p className="font-sans font-semibold">
            If you’re ready to embrace a proactive approach to physical therapy,
            joining us in making a difference from the very beginning, <br />
            let’s start this transformative journey together!
          </p>
          <p className="font-sans font-semibold">Let’s make it real.</p>
        </div>

        {/* Button */}
      <Link href="https://calendly.com/admin-therapycareoptions" target="_blank">
        <div className="flex mt-5 relative">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="group relative cursor-pointer flex items-center justify-center font-heading text-xl rounded-full bg-[#2B99AD] px-6 py-2 font-semibold text-white hover:bg-[#1F7181] transition-all duration-100"
          >
            Schedule a Consultation
            <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 right-1 transform -translate-x-3 group-hover:translate-x-0">
              <IoIosArrowForward />
            </span>
          </motion.button>
        </div>
      </Link>
      </div>
    </motion.section>
   </section>
  );
}
