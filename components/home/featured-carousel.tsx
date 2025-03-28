'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const featuredTips = [
  {
    title: 'First Week Survival Kit',
    description: 'Essential packing list + pro tips to avoid homesickness (spoiler: it involves lots of comfort food)',
    category: 'Getting Started',
    href: '/campus-survival/getting-started'
  },
  {
    title: 'Hostel Life Decoded',
    description: 'From dealing with midnight maggi cravings to becoming the master of jugaad repairs',
    category: 'Hostel Life',
    href: '/hostel-life/roommate-guide'
  },
  {
    title: 'Exam Week Battle Plan',
    description: 'How to turn from "I\'m doomed" to "I got this" in 7 days (energy drinks optional)',
    category: 'Exam Hacks',
    href: '/exam-hacks/exam-prep'
  },
  {
    title: 'Budget Ninja Techniques',
    description: 'Because "broke college student" doesn\'t have to be your permanent bio',
    category: 'Campus Survival',
    href: '/campus-survival/budget-guide'
  },
  {
    title: 'Mental Health Toolkit',
    description: 'Stay sane with our guide to handling everything from assignment stress to mess food trauma',
    category: 'Campus Survival',
    href: '/campus-survival/mental-health'
  }
];

export function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredTips.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredTips.length) % featuredTips.length);
  };

  return (
    <div className="relative overflow-hidden py-12 glass-panel">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 neon-text title-font animate-gradient">Top Survival Tips</h2>
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {featuredTips.map((tip, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <Card className="h-full glass-panel gradient-border overflow-hidden hover:scale-[1.03] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-sm font-medium text-accent mb-3 animate-shimmer">{tip.category}</div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">{tip.title}</h3>
                    <p className="text-muted-foreground mb-6">{tip.description}</p>
                    <Button asChild variant="secondary" className="hover:bg-secondary/20 hover:text-primary transition-colors duration-300">
                      <a href={tip.href}>Learn More</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hover:bg-accent/20 hover:text-primary transition-colors duration-300"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hover:bg-accent/20 hover:text-primary transition-colors duration-300"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}