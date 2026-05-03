import Link from "next/link";
import Image from "next/image";

const Logo = (props: { url?: string; color?: string }) => {
  const { url = "/" } = props;
  return (
    <div className="flex items-center justify-center sm:justify-start">
      <Link href={url} className="flex items-center gap-2 group">
        <div className="relative h-10 w-10 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
          <Image
            src="/images/logo.png"
            alt="Formy Logo"
            fill
            className="object-contain"
          />
        </div>
        <h5 className="font-bold text-2xl tracking-tight text-foreground group-hover:text-primary transition-colors bg-clip-text">
          Formy
        </h5>
      </Link>
    </div>
  );
};

export default Logo;
