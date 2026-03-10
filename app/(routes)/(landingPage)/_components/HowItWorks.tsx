"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="w-full bg-gradient-to-b from-transparent to-muted/10 pt-10 pb-32 mb-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">How It <span className="text-primary italic">Works</span></h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Build complex forms in three simple steps.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-12 z-0" />
                    
                    {[
                        {
                            step: "01",
                            title: "Describe",
                            desc: "Tell our AI exactly what you need. Be as specific as you want.",
                            color: "bg-blue-500/10 text-blue-600 border-blue-200"
                        },
                        {
                            step: "02",
                            title: "Customize",
                            desc: "Use the robust drag & drop editor to tweak every detail.",
                            color: "bg-purple-500/10 text-purple-600 border-purple-200"
                        },
                        {
                            step: "03",
                            title: "Publish",
                            desc: "Get a sharable link and start collecting responses instantly.",
                            color: "bg-pink-500/10 text-pink-600 border-pink-200"
                        }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative p-10 rounded-3xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 z-10"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 font-black text-9xl text-gray-900 dark:text-white select-none pointer-events-none group-hover:opacity-10 transition-opacity">
                                {item.step}
                            </div>
                            <div className={cn("inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8 border-2 shadow-sm transition-transform duration-500 group-hover:scale-110", item.color)}>
                                <span className="text-2xl font-bold">{item.step}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                {item.desc}
                            </p>
                            <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all duration-300">
                                <span className="text-sm uppercase tracking-widest">Learn More</span>
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
