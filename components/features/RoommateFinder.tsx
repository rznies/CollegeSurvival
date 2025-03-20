'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, Search, Filter, MessageSquare, Clock, Moon, Music, Coffee } from 'lucide-react';

interface Roommate {
  id: string;
  name: string;
  course: string;
  semester: number;
  bio: string;
  preferences: {
    sleepSchedule: 'early' | 'late' | 'flexible';
    music: 'quiet' | 'moderate' | 'loud';
    cleanliness: 'neat' | 'moderate' | 'messy';
    guests: 'rarely' | 'sometimes' | 'often';
  };
  interests: string[];
  contact: string;
}

const mockRoommates: Roommate[] = [
  {
    id: '1',
    name: 'Rahul Kumar',
    course: 'Computer Science',
    semester: 3,
    bio: 'Looking for a study buddy who can also be a good friend. Love coding and gaming!',
    preferences: {
      sleepSchedule: 'late',
      music: 'moderate',
      cleanliness: 'neat',
      guests: 'sometimes'
    },
    interests: ['Programming', 'Gaming', 'Music'],
    contact: 'rahul.k@example.com'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    course: 'Electronics',
    semester: 2,
    bio: 'Early bird who loves a clean space. Looking for someone with similar habits!',
    preferences: {
      sleepSchedule: 'early',
      music: 'quiet',
      cleanliness: 'neat',
      guests: 'rarely'
    },
    interests: ['Reading', 'Meditation', 'Cooking'],
    contact: 'priya.s@example.com'
  }
];

const preferenceIcons = {
  sleepSchedule: Clock,
  music: Music,
  cleanliness: Coffee,
  guests: Users
};

export function RoommateFinder() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [newProfile, setNewProfile] = useState({
    name: '',
    course: '',
    semester: '',
    bio: '',
    preferences: {
      sleepSchedule: 'flexible',
      music: 'moderate',
      cleanliness: 'moderate',
      guests: 'sometimes'
    },
    interests: '',
    contact: ''
  });

  const filteredRoommates = mockRoommates.filter(roommate => {
    const matchesSearch = roommate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         roommate.bio.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCourse = !selectedCourse || roommate.course === selectedCourse;
    const matchesSemester = !selectedSemester || roommate.semester === selectedSemester;
    return matchesSearch && matchesCourse && matchesSemester;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a database
    console.log('Submitting profile:', newProfile);
    setShowProfileForm(false);
    setNewProfile({
      name: '',
      course: '',
      semester: '',
      bio: '',
      preferences: {
        sleepSchedule: 'flexible',
        music: 'moderate',
        cleanliness: 'moderate',
        guests: 'sometimes'
      },
      interests: '',
      contact: ''
    });
  };

  return (
    <Card className="p-6 bg-gray-900 border-purple-500">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Users className="h-6 w-6 text-purple-400" />
          <h2 className="text-2xl font-bold text-purple-400">Roommate Finder</h2>
        </div>
        <Button
          onClick={() => setShowProfileForm(!showProfileForm)}
          className="bg-purple-500 hover:bg-purple-600"
        >
          Create Profile
        </Button>
      </div>

      {showProfileForm && (
        <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-800 rounded-lg">
          <div className="space-y-4">
            <Input
              placeholder="Your Name"
              value={newProfile.name}
              onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
              className="bg-gray-700 border-purple-500"
            />
            <Input
              placeholder="Course"
              value={newProfile.course}
              onChange={(e) => setNewProfile({ ...newProfile, course: e.target.value })}
              className="bg-gray-700 border-purple-500"
            />
            <Input
              type="number"
              placeholder="Semester"
              value={newProfile.semester}
              onChange={(e) => setNewProfile({ ...newProfile, semester: e.target.value })}
              className="bg-gray-700 border-purple-500"
            />
            <Textarea
              placeholder="Tell us about yourself..."
              value={newProfile.bio}
              onChange={(e) => setNewProfile({ ...newProfile, bio: e.target.value })}
              className="bg-gray-700 border-purple-500"
            />
            <Input
              placeholder="Interests (comma separated)"
              value={newProfile.interests}
              onChange={(e) => setNewProfile({ ...newProfile, interests: e.target.value })}
              className="bg-gray-700 border-purple-500"
            />
            <Input
              placeholder="Contact Info"
              value={newProfile.contact}
              onChange={(e) => setNewProfile({ ...newProfile, contact: e.target.value })}
              className="bg-gray-700 border-purple-500"
            />
            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                onClick={() => setShowProfileForm(false)}
                className="bg-gray-700 hover:bg-gray-600"
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-purple-500 hover:bg-purple-600">
                Create Profile
              </Button>
            </div>
          </div>
        </form>
      )}

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search roommates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-purple-500"
            />
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => setSelectedCourse(selectedCourse === 'Computer Science' ? null : 'Computer Science')}
              className={`${
                selectedCourse === 'Computer Science' ? 'bg-purple-500' : 'bg-gray-800'
              } hover:bg-purple-500/20`}
            >
              CS
            </Button>
            <Button
              onClick={() => setSelectedCourse(selectedCourse === 'Electronics' ? null : 'Electronics')}
              className={`${
                selectedCourse === 'Electronics' ? 'bg-purple-500' : 'bg-gray-800'
              } hover:bg-purple-500/20`}
            >
              ECE
            </Button>
            <Button
              onClick={() => setSelectedSemester(selectedSemester === 2 ? null : 2)}
              className={`${
                selectedSemester === 2 ? 'bg-purple-500' : 'bg-gray-800'
              } hover:bg-purple-500/20`}
            >
              Sem 2
            </Button>
            <Button
              onClick={() => setSelectedSemester(selectedSemester === 3 ? null : 3)}
              className={`${
                selectedSemester === 3 ? 'bg-purple-500' : 'bg-gray-800'
              } hover:bg-purple-500/20`}
            >
              Sem 3
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {filteredRoommates.map((roommate) => (
            <Card key={roommate.id} className="p-4 bg-gray-800 border-purple-500/50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-purple-400">{roommate.name}</h3>
                  <p className="text-sm text-gray-400">
                    {roommate.course} • Semester {roommate.semester}
                  </p>
                  <p className="text-gray-400 mt-2">{roommate.bio}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {roommate.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Contact
                </Button>
              </div>

              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(roommate.preferences).map(([key, value]) => {
                  const Icon = preferenceIcons[key as keyof typeof preferenceIcons];
                  return (
                    <div key={key} className="flex items-center space-x-2">
                      <Icon className="h-4 w-4 text-purple-400" />
                      <span className="text-sm text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}: {value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
} 