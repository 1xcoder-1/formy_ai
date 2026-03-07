"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { X, ArrowLeft } from "lucide-react";
import { defaultBackgroundColor } from "@/constant";
import { useBuilder } from "@/context/builder-provider";
import { FormBlocks } from "@/lib/form-blocks";

const PreviewDialog = () => {
  const { blockLayouts, formData } = useBuilder();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="!text-primary
                          !bg-primary/10 !border-primary
                          "
        >
          <Eye className="w-4 h-4 mr-1" />
          Preview
        </Button>
      </DialogTrigger>
      <DialogContent
        className="fixed top-0 left-0 translate-x-0 translate-y-0 w-full h-full max-w-full max-h-full flex flex-col p-0 gap-0 border-none z-[9999]"
      >
        <div
          className="sticky top-0 w-full pt-4 px-6 pb-4 shadow-md bg-white flex flex-row items-center justify-between border-b z-[10000]"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xl font-medium text-gray-900 tracking-tight">Live Preview Mode</span>
          </div>
          <DialogClose asChild>
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 text-white transition-all gap-2 px-6 shadow-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider text-sm">Back to Builder</span>
            </Button>
          </DialogClose>
        </div>
        <div
          className="
                w-full h-full overflow-y-auto
                scrollbar transition-all duration-300
              "
          style={{
            backgroundColor: defaultBackgroundColor,
          }}
        >
          <div
            className="w-full h-full max-w-[650px] 
          mx-auto"
          >
            <div
              className="w-full relative
                    bg-transparent px-2 flex flex-col
                    items-center justify-start pt-1
                    pb-14
                    "
            >
              <div
                className="w-full mb-3
             bg-white border shadow-sm h-[135px] max-w-[768px]
          rounded-md px-1 overflow-hidden"
              >
                <img
                  src={
                    (formData?.settings as any)?.bannerImage ||
                    (formData?.settings as any)?.bannerimage ||
                    "/images/form-bg.jpg"
                  }
                  alt="Form Banner"
                  className="w-full h-full object-cover"
                />
              </div>

              {blockLayouts.length > 0 && (
                <div className="flex flex-col w-full gap-4">
                  {blockLayouts.map((block) => {
                    const FormBlockComponent =
                      FormBlocks[block.blockType].formComponent;
                    return (
                      <FormBlockComponent
                        key={block.id}
                        blockInstance={block}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDialog;
