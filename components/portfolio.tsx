"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoItems = [
    {
      title: "Beauty Product Review & Tutorial",
      description:
        "Here's my review of Pai's Salvation Jane Moisturizer! Watch as I give my take on the popular brand's best seller!",
      videoSrc: "/videos/video1.mp4",
      thumbnail: "/images/thumbnails/Thumbnail1.jpg",
    },
    {
      title: "Women's Handbag Promotion",
      description:
        "Dive into a dreamy visual that highlights more than a bag -- it's a mood (sparkle emoji)",
      videoSrc: "/videos/video2.mp4",
      thumbnail: "/images/thumbnails/thumbnail2.jpg",
    },
    {
      title: "Fashion Product Review & Testimonial",
      description:
        "Moody Girl Aesthetic's Moonlit Wisteria Sundress is finally here! Let's take a look at the details and style together!",
      videoSrc: "/videos/video3.mp4",
      thumbnail: "/images/thumbnails/thumbnail3.jpg",
    },
    {
      title: "Pet Product Review & Testimonial",
      description:
        "Dig into my review of Leopold's custom line of quality threads for dachshunds! #longboysonly",
      videoSrc: "/videos/video4.mp4",
      thumbnail: "/images/thumbnails/thumbnail4.jpg",
    },
    {
      title: "Clothing Brand Unboxing & Try-On Montage",
      description:
        "Check out these baddie weekend looks as we mix-n-match new pieces from the signature collection!",
      videoSrc: "/videos/video5.mp4",
      thumbnail: "/images/thumbnails/Thumbnail5.jpg",
    },
    {
      title: "Beauty Salon Experience & Review",
      description: "Already booked my lash appointment! 💜💅🏼🔥 #nailedit",
      videoSrc: "/videos/video6.mp4",
      thumbnail: "/images/thumbnails/thumbnail6.jpg",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 bg-sage dark:bg-dark-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-center text-gray-900 dark:text-cream mb-12">
          Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoItems.map((item) => (
            <div key={item.title} className="space-y-4">
              <div className="relative mx-auto w-[280px] aspect-[9/16]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-xl border-[14px] border-gray-900">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-gray-900 rounded-b-3xl"></div>
                  {/* Screen Content */}
                  <div className="absolute inset-[14px] bg-black rounded-2xl overflow-hidden">
                    {activeVideo === item.videoSrc ? (
                      <video
                        controls
                        className="w-full h-full object-contain"
                        autoPlay
                        onEnded={() => setActiveVideo(null)}
                      >
                        <source src={item.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div
                        className="w-full h-full cursor-pointer relative"
                        onClick={() => setActiveVideo(item.videoSrc)}
                      >
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/50 rounded-full p-4">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Home Button */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-gray-800 rounded-full"></div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 dark:text-cream mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-800 dark:text-cream/90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
