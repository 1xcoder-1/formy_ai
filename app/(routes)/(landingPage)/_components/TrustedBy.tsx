"use client";

import React from "react";

const TrustedBy = () => {
    return (
        <div className="w-full max-w-5xl mx-auto text-center mb-10 px-4">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">Trusted by innovative teams at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {["Acme Corp", "GlobalTech", "Nebula", "Trio", "FoxRun"].map((company) => (
                    <span key={company} className="text-xl md:text-2xl font-bold font-mono text-foreground/40 hover:text-primary transition-colors cursor-default">{company}</span>
                ))}
            </div>
        </div>
    );
};

export default TrustedBy;
