import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const sundayData = {
  "sunday-one": {
    title: "Title of Piece One",
    publication: "Sunday Magazine",
    date: "Month Year",
    content: `Paste your first paragraph here.

Paste your second paragraph here. Each blank line becomes a new paragraph.

Continue for as many paragraphs as needed.`,
  },
  "sunday-two": {
    title: "Title of Piece Two",
    publication: "Sunday Supplement",
    date: "Month Year",
    content: `Paste your first paragraph here.

Continue for as many paragraphs as needed.`,
  },
};

const SundayRead = () => {
  const { slug } = useParams();
  const piece = sundayData[slug];

  if (!piece) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-author-text-light text-xl">Article not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-3xl mx-auto px-4 py-16">

        <Button asChild variant="ghost" className="mb-8 text-author-accent hover:text-author-primary p-0">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Link>
        </Button>

        <p className="text-sm font-raleway font-medium text-author-accent uppercase tracking-wider mb-3">
          {piece.publication} · {piece.date}
        </p>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-author-primary mb-12 leading-tight">
          {piece.title}
        </h1>

        <div className="max-w-none">
          {piece.content.trim().split("\n\n").map((para, i) => (
            <p key={i} className="mb-6 text-lg leading-8 text-gray-800 font-serif">
              {para.trim()}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-author-text-light italic font-serif text-lg">— End of Article —</p>
        </div>

      </div>
    </div>
  );
};

export default SundayRead;