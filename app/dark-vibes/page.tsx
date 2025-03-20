import { Card } from "@/components/ui/card";
import Link from "next/link";

const darkContent = [
  {
    title: "Existential Crisis: Is Your Degree Even Worth It?",
    href: "/dark-vibes/existential-crisis"
  },
  {
    title: "Future Anxiety: When Everyone Has a Plan Except You",
    href: "/dark-vibes/future-anxiety"
  },
  {
    title: "Dark Humor: Coping With College Through Morbid Jokes",
    href: "/dark-vibes/dark-humor"
  },
  {
    title: "Burnout Chronicles: When Your Soul Leaves Your Body",
    href: "/dark-vibes/burnout"
  }
];

export default function DarkVibesPage() {
  return (
    <div className="container py-12 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 neon-text-pink title-font">
          Dark Vibes: The Shadow Side
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          When the existential dread hits at 3 AM and you're still writing that assignment.
        </p>
      </div>
      
      <div className="grid gap-6 mt-10">
        {darkContent.map((content, index) => (
          <Link href={content.href} key={index}>
            <Card className="p-6 hover:bg-muted transition-colors">
              <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
              <p className="text-sm text-muted-foreground">Click for therapeutic validation</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
} 