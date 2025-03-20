'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Image, Download, Share2, Sparkles } from 'lucide-react';

const memeTemplates = [
  {
    id: 1,
    name: 'Drake Hotline',
    url: '/memes/drake-template.jpg',
    textPositions: [
      { top: '10%', left: '50%' },
      { top: '60%', left: '50%' }
    ]
  },
  {
    id: 2,
    name: 'Distracted Boyfriend',
    url: '/memes/distracted-template.jpg',
    textPositions: [
      { top: '20%', left: '30%' },
      { top: '40%', left: '70%' },
      { top: '70%', left: '70%' }
    ]
  },
  {
    id: 3,
    name: 'This is Fine',
    url: '/memes/this-is-fine-template.jpg',
    textPositions: [
      { top: '20%', left: '50%' }
    ]
  }
];

export function MemeGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState(memeTemplates[0]);
  const [texts, setTexts] = useState<string[]>(Array(selectedTemplate.textPositions.length).fill(''));
  const [generatedMeme, setGeneratedMeme] = useState<string | null>(null);

  const generateMeme = () => {
    // In a real app, this would use a canvas to generate the meme
    // For now, we'll just show a placeholder
    setGeneratedMeme(selectedTemplate.url);
  };

  const downloadMeme = () => {
    if (generatedMeme) {
      const link = document.createElement('a');
      link.href = generatedMeme;
      link.download = 'college-survivor-meme.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card className="p-6 bg-gray-900 border-purple-500">
      <div className="flex items-center space-x-2 mb-6">
        <Sparkles className="h-6 w-6 text-purple-400" />
        <h2 className="text-2xl font-bold text-purple-400">Meme Generator</h2>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {memeTemplates.map((template) => (
            <div
              key={template.id}
              className={`cursor-pointer p-2 rounded-lg transition-all ${
                selectedTemplate.id === template.id
                  ? 'bg-purple-500/20 border-2 border-purple-500'
                  : 'hover:bg-gray-800'
              }`}
              onClick={() => setSelectedTemplate(template)}
            >
              <img
                src={template.url}
                alt={template.name}
                className="w-full h-32 object-cover rounded"
              />
              <p className="text-center text-white mt-2">{template.name}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {selectedTemplate.textPositions.map((_, index) => (
            <Input
              key={index}
              placeholder={`Text ${index + 1}`}
              value={texts[index]}
              onChange={(e) => {
                const newTexts = [...texts];
                newTexts[index] = e.target.value;
                setTexts(newTexts);
              }}
              className="bg-gray-800 border-purple-500"
            />
          ))}
        </div>

        <div className="flex space-x-4">
          <Button
            onClick={generateMeme}
            className="flex-1 bg-purple-500 hover:bg-purple-600"
          >
            <Image className="h-5 w-5 mr-2" />
            Generate Meme
          </Button>
        </div>

        {generatedMeme && (
          <div className="mt-6">
            <div className="relative">
              <img
                src={generatedMeme}
                alt="Generated Meme"
                className="w-full rounded-lg"
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button
                  onClick={downloadMeme}
                  className="bg-purple-500 hover:bg-purple-600"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download
                </Button>
                <Button className="bg-purple-500 hover:bg-purple-600">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
} 