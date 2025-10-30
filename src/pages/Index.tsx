import Hero from "@/components/Hero";
import About from "@/components/About";
import Career from "@/components/Career";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header" ;

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Career />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
