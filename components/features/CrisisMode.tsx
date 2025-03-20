'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Bell, Phone, MapPin, AlertTriangle } from 'lucide-react';

export function CrisisMode() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={() => setIsActive(!isActive)}
        className={`rounded-full p-4 shadow-lg transition-all duration-300 ${
          isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-purple-500 hover:bg-purple-600'
        }`}
      >
        <AlertTriangle className="h-6 w-6" />
      </Button>

      {isActive && (
        <div className="absolute bottom-16 right-0 w-64 rounded-lg bg-gray-900 p-4 shadow-xl border border-purple-500">
          <h3 className="text-lg font-bold text-purple-400 mb-4">Emergency Resources</h3>
          
          <div className="space-y-3">
            <a href="tel:+911234567890" className="flex items-center space-x-2 text-white hover:text-purple-400">
              <Phone className="h-5 w-5" />
              <span>Emergency Helpline</span>
            </a>
            
            <a href="/campus-map" className="flex items-center space-x-2 text-white hover:text-purple-400">
              <MapPin className="h-5 w-5" />
              <span>Nearest Hospital</span>
            </a>
            
            <button className="flex items-center space-x-2 text-white hover:text-purple-400 w-full">
              <Bell className="h-5 w-5" />
              <span>Raise SOS Alert</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 