"use client";
import React from "react";
import BuilderContextProvider from "@/context/builder-provider";
import { useBuilder } from "@/context/builder-provider";
import FormSettingsDetailed from "../../../_components/_common/FormSettingsDetailed";
import { Loader, ChevronLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SettingsContent = () => {
  const { loading, formData } = useBuilder();

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
            <Loader size="3rem" className="animate-spin text-primary" />
            <p className="text-muted-foreground animate-pulse">Loading form settings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50/30 dark:bg-gray-950/30">
        <div className="max-w-5xl mx-auto px-6 py-12">
            {/* Breadcrumb / Back button */}
            <div className="mb-8">
                <Button variant="ghost" asChild className="pl-0 hover:bg-transparent -ml-2 text-muted-foreground hover:text-primary transition-colors">
                    <Link href={`/dashboard/form/builder/${formData?.formId}`} className="flex items-center gap-2">
                        <ChevronLeft size={18} />
                        Back to Builder
                    </Link>
                </Button>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-gray-100">
                        Form <span className="text-primary italic">Settings</span>
                    </h1>
                    <p className="text-lg text-muted-foreground mt-3 max-w-2xl">
                        Optimize your form&apos;s identity and appearance. Changes are applied instantly to your public form.
                    </p>
                </div>
                {/* Status Badge */}
                <div className={`px-4 py-2 rounded-full text-sm font-bold border ${formData?.published ? 'bg-green-100 text-green-700 border-green-200' : 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                    {formData?.published ? "Live & Published" : "Draft Mode"}
                </div>
            </div>
            
            <Separator className="bg-gray-200 dark:bg-gray-800 mb-12" />
            
            <div className="grid grid-cols-1 gap-12">
               <FormSettingsDetailed />
            </div>
        </div>
    </div>
  );
};

const Settings = ({ params }: { params: { formId: string } }) => {
  return (
    <BuilderContextProvider>
      <SettingsContent />
    </BuilderContextProvider>
  );
};

export default Settings;
