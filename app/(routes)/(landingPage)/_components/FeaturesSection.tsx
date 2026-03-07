"use client";

import { Zap, Layout, BarChart, Globe, Shield, Users } from "lucide-react";
import React from "react";

const FeaturesSection = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 mb-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Features that give you superpowers</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Everything you need to build, share, and analyze forms without writing a single line of code.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Zap, title: "AI Generation", desc: "Describe your form in plain English and watch AI build it instantly." },
                    { icon: Layout, title: "Drag & Drop Builder", desc: "Intuitive interface to customize every aspect of your form with ease." },
                    { icon: BarChart, title: "Analytics & Insights", desc: "Real-time data visualization to understand your audience better." },
                    { icon: Globe, title: "Share Anywhere", desc: "Embed on your site or share via direct link. Works on all devices." },
                    { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption and GDPR compliance out of the box." },
                    { icon: Users, title: "Team Collaboration", desc: "Invite your team to collaborate on creating and managing forms." },
                ].map((feature, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                            <feature.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesSection;
