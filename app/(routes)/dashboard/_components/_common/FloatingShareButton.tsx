"use client";
import React from "react";
import { useBuilder } from "@/context/builder-provider";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const FloatingShareButton = (props: { isSidebarOpen: boolean }) => {
  const { isSidebarOpen } = props;
  const { formData } = useBuilder();
  const isMobile = useIsMobile();

  const copyLinkToClipboard = () => {
    const shareableLink = `${process.env.NEXT_PUBLIC_APP_URL}/public/submit-form/${formData?.formId}`;
    navigator.clipboard
      .writeText(shareableLink)
      .then(() => {
        toast({
          title: "Link Copied!",
          description: "The shareable link has been copied to your clipboard.",
        });
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to copy the link. Please try again.",
          variant: "destructive",
        });
      });
  };

  if (!formData?.published) return;

  return (
    <div
      className={cn(
        "fixed bottom-20 sm:bottom-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        {
          "ml-[150px]": isSidebarOpen && !isMobile,
          "ml-[-160px]": !isSidebarOpen && !isMobile,
        }
      )}
    >
      <Button
        onClick={copyLinkToClipboard}
        variant="outline"
        size="lg"
        className="rounded-full !bg-primary !text-white p-6 py-8 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        aria-label="Copy Shareable Link"
      >
        <Copy className="w-5 h-5 mr-1" />
        <span className="sm:inline hidden font-semibold">Shareable Link</span>
        <span className="sm:hidden inline font-semibold">Share Link</span>
      </Button>
    </div>
  );
};

export default FloatingShareButton;
