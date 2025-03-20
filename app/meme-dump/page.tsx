import { MemeSubmission } from "@/components/interactive/meme-submission";
import { Card, CardContent } from "@/components/ui/card";

// Example memes - in a real app these would come from a database
const memes = [
  {
    id: 1,
    title: "When the prof says 'Syllabus complete hai' but you're still on page 1",
    alt: "Confused student meme"
  },
  {
    id: 2,
    title: "Hostel Wi-Fi: 404 Sanity Not Found",
    alt: "WiFi problems meme"
  },
  {
    id: 3,
    title: "8AM lectures are just sleep deprivation with attendance",
    alt: "Morning lecture meme"
  },
  {
    id: 4,
    title: "My GPA looking at my social life",
    alt: "GPA vs social life meme"
  }
];

export default function MemeDumpPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 neon-text title-font">
          Meme Dump: Digital Therapy
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Where we cope with college trauma through pixelated humor.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        {memes.map((meme) => (
          <Card key={meme.id} className="overflow-hidden">
            <div className="bg-muted aspect-video flex items-center justify-center">
              <p className="text-muted-foreground text-center p-4">
                [Meme Image: {meme.alt}]<br/>
                Image placeholder in demo
              </p>
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-lg">{meme.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="max-w-2xl mx-auto my-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 neon-text-pink">
            Add Your Own Unhinged Creation
          </h2>
          <p className="text-muted-foreground">
            Make us laugh or cry. Preferably both.
          </p>
        </div>
        
        <MemeSubmission />
      </div>
    </div>
  );
} 