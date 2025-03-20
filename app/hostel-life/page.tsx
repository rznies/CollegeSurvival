import { Card } from "@/components/ui/card";
import Link from "next/link";

const hostelContent = [
  {
    title: "How to Not Punch Your Roommate When They Snore Like a Buffalo",
    href: "/hostel-life/roommate-survival"
  },
  {
    title: "Budget Hacks: Maggi Is Your Soulmate, Deal With It",
    href: "/hostel-life/budget-food"
  },
  {
    title: "Mental Health: Cry in the Shower, It's Free Therapy",
    href: "/hostel-life/mental-health"
  },
  {
    title: "Event Radar: Where's the Next Free Food Fest?",
    href: "/hostel-life/free-food"
  }
];

export default function HostelLifePage() {
  return (
    <div className="container py-12 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 neon-text title-font">
          Hostel Life: Barely Surviving
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Living with strangers in a box while slowly losing your sanity. Welcome to adult life.
        </p>
      </div>
      
      <div className="grid gap-6 mt-10">
        {hostelContent.map((content, index) => (
          <Link href={content.href} key={index}>
            <Card className="p-6 hover:bg-muted transition-colors">
              <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
              <p className="text-sm text-muted-foreground">Click for more chaotic wisdom</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
} 