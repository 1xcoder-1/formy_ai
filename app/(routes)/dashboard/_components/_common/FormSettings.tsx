"use client";
import React, { useState } from "react";
import { useBuilder } from "@/context/builder-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateFormSettings } from "@/actions/form.action";
import { toast } from "@/hooks/use-toast";
import { Check, ImagePlus, Loader2, RotateCcw } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const DEFAULT_BANNER = "/images/form-bg.jpg";

const PRESET_BANNERS = [
  { name: "Default", url: "/images/form-bg.jpg" },
  { name: "Abstract Blue", url: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&h=300&auto=format&fit=crop" },
  { name: "Nature Green", url: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&h=300&auto=format&fit=crop" },
  { name: "Vibrant Purple", url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&h=300&auto=format&fit=crop" },
  { name: "Soft Pink", url: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=1200&h=300&auto=format&fit=crop" },
];

const FormSettings = () => {
  const { formData, updateSettings } = useBuilder();
  const [loading, setLoading] = useState(false);
  const [customUrl, setCustomUrl] = useState("");

  const currentBanner = (formData?.settings as any)?.bannerImage || DEFAULT_BANNER;

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    try {
      const formDataUpload = new FormData();
      formDataUpload.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formDataUpload,
      });

      const data = await response.json();

      if (data.success) {
        await handleUpdateBanner(data.imageUrl);
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to upload image",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong during upload",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateBanner = async (url: string | null) => {
    if (!formData?.formId) return;

    setLoading(true);
    try {
      const response = await updateFormSettings({
        formId: formData.formId,
        bannerImage: url || "",
      });

      if (response.success) {
        updateSettings({ bannerImage: url });
        toast({
          title: "Success",
          description: "Form banner updated successfully",
        });
      } else {
        toast({
          title: "Error",
          description: response.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-gray-900">Form Header Banner</h4>
        <p className="text-xs text-gray-500">Pick a style for your form header</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {PRESET_BANNERS.map((banner) => (
          <div
            key={banner.url}
            className={cn(
              "group relative h-20 w-full rounded-lg overflow-hidden border-2 cursor-pointer transition-all",
              currentBanner === banner.url ? "border-primary ring-2 ring-primary/20" : "border-gray-100 hover:border-primary/50"
            )}
            onClick={() => handleUpdateBanner(banner.url)}
          >
            <img
              src={banner.url}
              alt={banner.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-xs font-medium">{banner.name}</span>
            </div>
            {currentBanner === banner.url && (
              <div className="absolute top-1 right-1 bg-primary text-white p-0.5 rounded-full">
                <Check className="w-3 h-3" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-gray-100">
        <Label htmlFor="custom-url" className="text-xs font-medium mb-2 block">
          Custom Image URL
        </Label>
        <div className="flex gap-2">
          <Input
            id="custom-url"
            placeholder="https://..."
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            className="text-xs h-8"
          />
          <Button
            size="sm"
            className="h-8"
            disabled={!customUrl || loading}
            onClick={() => handleUpdateBanner(customUrl)}
          >
            {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : "Apply"}
          </Button>
        </div>
      </div>

      <div className="space-y-3 pt-2 border-t border-gray-100">
        <Label className="text-xs font-medium block">
          Local Upload
        </Label>
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="banner-upload"
            onChange={handleFileUpload}
            disabled={loading}
          />
          <Label
            htmlFor="banner-upload"
            className={cn(
              "flex flex-col items-center justify-center w-full h-24 border-2 border-dashed rounded-lg cursor-pointer transition-all bg-gray-50/50 hover:bg-gray-50",
              loading ? "opacity-50 pointer-events-none" : "border-gray-200 hover:border-primary/50 hover:text-primary"
            )}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin mb-2" />
              ) : (
                <ImagePlus className="w-6 h-6 mb-2" />
              )}
              <p className="text-xs font-medium">Upload from computer</p>
              <p className="text-[10px] text-gray-400 mt-1">PNG, JPG up to 5MB</p>
            </div>
          </Label>
        </div>
      </div>

      <Button
        variant="ghost"
        size="sm"
        className="text-gray-500 hover:text-primary gap-2 mt-2"
        onClick={() => handleUpdateBanner(DEFAULT_BANNER)}
        disabled={loading}
      >
        <RotateCcw className="w-3 h-3" />
        Reset to Default
      </Button>
    </div>
  );
};

export default FormSettings;
