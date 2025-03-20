import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="title-font text-lg neon-text">College Survivor</span>
          <p className="text-sm text-muted-foreground mt-1">
            Unhinged guide for Indian students
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
          <p>© {new Date().getFullYear()} College Survivor</p>
        </div>
      </div>
    </footer>
  );
} 