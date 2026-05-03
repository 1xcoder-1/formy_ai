import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const FormSkeleton = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full relative flex items-center justify-center overflow-hidden h-[200px] rounded-t-2xl border border-gray-100 bg-gray-50/50 shadow-sm">
        <div className="w-44 absolute bottom-0 flex items-center flex-col px-4 pt-6 h-40 rounded-t-2xl bg-white shadow-lg border border-gray-100/50">
          <Skeleton className="w-full h-2 rounded-full mb-3 bg-gray-100" />
          {[0, 1, 2].map((item) => (
            <div key={item} className="flex items-center gap-2 mb-3 w-full">
              <Skeleton className="h-4 w-4 rounded-full shrink-0 bg-gray-100" />
              <Skeleton className="h-[12px] flex-1 bg-gray-100" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full py-3 px-1">
        <div className="flex w-full items-center justify-between mb-4">
          <Skeleton className="h-6 w-3/4 rounded-lg bg-gray-100" />
          <Skeleton className="h-8 w-8 rounded-full bg-gray-100" />
        </div>
        <div className="flex w-full border-t border-gray-100 items-center justify-between pt-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-12 rounded bg-gray-100" />
            <Skeleton className="h-4 w-12 rounded bg-gray-100" />
          </div>
          <Skeleton className="h-3 w-20 rounded bg-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default FormSkeleton;
