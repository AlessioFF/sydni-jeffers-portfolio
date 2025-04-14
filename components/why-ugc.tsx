import { Check } from "lucide-react";

export default function WhyUgc() {
  const reasons = [
    {
      title: "Builds Trust Like No Other",
      description:
        "<strong>92%</strong> of consumers say they trust content from real people over traditional ads.",
    },
    {
      title: "Boosts Conversions",
      description:
        "UGC can increase conversion rates by <strong>up to 29%</strong>. Real content helps real people click 'add to cart.'",
    },
    {
      title: "Platform-Perfect",
      description:
        "Social media is built for UGC. Short, raw-yet-pretty content performs best on TikTok, Reels, and Stories. Why? Because it blends in, not screams out.",
    },
  ];

  return (
    <section
      id="why-ugc"
      className="py-16 md:py-24 bg-cream dark:bg-dark-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-center text-gray-900 dark:text-cream mb-4">
          What's UGC?
        </h2>
        <p className="text-lg text-gray-800 dark:text-cream/90 text-center max-w-3xl mx-auto mb-12">
          UGC stands for User-Generated Content — aka content made by{" "}
          <span className="font-bold italic">real people</span>, not ad
          agencies. Think: unboxings, product demos, aesthetic videos created by
          everyday people (like me!) that brands can use in their marketing.
        </p>
        <p className="text-lg text-gray-800 dark:text-cream/90 text-center max-w-3xl mx-auto mb-12">
          It's authentic and designed to feel like a friend's recommendation --
          not a pushy ad.
        </p>
        <p className="text-lg text-gray-800 dark:text-cream/90 text-center max-w-3xl mx-auto mb-12">
          And that's exactly why it works. Take a look at these quick facts:
        </p>

        <h2 className="text-3xl md:text-4xl font-serif font-medium text-center text-gray-900 dark:text-cream mb-8">
          Why UGC?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-terracotta dark:bg-gray-950/90 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="bg-peach/30 dark:bg-cream p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-sage dark:dark-background" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-cream">
                  {reason.title}
                </h3>
              </div>
              <p
                className="text-gray-800 dark:text-cream/90 ml-11"
                dangerouslySetInnerHTML={{ __html: reason.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
