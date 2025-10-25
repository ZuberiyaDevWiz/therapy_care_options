"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      title: "Orthopedic Post-Op Surgical Recovery",
      image: "/images/service-img1.png",
      description:
        "We help clients recover from spinal surgery, total knee and hip replacements, arthroscopy procedures, fractures, shoulder repairs, tendon repairs, and more.",
      points: [
        "Sprains",
        "Strains",
        "Pain Management of Spine, Knee, Back, Hip, and Shoulders",
      ],
    },
    {
      title: "Pelvic Floor Retraining",
      image: "/images/service-img2.png",
      description:
        "We work with clients dealing with pelvic floor dysfunction to provide specialized retraining and strengthening programs.",
      points: ["Incontinence", "Stress and Urinary Frequency"],
    },
    {
      title: "Injury and Wellness",
      image: "/images/service-img3.png",
      description:
        "If you’ve recently been in an accident or have an attorney, we can help you with pain and injury recovery.",
      points: [],
    },
  ];

  return (
    <section id="services" className="bg-[#F9FAF6] py-20 px-6 md:px-10">
      {/* Section Title */}
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 12,
          duration: 0.5,
        }}
        whileHover={{ scale: 1.05 }}
        className="text-3xl md:text-[2.5rem] font-bold text-[#5A3192] font-heading mb-14 text-center tracking-tight"
      >
        What We Offer
      </motion.h2>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group bg-[#FCFCF9] rounded-md shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 p-6"
          >
            {/* Image (Zoom In–Out Effect) */}
            <div className="relative w-full h-[250px] mb-5 rounded-sm overflow-hidden">
              <motion.div
                className="w-full h-full"
                whileHover={{
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-sm"
                />
              </motion.div>
            </div>

            {/* Title */}
            <h3 className="text-3xl font-extrabold font-sans text-[#1580a3] text-center mb-4 transition-colors duration-300 group-hover:text-[#F74f22]">
              {service.title}
            </h3>

            {/* Description */}
            <p className=" leading-relaxed mb-4">
              {service.description}
            </p>

            {/* Points */}
            {service.points.length > 0 && (
              <ul className="list-disc list-inside space-y-1">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
