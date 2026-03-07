import React from "react";
import { ExternalLink } from "lucide-react";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const NavBar = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isAuth = await isAuthenticated();

  return (
    <div className="shadow-sm w-full sticky top-0 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 z-[9999] border-b border-gray-200 dark:border-gray-800">
      <div className="w-full mx-auto max-w-7xl p-3 px-5 flex items-center justify-between relative">
        <div className="flex items-center">
          <Logo url="/" />
        </div>

        <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-gray-700 dark:text-gray-200">
            <li className="hover:text-primary transition-colors cursor-pointer">
              <Link href="#">AI Features</Link>
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              <Link href="#">How It Works</Link>
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              <Link href="#">Pricing</Link>
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              <Link href="#">Resources</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          {isAuth ? (
            <div className="flex items-center gap-4">
              <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              {user?.picture ? (
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                  <img src={user.picture} alt="Profile" className="object-cover w-full h-full" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {user?.given_name?.[0]}
                </div>
              )}
            </div>
          ) : (
            <>
              <LoginLink>
                <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary">
                  Sign In
                </Button>
              </LoginLink>
              <RegisterLink>
                <Button className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all">Get Started</Button>
              </RegisterLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
