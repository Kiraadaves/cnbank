"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Home,
  BarChart3,
  PiggyBank,
  User,
  TrendingUp,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: "/dashboard", text: "Dashboard", icon: Home },
    { href: "/investments", text: "Investments", icon: BarChart3 },
    { href: "/savings", text: "Savings", icon: PiggyBank },
    { href: "/profile", text: "Profile", icon: User },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };
  const handleLogout = () => {
    localStorage.removeItem("userData");
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 flex h-16 md:h-24 items-center gap-4 border-b bg-gradient-to-r from-[#00a3ff] to-[#0078ff] text-white  px-4 md:px-16">
      <Link
        href="/dashboard"
        className=" flex items-center gap-2 font-semibold text-white"
      >
        <TrendingUp className="md:h-12 md:w-12 h-8 w-8 text-white" />
        <span className="md:text-3xl font-bold text-lg">CNSave</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="ml-auto hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-lg transition-colors hover:text-white font-bold ${
              isActive(link.href) ? "text-white" : "text-white/70"
            }`}
          >
            {link.text}
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className="bg-[#ffffff] p-3 text-[#0078ff] rounded-[8px] text-lg font-bold"
        >
          Sign Out
        </button>
      </nav>

      {/* Mobile Navigation Button */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild className="md:hidden ml-auto">
          <Button variant="ghost" size="icon">
            <Menu className="h-8 w-8" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px] pl-6">
          <SheetHeader>
            <SheetTitle className="sr-only">CNSave Navigation</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-6 py-4">
            {/* Mobile Logo */}
            <Link
              href="/dashboard"
              className="flex items-center gap-2 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              <TrendingUp className="h-6 w-6 text-[#0078ff]" />
              <span className="text-[#0078ff] text-lg font-bold">CNSave</span>
            </Link>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-[#0078ff]"
                      : "text-muted-foreground hover:text-[#0078ff]"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  <link.icon className="h-5 w-5" />
                  {link.text}
                </Link>
              ))}
              <div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 text-base font-medium text-muted-foreground"
                >
                  <LogOut className="h-5 w-5" />
                  Sign Out
                </button>
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
