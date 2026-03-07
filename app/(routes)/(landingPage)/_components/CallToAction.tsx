"use client";

import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ArrowRight } from "lucide-react";
import React from "react";

const CallToAction = () => {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 mb-20">
            <div className="relative rounded-3xl overflow-hidden bg-primary/5 border border-primary/10 p-12 md:p-20 text-center">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to build your first form?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 relative z-10">Join thousands of users who are creating beautiful forms in seconds.</p>
                <div className="flex justify-center relative z-10">
                    <Button size="lg" className="rounded-full text-lg h-14 px-8 shadow-xl shadow-primary/25" asChild>
                        <RegisterLink>
                            Start Building for Free
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </RegisterLink>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
