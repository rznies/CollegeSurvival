'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavItem {
  name: string;
  href: string;
  description?: string;
  items?: NavItem[];
}

interface DropdownNavProps {
  item: NavItem;
}

export function DropdownNav({ item }: DropdownNavProps) {
  if (!item.items) {
    return (
      <Link
        href={item.href}
        className="text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-300 px-4 py-2 rounded-md hover:bg-accent/20"
      >
        {item.name}
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="group flex items-center gap-1 text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-300 px-4 py-2 rounded-md hover:bg-accent/20"
        >
          {item.name}
          <ChevronDown
            className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180 ml-1"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56 p-2 animate-in fade-in-0 zoom-in-95 glass-panel border-secondary/30">
        {item.items.map((subItem) => (
          <DropdownMenuItem key={subItem.href} asChild>
            <Link
              href={subItem.href}
              className="flex flex-col space-y-1 px-2 py-1.5 rounded-md hover:bg-accent/20 transition-colors duration-300 hover:text-primary"
            >
              <span>{subItem.name}</span>
              {subItem.description && (
                <span className="text-xs text-muted-foreground">
                  {subItem.description}
                </span>
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}