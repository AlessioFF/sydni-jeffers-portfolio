"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 dark:bg-gray-950/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-center text-gray-900 dark:text-cream mb-4">
          Let's Work Together
        </h2>
        <p className="text-lg text-gray-800 dark:text-cream/90 text-center max-w-2xl mx-auto mb-12">
          Ready to elevate your brand with authentic UGC? Get in touch!
        </p>

        <div className="max-w-3xl mx-auto bg-cream dark:bg-gray-800 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-medium text-gray-900 dark:text-cream mb-6">
            Contact Information
          </h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-terracotta mr-4 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900 dark:text-cream mb-1">
                  Email
                </h4>
                <p className="text-gray-800 dark:text-cream/90">
                  ugcwithsydni@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-terracotta mr-4 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900 dark:text-cream mb-1">
                  WhatsApp
                </h4>
                <p className="text-gray-800 dark:text-cream/90">
                  +1 (847) 867-5224
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-cream mb-6">
              Terms and Conditions
            </h3>
            <p className="text-gray-800 dark:text-cream/90 mb-4">
              Before working together, please review my terms and conditions.
            </p>
            <a
              href="/documents/Liability.pdf"
              download
              className="inline-flex items-center text-terracotta hover:text-terracotta/80 font-medium"
            >
              Download Terms and Conditions PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
