import { Card } from "@/components/ui/card";
import Link from "next/link";

const examContent = [
  {
    title: "Last-Minute Cramming: How to Fit an Entire Semester in 24 Hours",
    href: "/exam-hacks/last-minute-cramming"
  },
  {
    title: "The Art of BS: When You Don't Know, Just Sound Confident",
    href: "/exam-hacks/art-of-bs"
  },
  {
    title: "Negotiating with Professors: From Begging to Bribing",
    href: "/exam-hacks/professor-negotiation"
  },
  {
    title: "Memory Palace: Your Brain Won't Remember, But Your Notes Will",
    href: "/exam-hacks/memory-techniques"
  }
];

export default function ExamHacksPage() {
  return (
    <div className="container py-12 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 neon-text-pink title-font">
          Exam Hacks: Survive or Die
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Because who needs sleep when you can stress-cry into your textbooks instead?
        </p>
      </div>
      
      <div className="grid gap-6 mt-10">
        {examContent.map((content, index) => (
          <Link href={content.href} key={index}>
            <Card className="p-6 hover:bg-muted transition-colors">
              <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
              <p className="text-sm text-muted-foreground">Click for questionable survival strategies</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
} 