"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";

const reviews = [
    {
        quote: "Formy has completely transformed how we collect user feedback. The AI features are mind-blowing!",
        name: "Alice Freeman",
        title: "Product Manager at TechFlow",
    },
    {
        quote: "I used to hate building forms. Now I actually enjoy it. The drag and drop interface is so smooth.",
        name: "Bob Smith",
        title: "Developer at CodeWorks",
    },
    {
        quote: "The aesthetic of the generated forms is top-notch. Minimal adjustments needed to match our brand.",
        name: "Charlie Davis",
        title: "Designer at CreativeStudio",
    },
    {
        quote: "We saw a 40% increase in completion rates after switching to Formy. Highly recommended.",
        name: "Diana Prince",
        title: "Marketing Lead at GrowthX",
    },
];

const ReviewsSection = () => {
    return (
        <section id="reviews" className="w-full px-4 mb-32 overflow-hidden relative pt-0 pb-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white leading-tight">Loved by <span className="text-primary italic">Builders</span></h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Don&apos;t just take our word for it. Join thousands of happy users.</p>
                </motion.div>

                <div className="flex flex-col items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={reviews}
                        direction="right"
                        speed="slow"
                    />
                    <InfiniteMovingCards
                        items={reviews}
                        direction="left"
                        speed="slow"
                        className="mt-4"
                    />
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
