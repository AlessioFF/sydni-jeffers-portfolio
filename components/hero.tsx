"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-cream dark:bg-dark-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-terracotta dark:text-dark-title mb-6">
              <span className="block">UGC Creator</span>
              {/* <span className="block mt-2 text-white dark:text-peach">
                Sydni Jeffers
              </span> */}
            </h1>
            <p className="text-lg md:text-xl text-gray-800 dark:text-dark-text mb-8 max-w-xl mx-auto md:mx-0">
              Contributing actively to the success of your brand’s marketing by
              offering authentic user-generated content that drives real results
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-gray-950/90 hover:bg-sage/90 text-white rounded-full px-8 py-6 text-lg"
            >
              Work With Me
            </Button>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/hero.png"
                alt="Sydni Jeffers"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
