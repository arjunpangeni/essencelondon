"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Features", href: "/features" },
  { title: "Services", href: "/servicesbook" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "FindUs", href: "/find-us" },
];

const Logo = memo(function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <div>
        <div className="h-full w-full rounded-full bg-white dark:bg-black flex items-center justify-center">
          <Image
            src="/essencelogo.png"
            alt="essence massage studio london logo"
            width={50}
            height={50}
            priority
          />
        </div>
      </div>

      {/* Brand Name */}
      <div className="flex flex-col">
        <span className="text-lg font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent leading-tight">
          Essence
        </span>
        <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
          Massage Studio London
        </span>
      </div>
    </div>
  );
});

const MobileLogo = memo(function MobileLogo() {
  return (
    <div className="flex items-center space-x-2">
      {/* Mobile Logo Image */}
      <div>
        <div className="h-full w-full rounded-full bg-white dark:bg-black flex items-center justify-center">
          <Image
            src="/essencelogo.png"
            alt="essence massage studio london logo"
            width={50}
            height={50}
            priority
          />
        </div>
      </div>

      {/* Simplified Mobile Brand Name */}
      <div className="flex flex-col">
        <span className="text-base font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent leading-tight">
          Essence
        </span>
        <span className="text-[10px] font-medium text-muted-foreground tracking-wide uppercase">
          Studio
        </span>
      </div>
    </div>
  );
});

const SiteHeader = memo(function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Desktop Logo */}
            <div className="hidden sm:block">
              <Logo />
            </div>
            {/* Mobile Logo */}
            <div className="block sm:hidden">
              <MobileLogo />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-md font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "bg-accent/80 text-accent-foreground backdrop-blur-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <MobileNav items={navItems} logo={<MobileLogo />} />
          </div>
        </div>
      </div>
    </header>
  );
});

export default SiteHeader;
