 import Image from "next/image";

const Hero = () => {
  return (
   <section
  className="relative h-screen w-full flex items-center justify-center text-center text-white"
  style={{
    backgroundImage: "url('/images/hero-img.png')",
    backgroundSize: "cover",
    backgroundPosition: "center 140px",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Gradient overlay */}
  <div
    className="absolute inset-0"
    style={{
  background: "linear-gradient(180deg, rgba(61, 90, 219, 0.32) 1%, rgba(90, 49, 146, 0.9) 100%)",
}}

  ></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl px-6 text-center pt-52">
    <h1 className="text-[70px] font-bold uppercase drop-shadow-lg leading-16">
      YOUR PATH TO BETTER PHYSICAL <br /> WELLNESS STARTS HERE
    </h1>
    <p className="mt-4 text-xl drop-shadow-md max-w-4xl mx-auto">
      We provide holistic physical therapy services that transform you from the inside out
    </p>
    <button className="mt-8 rounded-full bg-[#2B99AD] px-8 py-3 font-semibold hover:bg-[#1F7181] transition">
      Schedule a Consultation
    </button>
  </div>
</section>




  );
};

export default Hero;
