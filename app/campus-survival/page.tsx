import { Card } from "@/components/ui/card";
import Link from "next/link";

const campusContent = [
  {
    title: "Library Hacks: Finding That Corner Nobody Knows About",
    href: "/campus-survival/library-hacks"
  },
  {
    title: "Canteen Food Roulette: What's Safe and What Will Kill You",
    href: "/campus-survival/canteen-food"
  },
  {
    title: "Politics 101: Surviving Student Council Elections Without Crying",
    href: "/campus-survival/student-politics"
  },
  {
    title: "Secret Spots: Where to Nap Between Classes Without Getting Caught",
    href: "/campus-survival/nap-spots"
  }
];

export default function CampusSurvivalPage() {
  return (
    <div className="container py-12 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 neon-text title-font">
          Campus Survival: The Concrete Jungle
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Navigate the chaos and find your way without getting trampled in the rush to the canteen.
        </p>
      </div>
      
      <div className="grid gap-6 mt-10">
        {campusContent.map((content, index) => (
          <Link href={content.href} key={index}>
            <Card className="p-6 hover:bg-muted transition-colors">
              <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
              <p className="text-sm text-muted-foreground">Click for navigation assistance</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
} 