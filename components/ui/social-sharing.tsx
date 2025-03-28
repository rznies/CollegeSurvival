'use client';

import { Button } from '@/components/ui/button';
import { Twitter, Facebook, Link2, Mail, MessageSquare } from 'lucide-react';

type SocialSharingProps = {
  url: string;
  title: string;
};

export function SocialSharing({ url, title }: SocialSharingProps) {
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${url}`)}`
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="hover:bg-primary/20 hover:text-primary"
      >
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter className="h-4 w-4" />
        </a>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="hover:bg-primary/20 hover:text-primary"
      >
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook className="h-4 w-4" />
        </a>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="hover:bg-primary/20 hover:text-primary"
      >
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
          <MessageSquare className="h-4 w-4" />
        </a>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigator.clipboard.writeText(url)}
        className="hover:bg-primary/20 hover:text-primary"
      >
        <Link2 className="h-4 w-4" />
      </Button>
    </div>
  );
}