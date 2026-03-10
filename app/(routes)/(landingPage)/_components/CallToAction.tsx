"use client";

import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ArrowRight, Sparkles } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
    return (
        <section id="cta" className="w-full max-w-7xl mx-auto px-4 mb-32 relative overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-[3rem] overflow-hidden bg-primary/5 border border-primary/20 p-12 md:p-24 text-center backdrop-blur-sm"
            >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider">
                        <Sparkles className="w-4 h-4" />
                        Get Started Today
                    </div>
                    
                    <h2 className="text-4xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white leading-[1.1]">
                        Ready to Build Your <br />
                        <span className="text-primary italic">First Form?</span>
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-medium">
                        Join thousands of creators who are building beautiful, 
                        AI-powered forms in seconds. No credit card required.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <Button size="lg" className="rounded-2xl text-xl font-bold h-16 px-10 shadow-2xl shadow-primary/30 hover:shadow-primary/50 bg-primary hover:bg-primary/90 text-white transition-all hover:-translate-y-1" asChild>
                            <RegisterLink>
                                Start Building for Free
                                <ArrowRight className="ml-2 w-6 h-6" />
                            </RegisterLink>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CallToAction;
