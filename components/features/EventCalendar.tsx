'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, ChevronLeft, ChevronRight, Bell, Clock, MapPin, Users } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'academic' | 'cultural' | 'sports' | 'other';
  participants: number;
  isReminderSet: boolean;
}

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Mid-Semester Exams',
    date: '2024-03-25',
    time: '10:00 AM',
    location: 'Academic Block',
    description: 'First round of mid-semester examinations',
    type: 'academic',
    participants: 150,
    isReminderSet: false
  },
  {
    id: '2',
    title: 'Cultural Fest',
    date: '2024-03-28',
    time: '4:00 PM',
    location: 'Auditorium',
    description: 'Annual cultural festival with performances and competitions',
    type: 'cultural',
    participants: 200,
    isReminderSet: true
  },
  {
    id: '3',
    title: 'Sports Day',
    date: '2024-03-30',
    time: '9:00 AM',
    location: 'Sports Ground',
    description: 'Annual sports day with various athletic events',
    type: 'sports',
    participants: 300,
    isReminderSet: false
  }
];

const typeColors = {
  academic: 'bg-blue-500/20 text-blue-400',
  cultural: 'bg-purple-500/20 text-purple-400',
  sports: 'bg-green-500/20 text-green-400',
  other: 'bg-gray-500/20 text-gray-400'
};

export function EventCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getEventsForDate = (date: Date) => {
    return mockEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === date.getDate() &&
             eventDate.getMonth() === date.getMonth() &&
             eventDate.getFullYear() === date.getFullYear();
    });
  };

  const toggleReminder = (eventId: string) => {
    // In a real app, this would update the database
    console.log('Toggle reminder for event:', eventId);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 bg-gray-800/50" />);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const events = getEventsForDate(date);
      
      days.push(
        <div
          key={day}
          className="h-24 bg-gray-800 p-2 overflow-y-auto"
          onClick={() => {
            const event = events[0];
            if (event) setSelectedEvent(event);
          }}
        >
          <div className="text-sm font-semibold text-purple-400 mb-1">{day}</div>
          {events.map(event => (
            <div
              key={event.id}
              className={`text-xs p-1 rounded mb-1 ${typeColors[event.type]}`}
            >
              {event.title}
            </div>
          ))}
        </div>
      );
    }

    return days;
  };

  return (
    <Card className="p-6 bg-gray-900 border-purple-500">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Calendar className="h-6 w-6 text-purple-400" />
          <h2 className="text-2xl font-bold text-purple-400">Event Calendar</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
            className="bg-gray-800 hover:bg-gray-700"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <span className="text-purple-400 font-semibold">{formatDate(currentDate)}</span>
          <Button
            onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
            className="bg-gray-800 hover:bg-gray-700"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-semibold text-purple-400">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {renderCalendar()}
      </div>

      {selectedEvent && (
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-purple-400">{selectedEvent.title}</h3>
              <div className="flex items-center space-x-4 mt-2 text-gray-400">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {selectedEvent.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {selectedEvent.location}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {selectedEvent.participants} participants
                </div>
              </div>
            </div>
            <Button
              onClick={() => toggleReminder(selectedEvent.id)}
              className={`${
                selectedEvent.isReminderSet ? 'bg-purple-500' : 'bg-gray-700'
              } hover:bg-purple-500/20`}
            >
              <Bell className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-gray-400 mt-4">{selectedEvent.description}</p>
        </div>
      )}
    </Card>
  );
} 