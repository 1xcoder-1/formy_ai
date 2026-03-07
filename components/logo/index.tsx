import Link from "next/link";
import React from "react";

const Logo = (props: { url?: string; color?: string }) => {
  const { url = "/" } = props;
  return (
    <div className="flex items-center justify-center sm:justify-start">
      <Link href={url} className="flex items-center gap-2 group">
        <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105 group-hover:-rotate-3">
          <span className="text-white font-bold text-xl font-sans">F</span>
        </div>
        <h5 className="font-sans font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
          Formy
        </h5>
      </Link>
    </div>
  );
};

export default Logo;
