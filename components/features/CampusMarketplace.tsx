'use client';

import { useState } from 'react';
import Fuse from 'fuse.js';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShoppingBag, Search, Filter, MessageSquare, Tag, MapPin, Clock, ChevronDown, Sparkles, Star } from 'lucide-react';

interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'books' | 'electronics' | 'furniture' | 'clothing' | 'other';
  condition: 'new' | 'like-new' | 'good' | 'fair';
  location: string;
  postedAt: string;
  seller: {
    name: string;
    contact: string;
    rating: number;
  };
  images: string[];
}

const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Data Structures Textbook',
    description: 'Complete DSA book with solved examples. Like new condition!',
    price: 500,
    category: 'books',
    condition: 'like-new',
    location: 'Boys Hostel Block A',
    postedAt: '2024-03-20',
    seller: {
      name: 'Rahul Kumar',
      contact: 'rahul.k@example.com',
      rating: 4.8
    },
    images: ['/images/dsa-book.jpg']
  },
  {
    id: '2',
    title: 'Study Table with Chair',
    description: 'Perfect for hostel room. Sturdy and comfortable.',
    price: 1500,
    category: 'furniture',
    condition: 'good',
    location: 'Girls Hostel Block B',
    postedAt: '2024-03-19',
    seller: {
      name: 'Priya Sharma',
      contact: 'priya.s@example.com',
      rating: 4.5
    },
    images: ['/images/study-table.jpg']
  }
];

const categoryIcons = {
  books: Tag,
  electronics: ShoppingBag,
  furniture: ShoppingBag,
  clothing: ShoppingBag,
  other: ShoppingBag
};

export function CampusMarketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showListingForm, setShowListingForm] = useState(false);
  const [newListing, setNewListing] = useState({
    title: '',
    description: '',
    price: '',
    category: 'books',
    condition: 'good',
    location: '',
    images: ''
  });

  const fuse = new Fuse(mockListings, {
    keys: ['title', 'description'],
    includeScore: true,
    threshold: 0.3,
    ignoreLocation: true
  });

  const filteredListings = searchQuery 
    ? fuse.search(searchQuery).map((result) => result.item) 
    : mockListings.filter((listing: Listing) => !selectedCategory || listing.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a database
    console.log('Submitting listing:', newListing);
    setShowListingForm(false);
    setNewListing({
      title: '',
      description: '',
      price: '',
      category: 'books',
      condition: 'good',
      location: '',
      images: ''
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <ShoppingBag className="h-6 w-6 text-primary animate-float" />
          <h2 className="text-2xl font-bold">Campus Marketplace</h2>
        </div>
        <Button
          onClick={() => setShowListingForm(!showListingForm)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:scale-105"
        >
          {showListingForm ? 'Cancel' : 'Create Listing'}
        </Button>
      </div>

      {showListingForm && (
        <Card className="glass-panel p-6 animate-in fade-in-50 slide-in-from-top-5 duration-300">
          <h3 className="text-xl font-semibold mb-4 text-primary">Create New Listing</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Title</label>
                  <Input
                    placeholder="What are you selling?"
                    value={newListing.title}
                    onChange={(e) => setNewListing({ ...newListing, title: e.target.value })}
                    className="bg-background/60 border-border/50 focus:border-primary/50"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Price (₹)</label>
                  <Input
                    type="number"
                    placeholder="How much are you selling for?"
                    value={newListing.price}
                    onChange={(e) => setNewListing({ ...newListing, price: e.target.value })}
                    className="bg-background/60 border-border/50 focus:border-primary/50"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Category</label>
                    <select
                      value={newListing.category}
                      onChange={(e) => setNewListing({ ...newListing, category: e.target.value })}
                      className="w-full rounded-md border border-border/50 bg-background/60 p-2.5 text-sm focus:border-primary/50 focus:outline-none"
                    >
                      <option value="books">Books</option>
                      <option value="electronics">Electronics</option>
                      <option value="furniture">Furniture</option>
                      <option value="clothing">Clothing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Condition</label>
                    <select
                      value={newListing.condition}
                      onChange={(e) => setNewListing({ ...newListing, condition: e.target.value })}
                      className="w-full rounded-md border border-border/50 bg-background/60 p-2.5 text-sm focus:border-primary/50 focus:outline-none"
                    >
                      <option value="new">New</option>
                      <option value="like-new">Like New</option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    placeholder="Add details about your item"
                    value={newListing.description}
                    onChange={(e) => setNewListing({ ...newListing, description: e.target.value })}
                    className="bg-background/60 border-border/50 focus:border-primary/50 h-[104px]"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Location</label>
                  <Input
                    placeholder="Where can your item be picked up?"
                    value={newListing.location}
                    onChange={(e) => setNewListing({ ...newListing, location: e.target.value })}
                    className="bg-background/60 border-border/50 focus:border-primary/50"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Images</label>
                  <Input
                    placeholder="Add image URLs (comma separated)"
                    value={newListing.images}
                    onChange={(e) => setNewListing({ ...newListing, images: e.target.value })}
                    className="bg-background/60 border-border/50 focus:border-primary/50"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Sparkles className="h-4 w-4 mr-2" />
                Post Listing
              </Button>
            </div>
          </form>
        </Card>
      )}

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 animate-in fade-in-50 duration-500">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search listings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background/60 border-border/50 focus:border-primary/50 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.keys(categoryIcons).map((category, index) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                className={`rounded-full px-4 py-2 h-auto ${
                  selectedCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background/60 hover:bg-background/80 border border-border/50'
                } text-sm capitalize transition-all duration-300 hover:scale-105 stagger-item-${index + 1}`}
                variant="ghost"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {filteredListings.length > 0 ? (
            filteredListings.map((listing, index) => (
              <Card 
                key={listing.id} 
                className={`gradient-border overflow-hidden hover:shadow-lg transition-all duration-500 animate-in fade-in-50 slide-in-from-bottom-5 stagger-item-${index + 1}`}
              >
                <div className="p-5 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-2 py-1 text-xs rounded-full capitalize mb-2 font-medium animate-shimmer" 
                        style={{ 
                          backgroundColor: listing.category === 'books' ? 'rgba(100, 230, 180, 0.2)' :
                                          listing.category === 'electronics' ? 'rgba(100, 160, 255, 0.2)' : 
                                          listing.category === 'furniture' ? 'rgba(255, 140, 100, 0.2)' :
                                          'rgba(180, 130, 250, 0.2)',
                          color: listing.category === 'books' ? 'rgb(100, 230, 180)' :
                                 listing.category === 'electronics' ? 'rgb(100, 160, 255)' : 
                                 listing.category === 'furniture' ? 'rgb(255, 140, 100)' :
                                 'rgb(180, 130, 250)'
                        }}
                      >
                        {listing.category}
                      </span>
                      <h3 className="text-xl font-semibold">{listing.title}</h3>
                      <div className="flex items-center mt-1">
                        <span className="text-2xl font-bold text-primary">{listing.price !== 0 && '₹'}{listing.price}</span>
                        <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-background/80 text-muted-foreground capitalize">
                          {listing.condition}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill={i < Math.floor(listing.seller.rating) ? "currentColor" : "none"} />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">{listing.seller.rating}</span>
                    </div>
                  </div>
                    
                  <p className="text-muted-foreground text-sm">{listing.description}</p>
                    
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {listing.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {listing.postedAt}
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110"
                    >
                      <MessageSquare className="h-4 w-4 mr-1.5" />
                      Contact
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-2 text-center py-10 animate-in fade-in-50 duration-300">
              <p className="text-muted-foreground">No listings found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}