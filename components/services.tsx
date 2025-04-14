import { Video, Sparkles, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Content Base",
      price: "$60",
      description: "Quick & Simple",
      features: [
        "1 UGC Video (30 seconds)",
        "Edited for Instagram/Tiktok/Youtube",
        "3-day delivery",
        "1 revision",
        "1 high-quality thumbnail photo",
      ],
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Video Content Premium",
      price: "$85",
      description: "Engaging & Eye-Catching",
      features: [
        "1 UGC Video (30-60 seconds)",
        "Edited for Instagram/Tiktok/Youtube",
        "3-day delivery",
        "2 revisions",
        "1 high-quality thumbnail photo",
      ],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Video Content Plus",
      price: "$110",
      description: "Impactful & Strategic",
      features: [
        "1 UGC Video (60-120 seconds)",
        "Edited for Instagram/Tiktok/Youtube",
        "3-day delivery",
        "3 revisions",
        "2 high-quality thumbnail photos",
      ],
    },
  ];

  const addOns = [
    {
      title: "Extra-fast delivery",
      price: "$30",
    },
    {
      title: "Additional Revision",
      price: "$40 / 2 days",
    },
    {
      title: "Product Photography",
      price: "$20 for 4 photos",
    },
    {
      title: "Dog Cameo",
      price: "$30",
    },
  ];

  const videoTypes = [
    "Unboxing",
    "Tutorial",
    "Testimonial",
    "Product Review",
    "Aesthetic Montage",
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-peach dark:bg-gray-950/90"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-center text-gray-900 dark:text-dark-title mb-4">
          Video Content Packages
        </h2>
        <p className="text-lg text-gray-800 dark:text-dark-text text-center max-w-2xl mx-auto mb-6">
          Choose the perfect package for your brand's needs
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="text-lg font-medium text-gray-900 dark:text-dark-title">
            Types of Videos:
          </span>
          {videoTypes.map((type, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-sage dark:bg-terracotta/20 rounded-full text-gray-800 dark:text-dark-text font-medium"
            >
              {type}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-secondary p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-terracotta dark:bg-terracotta/30 p-3 rounded-full">
                  {service.icon}
                </div>
                <span className="text-2xl font-medium text-terracotta dark:text-dark-title">
                  {service.price}
                </span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-dark-title mb-2">
                {service.title}
              </h3>
              <p className="text-gray-800 dark:text-dark-text mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-gray-800 dark:text-dark-text"
                  >
                    <span className="text-terracotta dark:text-dark-title mr-2">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-dark-secondary p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-medium text-gray-900 dark:text-dark-title mb-6 text-center">
            Add-Ons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addOn, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-cream dark:bg-dark-background rounded-lg"
              >
                <span className="text-gray-900 dark:text-dark-title">
                  {addOn.title}
                </span>
                <span className="text-sage dark:text-dark-title font-medium">
                  {addOn.price}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-terracotta/10 dark:bg-dark-background rounded-lg">
            <p className="text-sm text-gray-800 dark:text-dark-text italic">
              <strong>Quick fact:</strong> Posts featuring dogs get{" "}
              <strong>up to 69%</strong>
              more engagement on Instagram compared to those without; TikToks
              and Reels that feature pets—especially cute, well-behaved dogs—see
              <strong> up to 2x</strong> longer average view duration; UGC with
              dogs is <strong>3x more</strong> likely to be shared than similar
              content without pets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
