import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Hostel Life", href: "/hostel-life" },
  { name: "Exam Hacks", href: "/exam-hacks" },
  { name: "Campus Survival", href: "/campus-survival" },
  { name: "Dark Vibes", href: "/dark-vibes" },
  { name: "Meme Dump", href: "/meme-dump" },
  { name: "Marketplace", href: "/marketplace" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="title-font text-2xl neon-text">College Survivor</span>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <h2 className="text-lg font-bold mb-2 neon-text-pink">Don&apos;t Get Lost</h2>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
} 