'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Input } from "@/components/ui/input";
import { DropdownNav } from "@/components/ui/dropdown-nav";

const navLinks = [
  {
    name: "Hostel Life",
    href: "/hostel-life",
    items: [
      { name: "Roommate Guide", href: "/hostel-life/roommate-guide", description: "Tips for peaceful coexistence" },
      { name: "DIY Meals", href: "/hostel-life/diy-meals", description: "Budget-friendly recipes" },
      { name: "Space Hacks", href: "/hostel-life/space-hacks", description: "Maximize your living space" }
    ]
  },
  {
    name: "Exam Hacks",
    href: "/exam-hacks",
    items: [
      { name: "Study Techniques", href: "/exam-hacks/study-techniques", description: "Effective learning methods" },
      { name: "Time Management", href: "/exam-hacks/time-management", description: "Balance study and life" },
      { name: "Exam Prep", href: "/exam-hacks/exam-prep", description: "Last-minute survival guide" }
    ]
  },
  {
    name: "Campus Survival",
    href: "/campus-survival",
    items: [
      { name: "Getting Started", href: "/campus-survival/getting-started", description: "First-year essentials" },
      { name: "Budget Guide", href: "/campus-survival/budget-guide", description: "Money-saving tips" },
      { name: "Mental Health", href: "/campus-survival/mental-health", description: "Stay sane and thrive" }
    ]
  },
  { name: "Dark Vibes", href: "/dark-vibes" },
  { name: "Meme Dump", href: "/meme-dump" },
  { name: "Marketplace", href: "/marketplace" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 glass-panel">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
            <span className="title-font text-3xl neon-text font-bold tracking-tight animate-gradient">College Survivor</span>
          </Link>
          <ThemeToggle />
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search survival tips..."
              className="w-[240px] pl-8 transition-all duration-300 focus:w-[280px] bg-muted/50 border-secondary/30 focus:border-secondary/60 focus:ring-secondary/30"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <DropdownNav key={link.name} item={link} />
            ))}
          </nav>
        </div>
        
        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="space-y-6">
              <div className="relative mt-8">
                <Input
                  type="search"
                  placeholder="Search survival tips..."
                  className="w-full pl-8"
                />
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
              <nav className="flex flex-col space-y-2">
                <h2 className="text-lg font-bold mb-4 neon-text-pink">Don&apos;t Get Lost</h2>
                {navLinks.map((link) => (
                  <div key={link.name} className="space-y-3">
                    <Link
                      href={link.href}
                      className="block text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-300 px-4 py-2 rounded-md hover:bg-accent/20"
                    >
                      {link.name}
                    </Link>
                    {link.items && (
                      <div className="ml-4 space-y-1 border-l pl-4 border-border/40">
                        {link.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300 py-1.5 px-4 rounded-md hover:bg-accent/20"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}