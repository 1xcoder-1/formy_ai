"use client";

import HeroSection from "./_components/HeroSection";
import TrustedBy from "./_components/TrustedBy";
import FeaturesSection from "./_components/FeaturesSection";
import HowItWorks from "./_components/HowItWorks";
import ReviewsSection from "./_components/ReviewsSection";
import CallToAction from "./_components/CallToAction";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="w-full relative overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-[100px]" />
      </div>

      <HeroSection />
      <TrustedBy />
      <FeaturesSection />
      <HowItWorks />
      <ReviewsSection />
      <CallToAction />
      <Footer />
    </div>
  );
}
