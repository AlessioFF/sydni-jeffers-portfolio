import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-sage dark:bg-gray-950/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-center text-gray-900 dark:text-dark-title mb-12">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 order-2 md:order-1">
            <p className="text-lg text-gray-800 dark:text-dark-text mb-6">
              Hi there! I'm Sydni, a passionate UGC creator and traveler
              dedicated to helping brands connect and resonate with their
              audience through scroll-stopping & wallet-opening content.
            </p>
            <p className="text-lg text-gray-800 dark:text-dark-text mb-6">
              🌍 <strong>Global Perspective:</strong> Fluent in English with an
              American accent, making me a great fit for brands targeting
              English-speaking audiences
            </p>
            <p className="text-lg text-gray-800 dark:text-dark-text mb-6">
              ✨ <strong>Aesthetic Expertise:</strong> A keen eye for coastal
              and European-inspired visuals that are both timeless and on-trend{" "}
            </p>
            <p className="text-lg text-gray-800 dark:text-dark-text mb-6">
              🏖️ <strong>Unique Location:</strong> Access to breathtaking
              beachscapes and charming, old-style European city backdrops for
              versatile content creation{" "}
            </p>
            <p className="text-lg text-gray-800 dark:text-dark-text mb-6">
              🎓 <strong>Marketing Knowledge:</strong> university courses
              included consumer behavior and effective business communication{" "}
            </p>
            <p className="text-lg text-gray-800 dark:text-dark-text mb-6">
              💡 <strong>Flexible Workstyle:</strong> Succinct communicator that
              adapts to new & different ideas while delivering exceed-your-
              expectation results
            </p>
          </div>

          <div className="flex-1 order-1 md:order-2">
            <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-full border-8 border-peach dark:border-dark-secondary shadow-xl">
              <img
                src="/images/profile.png"
                alt="Sydni Jeffers"
                className="w-full h-full object-cover object-center rounded-full border-4 border-terracotta/30 shadow-xl"
                style={{ objectPosition: "50% 10%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
