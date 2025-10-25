import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "./about/page";
import Services from "./services/page";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <ContactPage/>
      <Footer />
    </main>
  );
}
