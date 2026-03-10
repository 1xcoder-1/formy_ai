"use client";

import React from "react";
import Logo from "@/components/logo";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2 space-y-6">
                        <Logo url="/" />
                        <p className="max-w-sm text-muted-foreground font-medium leading-relaxed">
                            Formy.ai is an intelligent form builder that uses AI to help you build, 
                            manage, and analyze forms in seconds. No coding required.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { icon: Twitter, href: "#" },
                                { icon: Github, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Mail, href: "#" },
                            ].map((social, i) => (
                                <Link key={i} href={social.href} className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20">
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-6">Product</h4>
                        <ul className="space-y-4">
                            {["AI Features", "How It Works", "Pricing", "Resources"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            {["About Us", "Contact", "Privacy Policy", "Terms of Service"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 dark:border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm font-medium text-muted-foreground">
                        © {new Date().getFullYear()} Formy.ai. Built with ❤️ for builders.
                    </p>
                    <div className="flex gap-6 text-sm font-medium text-muted-foreground">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
