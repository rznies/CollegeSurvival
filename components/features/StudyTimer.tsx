'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Play, Pause, RefreshCw, Trophy, Coffee, Brain } from 'lucide-react';

interface StudySession {
  id: string;
  subject: string;
  duration: number;
  completed: boolean;
  date: string;
}

const mockSessions: StudySession[] = [
  {
    id: '1',
    subject: 'Data Structures',
    duration: 120,
    completed: true,
    date: '2024-03-20'
  },
  {
    id: '2',
    subject: 'Mathematics',
    duration: 90,
    completed: true,
    date: '2024-03-19'
  }
];

export function StudyTimer() {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [subject, setSubject] = useState('');
  const [sessions, setSessions] = useState<StudySession[]>(mockSessions);
  const [streak, setStreak] = useState(0);
  const [totalStudyTime, setTotalStudyTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      handleSessionComplete();
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    if (subject) {
      setIsActive(true);
    }
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  const handleSessionComplete = () => {
    if (subject) {
      const newSession: StudySession = {
        id: Date.now().toString(),
        subject,
        duration: 25 * 60 - time,
        completed: true,
        date: new Date().toISOString().split('T')[0]
      };

      setSessions([newSession, ...sessions]);
      setTotalStudyTime(totalStudyTime + (25 * 60 - time));
      setStreak(streak + 1);
      setSubject('');
      setIsActive(false);
      setTime(25 * 60);
    }
  };

  const getMotivation = () => {
    if (streak >= 5) return "You're on fire! 🔥";
    if (streak >= 3) return "Keep the momentum going! 💪";
    if (streak >= 1) return "Great start! 🌟";
    return "Ready to begin? 🚀";
  };

  return (
    <Card className="p-6 bg-gray-900 border-purple-500">
      <div className="flex items-center space-x-2 mb-6">
        <Brain className="h-6 w-6 text-purple-400" />
        <h2 className="text-2xl font-bold text-purple-400">Study Timer</h2>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <div className="text-6xl font-bold text-purple-400 mb-4">
            {formatTime(time)}
          </div>
          <p className="text-gray-400 mb-4">{getMotivation()}</p>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <Trophy className="h-5 w-5 text-yellow-400 mx-auto mb-1" />
              <span className="text-sm text-gray-400">{streak} day streak</span>
            </div>
            <div className="text-center">
              <Coffee className="h-5 w-5 text-purple-400 mx-auto mb-1" />
              <span className="text-sm text-gray-400">
                {Math.floor(totalStudyTime / 3600)}h {Math.floor((totalStudyTime % 3600) / 60)}m
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Input
            placeholder="What are you studying?"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-gray-800 border-purple-500"
          />
          <div className="flex space-x-4">
            {!isActive ? (
              <Button
                onClick={handleStart}
                className="flex-1 bg-purple-500 hover:bg-purple-600"
                disabled={!subject}
              >
                <Play className="h-5 w-5 mr-2" />
                Start
              </Button>
            ) : (
              <Button
                onClick={handlePause}
                className="flex-1 bg-purple-500 hover:bg-purple-600"
              >
                <Pause className="h-5 w-5 mr-2" />
                Pause
              </Button>
            )}
            <Button
              onClick={handleReset}
              className="bg-gray-800 hover:bg-gray-700"
            >
              <RefreshCw className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Recent Sessions</h3>
          <div className="space-y-2">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="flex items-center justify-between p-3 bg-gray-800 rounded-lg"
              >
                <div>
                  <p className="text-purple-400">{session.subject}</p>
                  <p className="text-sm text-gray-400">
                    {Math.floor(session.duration / 60)} minutes • {session.date}
                  </p>
                </div>
                <div className="text-green-400">✓</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
} 