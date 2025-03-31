"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Home, BarChart3, PiggyBank, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <div className="flex flex-col gap-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold"
            onClick={() => setOpen(false)}
          >
            <BarChart3 className="h-6 w-6 text-[#0078ff]" />
            <span>WealthWise</span>
          </Link>
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-[#0078ff]"
              onClick={() => setOpen(false)}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/investments"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-[#0078ff]"
              onClick={() => setOpen(false)}
            >
              <BarChart3 className="h-4 w-4" />
              Investments
            </Link>
            <Link
              href="/savings"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-[#0078ff]"
              onClick={() => setOpen(false)}
            >
              <PiggyBank className="h-4 w-4" />
              Savings
            </Link>
            <Link
              href="/profile"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-[#0078ff]"
              onClick={() => setOpen(false)}
            >
              <User className="h-4 w-4" />
              Profile
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
