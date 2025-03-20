'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Upload, Search, Book, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  subject: string;
  semester: number;
  description: string;
  author: string;
  likes: number;
  comments: number;
  downloads: number;
  tags: string[];
  uploadedAt: string;
}

const mockNotes: Note[] = [
  {
    id: '1',
    title: 'Data Structures Complete Notes',
    subject: 'Computer Science',
    semester: 3,
    description: 'Comprehensive notes covering all DSA topics with examples',
    author: 'Rahul Kumar',
    likes: 156,
    comments: 23,
    downloads: 89,
    tags: ['DSA', 'Programming', 'CS'],
    uploadedAt: '2024-03-15'
  },
  {
    id: '2',
    title: 'Engineering Mathematics Formula Sheet',
    subject: 'Mathematics',
    semester: 2,
    description: 'Quick reference for all important formulas',
    author: 'Priya Sharma',
    likes: 98,
    comments: 12,
    downloads: 67,
    tags: ['Math', 'Formulas', 'Quick Reference'],
    uploadedAt: '2024-03-14'
  }
];

export function NotesHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [newNote, setNewNote] = useState({
    title: '',
    subject: '',
    semester: '',
    description: '',
    tags: ''
  });

  const filteredNotes = mockNotes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSemester = !selectedSemester || note.semester === selectedSemester;
    return matchesSearch && matchesSemester;
  });

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle file upload and database storage
    console.log('Uploading note:', newNote);
    setShowUploadForm(false);
    setNewNote({
      title: '',
      subject: '',
      semester: '',
      description: '',
      tags: ''
    });
  };

  return (
    <Card className="p-6 bg-gray-900 border-purple-500">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Book className="h-6 w-6 text-purple-400" />
          <h2 className="text-2xl font-bold text-purple-400">Notes Hub</h2>
        </div>
        <Button
          onClick={() => setShowUploadForm(!showUploadForm)}
          className="bg-purple-500 hover:bg-purple-600"
        >
          <Upload className="h-5 w-5 mr-2" />
          Upload Notes
        </Button>
      </div>

      {showUploadForm && (
        <form onSubmit={handleUpload} className="mb-6 p-4 bg-gray-800 rounded-lg">
          <div className="space-y-4">
            <Input
              placeholder="Note Title"
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
              className="bg-gray-700 border-purple-500"
            />
            <Input
              placeholder="Subject"
              value={newNote.subject}
              onChange={(e) => setNewNote({ ...newNote, subject: e.target.value })}
              className="bg-gray-700 border-purple-500"
            />
            <Input
              type="number"
              placeholder="Semester"
              value={newNote.semester}
              onChange={(e) => setNewNote({ ...newNote, semester: e.target.value })}
              className="bg-gray-700 border-purple-500"
            />
            <Textarea
              placeholder="Description"
              value={newNote.description}
              onChange={(e) => setNewNote({ ...newNote, description: e.target.value })}
              className="bg-gray-700 border-purple-500"
            />
            <Input
              placeholder="Tags (comma separated)"
              value={newNote.tags}
              onChange={(e) => setNewNote({ ...newNote, tags: e.target.value })}
              className="bg-gray-700 border-purple-500"
            />
            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                onClick={() => setShowUploadForm(false)}
                className="bg-gray-700 hover:bg-gray-600"
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-purple-500 hover:bg-purple-600">
                Upload
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
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-purple-500"
            />
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((sem) => (
              <Button
                key={sem}
                onClick={() => setSelectedSemester(selectedSemester === sem ? null : sem)}
                className={`${
                  selectedSemester === sem ? 'bg-purple-500' : 'bg-gray-800'
                } hover:bg-purple-500/20`}
              >
                Sem {sem}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {filteredNotes.map((note) => (
            <Card key={note.id} className="p-4 bg-gray-800 border-purple-500/50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-purple-400">{note.title}</h3>
                  <p className="text-sm text-gray-400">{note.subject} • Sem {note.semester}</p>
                  <p className="text-gray-400 mt-2">{note.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-400">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {note.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-400">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {note.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-400">
                    <Share2 className="h-4 w-4 mr-1" />
                    {note.downloads}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
} 