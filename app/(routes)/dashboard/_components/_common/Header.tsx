"use client";
import React from "react";
import Link from "next/link";
import {
  useKindeBrowserClient,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs";
import { useParams, usePathname } from "next/navigation";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, LogInIcon } from "lucide-react";

const Header = () => {
  const { user } = useKindeBrowserClient();

  const pathname = usePathname();
  const { formId } = useParams();

  const NAV_MENUS = [
    {
      name: "Home",
      pathname: "/",
      isDisabled: false,
    },
    {
      name: "Dashboard",
      pathname: "/dashboard",
      isDisabled: false,
    },
    {
      name: "Builder",
      pathname: `/dashboard/form/builder/${formId}`,
      isDisabled: !formId,
    },
    {
      name: "Responds",
      pathname: `/dashboard/form/responds/${formId}`,
      isDisabled: !formId,
    },
    {
      name: "Settings",
      pathname: `/dashboard/form/settings/${formId}`,
      isDisabled: !formId,
    },
  ];

  return (
    <div className="shadow-sm w-full sticky top-0 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 z-[9999] border-b border-gray-200 dark:border-gray-800">
      <div className="w-full mx-auto max-w-7xl p-3 px-5 flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <Logo url="/" />
        </div>

        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-gray-700 dark:text-gray-200">
            {NAV_MENUS.map((item, idx) => (
              <li
                key={idx}
                className={cn(
                  "hover:text-primary transition-colors cursor-pointer",
                  {
                    "opacity-50 pointer-events-none": item.isDisabled,
                    "text-primary font-semibold": pathname === item.pathname,
                  }
                )}
              >
                <Link href={item.pathname}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex items-center justify-end gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                role="button"
                className="flex items-center gap-2 group outline-none"
              >
                <Avatar className="h-9 w-9 bg-gray-200 shrink-0 border-2 border-primary group-hover:opacity-90 transition-opacity">
                  <AvatarImage
                    src={user?.picture || ""}
                    alt={user?.given_name || ""}
                  />
                  <AvatarFallback className="bg-primary text-white">
                    {user?.given_name?.charAt(0)}
                    {user?.family_name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden sm:flex flex-col text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-gray-900 dark:text-gray-100">
                    {user?.given_name} {user?.family_name}
                  </span>
                  <p className="truncate block w-full max-w-[150px] text-xs text-gray-500 dark:text-gray-400">
                    {user?.email}
                  </p>
                </div>
                <ChevronDown className="hidden sm:block ml-auto size-4 text-gray-500 group-hover:text-primary transition-colors" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-2" align="end">
              <DropdownMenuItem asChild>
                <LogoutLink className="flex items-center gap-2 text-rose-600 focus:text-rose-600 focus:bg-rose-50 cursor-pointer w-full">
                  <LogInIcon className="w-4 h-4" />
                  Logout
                </LogoutLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;

