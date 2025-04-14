import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import WhyUgc from "@/components/why-ugc";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
// import Reviews from "@/components/reviews";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EFD9D1] dark:bg-dark-background">
      <Header />
      <Hero />
      <About />
      <WhyUgc />
      <Services />
      <Portfolio />
      {/* <Reviews /> */}
      <Contact />
      <Footer />
    </main>
  );
}
