'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function MemeSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="neon-text text-center">Meme Submitted!</CardTitle>
          <CardDescription className="text-center">
            Your contribution to the chaos has been received.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            We'll review it after we finish crying about our grades.
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setIsSubmitted(false)}
            className="w-full"
          >
            Submit Another Meme
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="neon-text-pink">Submit Your Meme</CardTitle>
        <CardDescription>
          Make it dark, make it funny, make it memorable.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Meme Title</Label>
              <Input id="title" placeholder="When the prof says..." required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="What's the context?" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="file">Upload Your Meme</Label>
              <Input id="file" type="file" accept="image/*" required />
              <p className="text-xs text-muted-foreground">JPG, PNG, or GIF. Max 5MB.</p>
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit to the Void"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
} 