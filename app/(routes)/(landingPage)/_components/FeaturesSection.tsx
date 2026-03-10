"use client";

import { Zap, Layout, BarChart, Globe, Shield, Users } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
    return (
        <section id="features" className="w-full max-w-7xl mx-auto px-4 mb-32 relative">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white leading-tight">Features that give you <span className="text-primary italic">superpowers</span></h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Everything you need to build, share, and analyze forms without writing a single line of code.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Zap, title: "AI Generation", desc: "Describe your form in plain English and watch AI build it instantly." },
                    { icon: Layout, title: "Drag & Drop Builder", desc: "Intuitive interface to customize every aspect of your form with ease." },
                    { icon: BarChart, title: "Analytics & Insights", desc: "Real-time data visualization to understand your audience better." },
                    { icon: Globe, title: "Share Anywhere", desc: "Embed on your site or share via direct link. Works on all devices." },
                    { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption and GDPR compliance out of the box." },
                    { icon: Users, title: "Team Collaboration", desc: "Invite your team to collaborate on creating and managing forms." },
                ].map((feature, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-3xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <feature.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
