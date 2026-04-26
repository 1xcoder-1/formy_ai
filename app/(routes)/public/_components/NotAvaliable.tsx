import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";
import React from "react";

const NotAvaliable = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative bg-gray-50/30 dark:bg-gray-900/20 p-6 select-none font-mono">
      
      {/* Content wrapper vertically centered */}
      <div className="flex flex-col items-center text-center space-y-6 max-w-sm mb-12">
        <div className="text-primary bg-primary/10 p-5 rounded-full animate-pulse duration-3000">
          <Frown size="60px" />
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
          This Form is no longer available
        </h2>
        
        <Button className="w-full max-w-xs h-11 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-sm transition-colors">
          Learn more
        </Button>
      </div>

      {/* Bottom Footer firmly anchored */}
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
          Company by
        </p>
        <h5 className="font-black text-[20px] text-primary tracking-wide">
          Formy.ai
        </h5>
      </div>
      
    </div>
  );
};

export default NotAvaliable;
