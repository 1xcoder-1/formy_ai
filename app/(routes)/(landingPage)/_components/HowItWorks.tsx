"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";

const HowItWorks = () => {
    return (
        <div className="w-full bg-gradient-to-b from-transparent to-muted/20 py-24 mb-32 relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">How It Works</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Build complex forms in three simple steps.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                        <div key={i} className="group relative p-8 rounded-3xl bg-background border border-border hover:border-primary/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-8xl text-foreground select-none pointer-events-none">
                                {item.step}
                            </div>
                            <div className={cn("inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 border", item.color)}>
                                <span className="text-xl font-bold">{item.step}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.desc}
                            </p>
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                                <ArrowRight className="text-primary w-6 h-6" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
