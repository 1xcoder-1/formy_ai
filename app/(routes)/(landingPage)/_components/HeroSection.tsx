"use client";

import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ChevronRight, ExternalLink, Video, Zap, Layout, BarChart, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section id="hero" className="relative">
            <div className="hero-section w-full flex flex-col items-center justify-start pt-20 md:pt-32 pb-10 px-4 md:px-8 overflow-hidden">
                <div className="w-full flex flex-col items-center text-center max-w-5xl mx-auto z-10">
                    {/* New Feature Pill */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-black/30 backdrop-blur-sm border border-black/10 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer mb-8"
                    >
                        <span className="flex h-5 w-auto items-center justify-center rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                            New
                        </span>
                        <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                            <Link href="https://github.com/1xcoder-1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-primary" />
                                Revolutionary AI Form Engine
                            </Link>
                        </span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>


                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black tracking-tight text-gray-900 dark:text-white leading-[1] mb-8"
                    >
                        Build Beautiful Forms <br />
                        <span className="relative inline-block mt-2">
                            <span className="absolute inset-x-0 bottom-2 h-4 bg-primary/20 -rotate-1"></span>
                            <span className="relative bg-gradient-to-r from-blue-600 via-primary to-purple-600 bg-clip-text text-transparent animate-gradient-x select-none pb-2">
                                AI Powered
                            </span>
                        </span>{" "}
                        in Seconds
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="max-w-2xl text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-medium"
                    >
                        The intelligent form builder that understands your needs. 
                        No coding, no friction, just results.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-6 mb-20"
                    >
                        <Button className="h-16 px-10 rounded-2xl text-xl font-bold shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 bg-primary hover:bg-primary/90 text-white" asChild>
                            <RegisterLink>
                                Get Started Free
                                <ExternalLink className="ml-2 w-5 h-5" />
                            </RegisterLink>
                        </Button>
                        <Button
                            variant="ghost"
                            className="h-16 px-10 rounded-2xl text-xl font-bold bg-white/5 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 text-foreground"
                            asChild
                        >
                            <a href="#" className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                                    <Video size={18} fill="currentColor" />
                                </div>
                                Watch Demo
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
