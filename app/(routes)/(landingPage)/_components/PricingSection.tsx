"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Sparkles, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect for personal projects",
    features: [
      "Up to 3 active forms",
      "Basic AI generation",
      "Real-time analytics",
      "Community support",
    ],
    icon: Zap,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/10",
    popular: false,
  },
  {
    name: "Starter",
    price: "₹300",
    period: "/10 forms",
    description: "Ideal for growing businesses",
    features: [
      "10 active forms",
      "Advanced AI features",
      "Custom themes & CSS",
      "Email notifications",
      "Priority email support",
    ],
    icon: Sparkles,
    color: "text-primary",
    bg: "bg-primary/5 dark:bg-primary/10",
    popular: true,
  },
  {
    name: "Pro",
    price: "₹500",
    period: "/20 forms",
    description: "For teams and professionals",
    features: [
      "20 active forms",
      "Unlimited AI prompts",
      "Full white-labeling",
      "Detailed CSV/Excel export",
      "24/7 dedicated support",
    ],
    icon: Building,
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/20",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4"
          >
            Simple, Transparent <span className="text-primary italic">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground mx-auto max-w-2xl"
          >
            Choose the best plan for your needs and start building forms in seconds.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative flex flex-col p-8 rounded-3xl bg-white dark:bg-gray-800 border-2 ${
                plan.popular ? "border-primary shadow-xl shadow-primary/10 scale-105 z-10" : "border-gray-100 dark:border-gray-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary text-white shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-2xl ${plan.bg} ${plan.color}`}>
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-black text-gray-900 dark:text-white">{plan.price}</span>
                {plan.period && <span className="text-gray-500 dark:text-gray-400 font-medium">{plan.period}</span>}
              </div>
              <p className="text-muted-foreground mb-8 text-sm font-medium">{plan.description}</p>

              <div className="space-y-4 mb-10 mt-auto">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className={`w-full rounded-2xl h-12 text-base font-bold transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
                    : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
                }`}
              >
                {plan.name === "Free" ? "Get Started" : "Choose Plan"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
