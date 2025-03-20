import { Hero } from "@/components/home/hero";
import { FeaturedTeasers } from "@/components/home/featured-teasers";
import { SurvivalQuiz } from "@/components/interactive/survival-quiz";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedTeasers />
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 neon-text-pink title-font">
              Discover Your College Persona
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Take this savage quiz to find out if you're a Hostel Demon, Exam Zombie, 
              or something equally concerning.
            </p>
          </div>
          <SurvivalQuiz />
        </div>
      </section>
    </>
  );
} 