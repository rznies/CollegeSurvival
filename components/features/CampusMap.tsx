'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Coffee, Wifi, Book, Utensils, Home } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  type: 'academic' | 'hostel' | 'cafeteria' | 'library' | 'wifi' | 'other';
  description: string;
  coordinates: { x: number; y: number };
  tips?: string[];
}

const locations: Location[] = [
  {
    id: 'main-gate',
    name: 'Main Gate',
    type: 'other',
    description: 'The grand entrance to HNBGU campus',
    coordinates: { x: 50, y: 90 }
  },
  {
    id: 'central-library',
    name: 'Central Library',
    type: 'library',
    description: 'The heart of academic resources',
    coordinates: { x: 40, y: 40 },
    tips: ['Best study spots on 2nd floor', 'AC available', 'Open till 8 PM']
  },
  {
    id: 'cafeteria',
    name: 'Student Cafeteria',
    type: 'cafeteria',
    description: 'Where hunger meets budget',
    coordinates: { x: 60, y: 50 },
    tips: ['Best time to visit: 12:30 PM', 'Try the special thali on Wednesdays']
  },
  {
    id: 'boys-hostel',
    name: 'Boys Hostel',
    type: 'hostel',
    description: 'Home away from home',
    coordinates: { x: 30, y: 60 }
  },
  {
    id: 'girls-hostel',
    name: 'Girls Hostel',
    type: 'hostel',
    description: 'Ladies residence',
    coordinates: { x: 70, y: 60 }
  },
  {
    id: 'wifi-zone',
    name: 'WiFi Zone',
    type: 'wifi',
    description: 'Fastest internet on campus',
    coordinates: { x: 45, y: 30 }
  },
  {
    id: 'academic-block',
    name: 'Academic Block',
    type: 'academic',
    description: 'Where knowledge flows',
    coordinates: { x: 50, y: 40 }
  }
];

const typeIcons = {
  academic: Book,
  hostel: Home,
  cafeteria: Utensils,
  library: Book,
  wifi: Wifi,
  other: MapPin
};

export function CampusMap() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [filterType, setFilterType] = useState<string | null>(null);

  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         location.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !filterType || location.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <Card className="p-6 bg-gray-900 border-purple-500">
      <div className="flex items-center space-x-2 mb-6">
        <MapPin className="h-6 w-6 text-purple-400" />
        <h2 className="text-2xl font-bold text-purple-400">HNBGU Campus Map</h2>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-purple-500"
            />
          </div>
          <div className="flex gap-2">
            {Object.keys(typeIcons).map((type) => {
              const Icon = typeIcons[type as keyof typeof typeIcons];
              return (
                <Button
                  key={type}
                  onClick={() => setFilterType(filterType === type ? null : type)}
                  className={`${
                    filterType === type ? 'bg-purple-500' : 'bg-gray-800'
                  } hover:bg-purple-500/20`}
                >
                  <Icon className="h-5 w-5" />
                </Button>
              );
            })}
          </div>
        </div>

        <div className="relative h-[400px] bg-gray-800 rounded-lg overflow-hidden">
          {/* This would be replaced with an actual map in production */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Interactive Map Coming Soon
          </div>

          {filteredLocations.map((location) => {
            const Icon = typeIcons[location.type];
            return (
              <div
                key={location.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${location.coordinates.x}%`,
                  top: `${location.coordinates.y}%`
                }}
                onClick={() => setSelectedLocation(location)}
              >
                <div className="relative group">
                  <Icon className="h-6 w-6 text-purple-400" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                    <div className="bg-gray-900 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                      {location.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selectedLocation && (
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              {selectedLocation.name}
            </h3>
            <p className="text-gray-400 mb-4">{selectedLocation.description}</p>
            {selectedLocation.tips && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-purple-400">Pro Tips:</h4>
                <ul className="list-disc list-inside text-gray-400">
                  {selectedLocation.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
} 