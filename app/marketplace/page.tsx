import { CampusMarketplace } from "@/components/features/CampusMarketplace";

export default function MarketplacePage() {
  return (
    <main className="container max-w-6xl py-12 space-y-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-20 right-0 w-56 h-56 bg-secondary/20 rounded-full blur-3xl -z-10 animate-delayed-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      
      {/* Animated grid background */}
      <div 
        className="absolute inset-0 -z-20 opacity-10 bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)]" 
        style={{ backgroundSize: '40px 40px' }}
      ></div>
      
      <div className="relative space-y-4 animate-in slide-in-from-left duration-700">
        <div className="w-20 h-1 bg-primary rounded mb-6 animate-shimmer"></div>
        
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl neon-text">
          Campus Marketplace
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Buy, sell, and trade with fellow HNBGU students – find what you need or make some extra cash
        </p>
      </div>
      
      <div className="glass-panel p-6 animate-in fade-in-50 duration-500 delay-300">
        <CampusMarketplace />
      </div>
    </main>
  );
} 