import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const teasers = [
  {
    title: "Hostel Life: Don't Kill Your Roomie (Yet)",
    href: "/hostel-life",
    color: "neon-box"
  },
  {
    title: "Exams: Cheat Codes or Bust",
    href: "/exam-hacks",
    color: "neon-box-pink"
  },
  {
    title: "Campus 101: Where TF Is the Canteen?",
    href: "/campus-survival",
    color: "neon-box"
  },
  {
    title: "Sanity: Dark Humor Is Your Therapy",
    href: "/dark-vibes",
    color: "neon-box-pink"
  },
  {
    title: "Marketplace: Buy Low, Sell High",
    href: "/marketplace",
    color: "neon-box"
  }
];

export function FeaturedTeasers() {
  return (
    <section id="featured" className="py-16 bg-muted">
      <h2 className="text-3xl font-bold text-center mb-10 neon-text title-font">Survive Or Die Trying</h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teasers.map((teaser, index) => (
          <Link href={teaser.href} key={index} className="transform hover:scale-105 transition-transform duration-300">
            <Card className={`h-full ${index % 2 === 0 ? 'neon-box' : 'shadow-[0_0_5px_hsl(var(--secondary)),0_0_15px_hsl(var(--secondary))]'} overflow-hidden`}>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold">
                  {teaser.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Click to unlock the chaos
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
} 