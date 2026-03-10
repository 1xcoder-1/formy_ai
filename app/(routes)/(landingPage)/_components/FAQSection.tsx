"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does the AI form builder work?",
    answer: "Our AI uses advanced language models to understand your requirements. You simply describe the type of form you need, and it automatically generates the schema, validation rules, and layout in seconds.",
  },
  {
    question: "Can I customize the generated forms?",
    answer: "Yes! Once AI generates the initial form, you can use our intuitive drag-and-drop builder to add, remove, or modify fields. You can also customize colors, fonts, and styling.",
  },
  {
    question: "Is there a limit on responses I can collect?",
    answer: "Our free plan has a generous limit, while our Starter and Pro plans offer significantly higher limits designed to scale with your needs.",
  },
  {
    question: "Can I export my form data?",
    answer: "Absolutely. You can export your data to CSV or Excel formats, or connect with 2000+ apps via Zapier and Webhooks (coming soon).",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we offer email support for all users. Pro users get 24/7 priority dedicated support.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full max-w-7xl mx-auto px-4 mb-32 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6"
          >
            Got <span className="text-primary italic">Questions?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground mx-auto max-w-2xl"
          >
            Everything you need to know about Formy.ai
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-3xl border transition-all duration-300 ${
                activeIndex === index
                  ? "border-primary bg-primary/5 shadow-2xl shadow-primary/5"
                  : "border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-7 text-left focus:outline-none group"
              >
                <span className="text-xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-primary">
                  {faq.question}
                </span>
                <span className={`p-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-primary text-white rotate-180" : "bg-gray-100 dark:bg-gray-800 text-gray-400"}`}>
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-7 pb-7 text-gray-600 dark:text-gray-400 text-lg font-medium leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4 mt-1">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
