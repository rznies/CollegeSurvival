import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img src="/hero-bg.svg" alt="Cyberpunk Campus" className="w-full h-full object-cover opacity-50" />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <h1 className="title-font text-4xl md:text-5xl lg:text-6xl font-bold neon-text unhinged animate-pulse-glow">
            College: Survive the Shitshow, Win at Life
          </h1>
          <p className="max-w-[600px] text-xl md:text-2xl text-[#E0E0E0] animate-fade-in">
            Unfiltered hacks, dark laughs, and zero bakwas for Indian students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="text-lg hover:scale-105 transition-transform duration-200 hover:animate-pulse-glow"
            >
              <Link href="#featured">Dive into the Chaos</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg hover:scale-105 transition-transform duration-200 hover:bg-primary/20"
            >
              <Link href="#quiz">Take the Quiz</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}