"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import React, { useState } from "react";

const ReviewsSection = () => {
    return (
        <div className="w-full px-4 mb-32 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Builders</h2>
                    <p className="text-lg text-muted-foreground">Don&apos;t just take our word for it.</p>
                </div>

                <ReviewsSlider />
            </div>
        </div>
    );
};

function ReviewsSlider() {
    const reviews = [
        {
            name: "Alice Freeman",
            role: "Product Manager",
            company: "TechFlow",
            content: "Formy has completely transformed how we collect user feedback. The AI features are mind-blowing!",
            rating: 5,
        },
        {
            name: "Bob Smith",
            role: "Developer",
            company: "CodeWorks",
            content: "I used to hate building forms. Now I actually enjoy it. The drag and drop interface is so smooth.",
            rating: 5,
        },
        {
            name: "Charlie Davis",
            role: "Designer",
            company: "CreativeStudio",
            content: "The aesthetic of the generated forms is top-notch. Minimal adjustments needed to match our brand.",
            rating: 4,
        },
        {
            name: "Diana Prince",
            role: "Marketing Lead",
            company: "GrowthX",
            content: "We saw a 40% increase in completion rates after switching to Formy. Highly recommended.",
            rating: 5,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-hidden p-4">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {reviews.map((review, i) => (
                        <div key={i} className="w-full flex-shrink-0 px-4">
                            <div className="bg-background/80 backdrop-blur-sm border border-border p-8 rounded-2xl shadow-lg flex flex-col items-center text-center h-full">
                                <div className="flex gap-1 text-yellow-400 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={20} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
                                    ))}
                                </div>
                                <p className="text-xl md:text-2xl font-medium mb-6 italic">&quot;{review.content}&quot;</p>
                                <div>
                                    <h4 className="font-bold text-foreground">{review.name}</h4>
                                    <p className="text-sm text-muted-foreground">{review.role} at {review.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
                aria-label="Previous review"
            >
                <ArrowLeft size={20} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
                aria-label="Next review"
            >
                <ArrowRight size={20} />
            </button>

            <div className="flex justify-center gap-2 mt-6">
                {reviews.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            i === currentIndex ? "w-6 bg-primary" : "bg-primary/30 hover:bg-primary/50"
                        )}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default ReviewsSection;
