"use client";

import { User } from "lucide-react";
import ChatBubble from "./chat-bubble";

export default function Reviews() {
  const review = {
    message:
      "Working with Sydni was a game-changer for our brand. Her content consistently outperforms our other UGC creators. The quality and authenticity she brings to every project is unmatched. We've seen a significant increase in engagement since partnering with her.",
    name: "Beatriz P.",
    role: "Owner",
    company: "Beatriz Pratas Beauty Salon",
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-cream dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-center text-gray-900 dark:text-cream mb-4">
          Client Reviews
        </h2>
        <p className="text-lg text-gray-800 dark:text-cream/90 text-center max-w-2xl mx-auto mb-12">
          Don't just take my word for it - here's what brands have to say
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <ChatBubble
              message={review.message}
              name={review.name}
              role={review.role}
              company={review.company}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
