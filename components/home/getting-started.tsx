'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const startingGuides = [
  {
    title: 'First Week Survival',
    description: 'Essential tips to navigate your first week without losing your mind',
    href: '/campus-survival/getting-started/first-week',
    icon: '/icons/survival-kit.svg'
  },
  {
    title: 'Campus Navigation',
    description: 'Find your way around campus like a pro, not a lost puppy',
    href: '/campus-survival/getting-started/navigation',
    icon: '/icons/campus-nav.svg'
  },
  {
    title: 'Social Life 101',
    description: 'Make friends and connections without being awkward',
    href: '/campus-survival/getting-started/social',
    icon: '/icons/social-life.svg'
  },
  {
    title: 'Academic Basics',
    description: 'Get your academic game strong from day one',
    href: '/campus-survival/getting-started/academics',
    icon: '/icons/academic-basics.svg'
  }
];

export function GettingStarted() {
  return (
    <section className="py-16 bg-muted/30 glass-panel">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 neon-text title-font animate-gradient">Getting Started Guide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            New to college? Don't panic! Here's your roadmap to surviving your first year.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {startingGuides.map((guide, index) => (
            <Card key={index} className={`hover:scale-105 transition-all duration-300 glass-panel ${index % 2 === 0 ? 'neon-box' : 'gradient-border'} animate-fade-in animation-delay-${(index + 1) * 100}`}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={guide.icon}
                    alt={guide.title}
                    width={48}
                    height={48}
                    className="animate-pulse-glow"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">{guide.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#E0E0E0] text-lg mb-6">{guide.description}</p>
                <Button asChild variant="secondary" className="w-full hover:scale-105 hover:bg-secondary/20 hover:text-primary transition-all duration-300">
                  <Link href={guide.href}>Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}