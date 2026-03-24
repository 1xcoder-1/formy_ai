"use client";
import React, { useEffect, useState } from "react";
import { useBuilder } from "@/context/builder-provider";
import { MousePointerClickIcon, Settings2, Trash2 } from "lucide-react";
import { FormBlocks } from "@/lib/form-blocks";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import PreviewDialog from "./_common/PreviewDialog";
import SaveFormBtn from "./_common/SaveFormBtn";
import PublishFormBtn from "./_common/PublishFormBtn";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const BuilderBlockProperties = () => {
  const { selectedBlockLayout, handleSeletedLayout, removeBlockLayout } =
    useBuilder();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selectedBlockLayout && isMobile) {
      setIsOpen(true);
    }
  }, [selectedBlockLayout, isMobile]);

  const LayoutPropertyBlock =
    selectedBlockLayout &&
    FormBlocks[selectedBlockLayout.blockType]?.propertiesComponent;

  const content = (
    <div
      className={cn(
        "flex flex-col w-full items-center h-auto min-h-full pb-32 mt-1",
        {
          "scrollbar overflow-auto": !isMobile,
        }
      )}
    >
      {/* Buttons shown only on desktop sidebar */}
      <div
        className="hidden md:flex 
            flex-row items-center
            bg-white pb-2 pt-3 sticky border-b
            border-gray-200 top-0 gap-2 px-2 z-10 w-full"
      >
        <PreviewDialog />
        <SaveFormBtn />
        <PublishFormBtn />
      </div>

      {/* {Layout Property} */}
      {!selectedBlockLayout ? (
        <div
          className="text-gray-400 gap-1
             text-center text-[15px] w-full flex flex-col
             items-center
             justify-center flex-1 h-auto py-10
            "
        >
          <MousePointerClickIcon />
          <p>Click the layout to modify block</p>
        </div>
      ) : (
        <div className="w-full pt-1">
          <div
            className="px-2 pt-3 pb-3 border-b
                border-gray-200
                "
          >
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-left font-medium text-sm">
                Layout Block Properties
              </h5>
              <Button
                variant="ghost"
                size="icon"
                className="text-rose-500 hover:text-rose-600 hover:bg-rose-50 h-8 w-8"
                onClick={() => {
                  removeBlockLayout(selectedBlockLayout.id);
                  if (isMobile) setIsOpen(false);
                }}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            {LayoutPropertyBlock && (
              <LayoutPropertyBlock blockInstance={selectedBlockLayout} />
            )}
          </div>
        </div>
      )}
    </div>
  );

  if (isMobile) {
    return (
      <Sheet
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) handleSeletedLayout(null);
        }}
      >
        <SheetContent side="right" className="w-[90%] sm:w-[400px] p-0">
          <SheetHeader className="px-4 py-2 border-b">
            <SheetTitle className="text-sm font-medium flex items-center gap-2">
              <Settings2 className="w-4 h-4" />
              Properties
            </SheetTitle>
          </SheetHeader>
          <div className="h-full overflow-y-auto">{content}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="relative w-[320px] hidden md:block">
      <div
        className="fixed right-0 w-[320px]
      bg-white border-l shadow-sm
      h-[calc(100vh-64px)] mt-0 scrollbar overflow-auto
      "
      >
        {content}
      </div>
    </div>
  );
};

export default BuilderBlockProperties;
