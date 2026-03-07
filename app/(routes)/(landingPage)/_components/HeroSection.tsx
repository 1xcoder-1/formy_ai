"use client";

import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ChevronRight, ExternalLink, Video, Zap, Layout, BarChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <>
            <div className="hero-section w-full flex flex-col items-center justify-start pt-20 md:pt-32 pb-10 px-4 md:px-8">
                <div className="w-full flex flex-col items-center text-center max-w-5xl mx-auto z-10">
                    {/* New Feature Pill */}
                    <div className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-black/30 backdrop-blur-sm border border-black/10 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer mb-8">
                        <span className="flex h-5 w-auto items-center justify-center rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                            New
                        </span>
                        <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                            <Link href="https://github.com/1xcoder-1" target="_blank" rel="noopener noreferrer">
                                Subscribe to 1xcoder
                            </Link>
                        </span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>


                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground leading-[1.1] mb-8 drop-shadow-2xl">
                        Build Beautiful Forms <br />
                        <span className="relative inline-block mt-2">
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-primary to-purple-600 opacity-30 blur-2xl"></span>
                            <span className="relative bg-gradient-to-r from-blue-600 via-primary to-purple-600 bg-clip-text text-transparent animate-gradient-x select-none">
                                AI Powered
                            </span>
                        </span>{" "}
                        in Seconds
                    </h1>

                    <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed font-medium">
                        Create and share powerful forms in seconds with AI. No coding required.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 animate-fade-in-up">
                        <Button className="h-14 px-8 rounded-full text-lg font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 bg-primary hover:bg-primary/90" asChild>
                            <RegisterLink>
                                Get Started Free
                                <ExternalLink className="ml-2 w-5 h-5" />
                            </RegisterLink>
                        </Button>
                        <Button
                            variant="outline"
                            className="h-14 px-8 rounded-full text-lg font-semibold bg-white/50 dark:bg-black/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300 text-foreground"
                            asChild
                        >
                            <a href="#" className="flex items-center gap-2">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                                    <Video size={18} fill="currentColor" />
                                </div>
                                Watch Demo
                            </a>
                        </Button>
                    </div>
                </div>
            </div>


            <div className="w-full max-w-6xl mx-auto mb-16 px-4 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">


                    <div className="md:col-span-2 row-span-2 rounded-3xl bg-background border border-border/50 shadow-2xl p-8 flex flex-col justify-between overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-3 bg-primary/5 rounded-bl-3xl">
                            <Zap className="text-primary w-6 h-6" />
                        </div>
                        <div className="space-y-4 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-xs font-bold uppercase tracking-wider">
                                Generate
                            </div>
                            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
                                Just describe it.
                            </h3>
                            <p className="text-muted-foreground text-lg max-w-md">
                                Type what you need, and our AI builds the entire form structure, validation, and layout instantly.
                            </p>
                        </div>


                        <div className="mt-8 bg-muted/40 rounded-xl p-4 border border-border/50">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                    AI
                                </div>
                                <div className="h-2 w-24 bg-foreground/10 rounded-full animate-pulse" />
                            </div>
                            <div className="w-full bg-background rounded-lg border border-input px-4 py-3 text-sm text-muted-foreground font-mono">
                                &quot;Create a registration form for a design workshop with name, email, and portfolio upload...&quot;
                                <span className="inline-block w-1.5 h-4 bg-primary ml-1 animate-blink" />
                            </div>
                        </div>

                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />
                    </div>


                    <div className="md:col-span-1 row-span-1 rounded-3xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-border/50 shadow-xl p-6 relative overflow-hidden flex flex-col justify-center items-center group">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                        <div className="relative z-10 bg-background rounded-xl border border-border shadow-lg p-4 w-4/5 rotate-3 group-hover:rotate-0 transition-transform duration-300">
                            <div className="flex items-center gap-3 mb-3 border-b border-border pb-2">
                                <Layout className="w-4 h-4 text-purple-500" />
                                <span className="text-xs font-bold text-foreground">Contact Info</span>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-secondary rounded-sm" />
                                <div className="h-8 w-full bg-muted/50 rounded-md border border-dashed border-muted-foreground/30" />
                            </div>
                        </div>

                        <div className="absolute bottom-4 right-4 text-purple-500 font-bold text-sm bg-purple-100 dark:bg-purple-900/20 px-3 py-1 rounded-full">
                            Drag & Drop
                        </div>
                    </div>


                    <div className="md:col-span-1 row-span-1 rounded-3xl bg-background border border-border/50 shadow-xl p-6 relative overflow-hidden group">
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg text-green-600">
                                <BarChart size={20} />
                            </div>
                            <span className="text-xs font-bold text-muted-foreground uppercase">Analytics</span>
                        </div>
                        <div className="space-y-4 relative">
                            <div className="flex items-end justify-between h-24 gap-2">
                                {[35, 75, 55, 60, 80, 45, 90].map((h, i) => (
                                    <div key={i} className="w-full bg-green-500/10 rounded-t-lg relative group-hover:bg-green-500/20 transition-colors overflow-hidden">
                                        <div className="absolute bottom-0 left-0 right-0 bg-green-500 transition-all duration-1000 ease-out" style={{ height: `${h}%` }} />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2 mb-2">
                                <div>
                                    <span className="font-bold text-foreground block text-lg">1,248</span>
                                    <span className="text-muted-foreground text-xs">Responses</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-green-600 font-bold block text-sm">+24.5%</span>
                                    <span className="text-muted-foreground text-[10px]">vs last week</span>
                                </div>
                            </div>

                            {/* Device Stats */}
                            <div className="flex items-center gap-2 pt-1">
                                <div className="flex-1 h-1.5 bg-blue-500 rounded-full"></div>
                                <div className="flex-1 h-1.5 bg-purple-500 rounded-full"></div>
                                <div className="w-1/4 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-muted-foreground px-1">
                                <span>Desktop</span>
                                <span>Mobile</span>
                            </div>

                            {/* Floating Spike Badge */}
                            <div className="absolute top-2 right-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-sm border border-border rounded-full py-1 px-2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] font-medium">Live</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default HeroSection;
