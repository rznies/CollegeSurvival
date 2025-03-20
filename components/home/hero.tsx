import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 className="title-font text-4xl md:text-5xl lg:text-6xl font-bold neon-text unhinged">
            College: Survive the Shitshow, Win at Life
          </h1>
          <p className="max-w-[600px] text-xl md:text-2xl text-muted-foreground">
            Unfiltered hacks, dark laughs, and zero bakwas for Indian students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg">
              <Link href="#featured">Dive into the Chaos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 