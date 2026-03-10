"use client";
import React from "react";
import { ExternalLink, ChevronDown, LogInIcon, LayoutDashboard, LogOut } from "lucide-react";
import {
  LoginLink,
  RegisterLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavBar = () => {
  const { user, isAuthenticated } = useKindeBrowserClient();
  const isAuth = isAuthenticated;

  return (
    <div className="shadow-sm w-full sticky top-0 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 z-[9999] border-b border-gray-200 dark:border-gray-800">
      <div className="w-full mx-auto max-w-7xl p-3 px-5 flex items-center justify-between relative">
        <div className="flex items-center">
          <Logo url="/" />
        </div>

        <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-gray-700 dark:text-gray-200">
            <li className="hover:text-primary transition-colors cursor-pointer">
              <Link href="#features">AI Features</Link>
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              <Link href="#how-it-works">How It Works</Link>
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              <Link href="#reviews">Reviews</Link>
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              <Link href="#faq">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          {isAuth ? (
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" size="sm" className="hidden sm:flex border-primary/20 hover:border-primary/50 text-primary">
                <Link href="/dashboard" className="flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div
                    role="button"
                    className="flex items-center gap-2 group outline-none"
                  >
                    <Avatar className="h-9 w-9 shrink-0 border-2 border-primary group-hover:opacity-90 transition-opacity">
                      <AvatarImage
                        src={user?.picture || ""}
                        alt={user?.given_name || ""}
                      />
                      <AvatarFallback className="bg-primary text-white">
                        {user?.given_name?.charAt(0)}
                        {user?.family_name?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <ChevronDown className="hidden sm:block size-4 text-gray-500 group-hover:text-primary transition-colors" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-2" align="end">
                  <div className="flex items-center gap-2 p-2 border-b border-gray-100 dark:border-gray-800 mb-1 lg:hidden">
                    <Avatar className="h-8 w-8">
                       <AvatarImage src={user?.picture || ""} />
                       <AvatarFallback className="bg-primary text-white text-xs">
                          {user?.given_name?.charAt(0)}
                       </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col space-y-0.5">
                       <p className="text-sm font-medium leading-none">{user?.given_name}</p>
                       <p className="text-xs text-muted-foreground truncate max-w-[150px]">{user?.email}</p>
                    </div>
                  </div>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="flex items-center gap-2 cursor-pointer">
                      <LayoutDashboard className="w-4 h-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="text-rose-600 focus:text-rose-600 focus:bg-rose-50">
                    <LogoutLink className="flex items-center gap-2 cursor-pointer w-full">
                      <LogOut className="w-4 h-4" />
                      Logout
                    </LogoutLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <LoginLink>
                <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary hidden sm:flex">
                  Sign In
                </Button>
              </LoginLink>
              <RegisterLink>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all">
                  Get Started
                </Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
