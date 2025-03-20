'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type Question = {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    personalityType: string;
  }[];
};

const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Your roomie ate your food. You:",
    options: [
      { id: "1a", text: "Poison their chai", personalityType: "hostel-demon" },
      { id: "1b", text: "Passive-aggressive notes", personalityType: "anxiety-king" },
      { id: "1c", text: "Starve", personalityType: "victim" },
      { id: "1d", text: "Eat their food plus interest", personalityType: "hustler" }
    ]
  },
  {
    id: 2,
    text: "Exam tomorrow, you're unprepared. Your strategy:",
    options: [
      { id: "2a", text: "Write cheat sheets on your thighs", personalityType: "hustler" },
      { id: "2b", text: "Ask seniors for last year's paper", personalityType: "anxiety-king" },
      { id: "2c", text: "Energy drinks and all-nighter", personalityType: "victim" },
      { id: "2d", text: "Accept failure, plan better revenge", personalityType: "hostel-demon" }
    ]
  },
  {
    id: 3,
    text: "College wifi is down during submissions. You:",
    options: [
      { id: "3a", text: "Hack into admin's network", personalityType: "hostel-demon" },
      { id: "3b", text: "Email professor with 50 excuses", personalityType: "anxiety-king" },
      { id: "3c", text: "Cry in bathroom", personalityType: "victim" },
      { id: "3d", text: "Use mobile hotspot, bill parents", personalityType: "hustler" }
    ]
  }
];

const results = {
  "hostel-demon": {
    type: "hostel-demon",
    title: "Hostel Demon",
    description: "You're chaotic evil, with zero filter and a concerning creative streak. Your roommates fear you, professors are confused by you, and the hostel warden has your photo on their dartboard."
  },
  "anxiety-king": {
    type: "anxiety-king",
    title: "Anxiety King/Queen",
    description: "You overthink everything from assignments to canteen menu. Your phone gallery is full of screenshots of syllabus PDFs. The meditation app on your phone is begging you to use it."
  },
  "victim": {
    type: "victim",
    title: "Professional Victim",
    description: "You've mastered the art of suffering silently. Your Instagram stories are cryptic sad quotes. Your parents think you're thriving but your diary knows the truth."
  },
  "hustler": {
    type: "hustler",
    title: "Campus Hustler",
    description: "You've got a side business, know all the shortcuts, and have networked with everyone from the canteen staff to the dean. Your LinkedIn is more active than most professionals'."
  }
};

export function SurvivalQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<typeof results[keyof typeof results] | null>(null);

  const handleAnswerSelect = (personalityType: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = personalityType;
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate results
      const counts: Record<string, number> = {};
      newAnswers.forEach(type => {
        counts[type] = (counts[type] || 0) + 1;
      });
      
      // Find the most common personality type
      let maxCount = 0;
      let maxType = "";
      Object.entries(counts).forEach(([type, count]) => {
        if (count > maxCount) {
          maxCount = count;
          maxType = type;
        }
      });
      
      setResult(results[maxType as keyof typeof results]);
      setShowResult(true);
    }
  };

  const currentQ = quizQuestions[currentQuestion];

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="neon-text-pink">
          {showResult ? "Your Survival Type" : "College Survival Quiz"}
        </CardTitle>
        <CardDescription>
          {showResult ? 
            "The truth hurts, but here you go" : 
            `Question ${currentQuestion + 1} of ${quizQuestions.length}`
          }
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {!showResult ? (
          <div>
            <h3 className="text-lg font-medium mb-4">{currentQ.text}</h3>
            <RadioGroup className="space-y-3">
              {currentQ.options.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    className="w-full text-left justify-start h-auto py-3" 
                    onClick={() => handleAnswerSelect(option.personalityType)}
                  >
                    <span className="font-normal">{option.text}</span>
                  </Button>
                </div>
              ))}
            </RadioGroup>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold neon-text">{result?.title}</h3>
            <p className="text-muted-foreground">{result?.description}</p>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex flex-col gap-4">
        {showResult && (
          <>
            <Button
              variant="default"
              className="w-full"
              onClick={() => {
                alert("Sharing functionality would be implemented here");
              }}
            >
              Share on WhatsApp
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers([]);
                setShowResult(false);
              }}
              className="w-full"
            >
              Take Quiz Again
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
} 