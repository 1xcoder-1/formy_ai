import React from "react";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import BuilderSidebar from "./BuilderSidebar";
import { defaultBackgroundColor } from "@/constant";
import BuilderCanvas from "./BuilderCanvas";
import BuilderBlockProperties from "./BuilderBlockProperties";
import FloatingShareButton from "./_common/FloatingShareButton";
import { useBuilder } from "@/context/builder-provider";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import PreviewDialog from "./_common/PreviewDialog";
import SaveFormBtn from "./_common/SaveFormBtn";
import PublishFormBtn from "./_common/PublishFormBtn";

const Builder = (props: { isSidebarOpen: boolean }) => {
  const { formData } = useBuilder();
  const isMobile = useIsMobile();
  const backgroundColor =
    formData?.settings?.backgroundColor || defaultBackgroundColor;

  return (
    <div className="flex h-[calc(100vh-64px)] w-full overflow-hidden">
      <BuilderSidebar />
      <SidebarInset className="!p-0 flex-1 relative overflow-hidden flex flex-col">
        <div className={cn(
          "sticky top-0 z-30 flex items-center justify-between p-2 px-4 gap-2 border-b transition-all",
          isMobile ? "bg-white/90 backdrop-blur-md" : "bg-white/50 backdrop-blur-sm"
        )}>
          <div className="flex items-center gap-2">
            <SidebarTrigger className="static" />
          </div>

          {/* Shown only on mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <PreviewDialog />
            <SaveFormBtn />
            <PublishFormBtn />
          </div>
        </div>

        <div
          className="w-full flex-1 overflow-y-auto"
          style={{
            backgroundColor: backgroundColor,
          }}
        >
          <BuilderCanvas />
          <FloatingShareButton isSidebarOpen={props.isSidebarOpen} />
        </div>
      </SidebarInset>
      <BuilderBlockProperties />
    </div>
  );
};

export default Builder;
