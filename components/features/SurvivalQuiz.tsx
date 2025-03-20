'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Brain, Fire } from 'lucide-react';

const questions = [
  {
    question: "What's the best way to survive a 9 AM lecture after a night of studying?",
    options: [
      "Show up in pajamas and bring a blanket",
      "Skip it and watch the recording later",
      "Show up with 3 cups of coffee and a prayer",
      "Pretend you're sick and get a medical certificate"
    ],
    correct: 2
  },
  {
    question: "Your roommate is snoring like a chainsaw. What do you do?",
    options: [
      "Record it and play it back at max volume",
      "Throw a pillow at them",
      "Use noise-canceling headphones and earplugs",
      "Move to the library to sleep"
    ],
    correct: 2
  },
  {
    question: "The mess food is... questionable. What's your survival strategy?",
    options: [
      "Eat it anyway and hope for the best",
      "Order food from outside every day",
      "Learn to cook in your room",
      "Live on instant noodles and fruits"
    ],
    correct: 3
  },
  {
    question: "Your laptop dies during an online exam. What's your first move?",
    options: [
      "Panic and cry",
      "Use your phone as a hotspot",
      "Run to the nearest computer lab",
      "Contact the professor and explain"
    ],
    correct: 1
  },
  {
    question: "You have 3 assignments due tomorrow. What's your strategy?",
    options: [
      "Pull an all-nighter",
      "Submit whatever you have and pray",
      "Ask for extensions from all professors",
      "Form a study group and divide the work"
    ],
    correct: 3
  }
];

const results = [
  {
    title: "Freshman Fiasco",
    description: "You're in for a wild ride! But don't worry, we've got your back.",
    icon: "🎓"
  },
  {
    title: "Sophomore Survivor",
    description: "You're getting the hang of it! Keep pushing through!",
    icon: "💪"
  },
  {
    title: "Junior Jedi",
    description: "You're a pro at this college thing! Share your wisdom!",
    icon: "🌟"
  },
  {
    title: "Senior Sage",
    description: "You're practically a legend! Time to mentor the freshmen!",
    icon: "👑"
  }
];

export function SurvivalQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getResult = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return results[3];
    if (percentage >= 60) return results[2];
    if (percentage >= 40) return results[1];
    return results[0];
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <Card className="p-6 bg-gray-900 border-purple-500">
      <div className="flex items-center space-x-2 mb-6">
        <Brain className="h-6 w-6 text-purple-400" />
        <h2 className="text-2xl font-bold text-purple-400">College Survival Quiz</h2>
      </div>

      {!showResults ? (
        <div className="space-y-6">
          <Progress
            value={(currentQuestion / questions.length) * 100}
            className="h-2 bg-gray-800"
          />
          
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <h3 className="text-xl font-semibold text-purple-400 mb-6">
              {questions[currentQuestion].question}
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full bg-gray-800 hover:bg-purple-500/20 border-purple-500 text-left"
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center space-y-6">
          <div className="text-6xl mb-4">{getResult().icon}</div>
          <h3 className="text-2xl font-bold text-purple-400">{getResult().title}</h3>
          <p className="text-gray-400">{getResult().description}</p>
          <div className="mt-4">
            <p className="text-xl text-purple-400">
              Your Score: {score}/{questions.length}
            </p>
            <p className="text-sm text-gray-400">
              {((score / questions.length) * 100).toFixed(0)}% Survival Rate
            </p>
          </div>
          <Button
            onClick={restartQuiz}
            className="mt-6 bg-purple-500 hover:bg-purple-600"
          >
            <Fire className="h-5 w-5 mr-2" />
            Try Again
          </Button>
        </div>
      )}
    </Card>
  );
} 