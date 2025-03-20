'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Trophy, Calculator, Brain } from 'lucide-react';

interface Subject {
  name: string;
  grade: string;
  credits: number;
}

export function GradeCalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [newSubject, setNewSubject] = useState<Subject>({ name: '', grade: '', credits: 0 });
  const [cgpa, setCgpa] = useState<number>(0);

  const gradePoints: { [key: string]: number } = {
    'O': 10,
    'A+': 9,
    'A': 8,
    'B+': 7,
    'B': 6,
    'C': 5,
    'D': 4,
    'F': 0
  };

  const addSubject = () => {
    if (newSubject.name && newSubject.grade && newSubject.credits) {
      setSubjects([...subjects, newSubject]);
      setNewSubject({ name: '', grade: '', credits: 0 });
      calculateCGPA();
    }
  };

  const calculateCGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach(subject => {
      totalPoints += gradePoints[subject.grade] * subject.credits;
      totalCredits += subject.credits;
    });

    setCgpa(totalCredits > 0 ? totalPoints / totalCredits : 0);
  };

  return (
    <Card className="p-6 bg-gray-900 border-purple-500">
      <div className="flex items-center space-x-2 mb-6">
        <Calculator className="h-6 w-6 text-purple-400" />
        <h2 className="text-2xl font-bold text-purple-400">Grade Calculator</h2>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            placeholder="Subject Name"
            value={newSubject.name}
            onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
            className="bg-gray-800 border-purple-500"
          />
          <Input
            placeholder="Grade (O/A+/A/B+/B/C/D/F)"
            value={newSubject.grade}
            onChange={(e) => setNewSubject({ ...newSubject, grade: e.target.value.toUpperCase() })}
            className="bg-gray-800 border-purple-500"
          />
          <Input
            type="number"
            placeholder="Credits"
            value={newSubject.credits}
            onChange={(e) => setNewSubject({ ...newSubject, credits: Number(e.target.value) })}
            className="bg-gray-800 border-purple-500"
          />
        </div>

        <Button onClick={addSubject} className="w-full bg-purple-500 hover:bg-purple-600">
          Add Subject
        </Button>

        {subjects.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-purple-400 mb-4">Your Subjects</h3>
            <div className="space-y-2">
              {subjects.map((subject, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-gray-800 rounded">
                  <span className="text-white">{subject.name}</span>
                  <span className="text-purple-400">{subject.grade} ({subject.credits} credits)</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {cgpa > 0 && (
          <div className="mt-6 p-4 bg-purple-500/20 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Trophy className="h-6 w-6 text-yellow-400" />
                <span className="text-xl font-bold text-purple-400">Your CGPA</span>
              </div>
              <span className="text-3xl font-bold text-purple-400">{cgpa.toFixed(2)}</span>
            </div>
            <div className="mt-2 text-sm text-gray-400">
              {cgpa >= 8 ? "You're crushing it! 🚀" : cgpa >= 6 ? "Keep pushing! 💪" : "Time to hit the books! 📚"}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
} 