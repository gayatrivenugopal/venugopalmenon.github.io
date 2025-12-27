import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import classicStories from './images/classic-malayalam-stories.jpg';
import timepiece from './images/the-story-of-the-timepiece.jpg';
import gandhiAlive from './images/gandhi-alive.jpg';
import gandhiAliveMalayalam from './images/gandhi-alive-malayalam.jpg';
import profile from './images/venugopal-menon.jpg';

import { BookOpen, Award, Quote, ArrowRight, Star } from "lucide-react";

const Index = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const featuredWorks = [
	{
      title: "The Second Marriage of Kunju Namboodiri & Other Classic Malayalam Stories",
      description:
        "This anthology includes stories spanning four decades, showcasing \
		the evolving social landscape of Kerala, with themes like education, \
		freedom, and women's emancipation.",
      image: classicStories,
	  backImage: "",
	  purchaseLink: "https://www.amazon.in/Marriage-Namboodiri-Classic-Malayalam-Stories/dp/9365698421",
      year: "2025",
	  category: ["Harper Perennial India", "An Imprint of HarperCollins India"],
    },
    {
      title: "Gandhi Alive",
      description:
        "A collection of memoirs based on interviews with Venkataram Kalyanam, a secretary of Mahatma Gandhi, focusing on the final years of Gandhi's life.",
      image: gandhiAlive,
	  backImage: gandhiAliveMalayalam,
	  purchaseLink: "https://www.amazon.in/GANDHI-ALIVE-KARASSERY-M-N/dp/9355494807",
      year: "2023",
      category: "Mathrubhumi Books",
    },
	{
      title: "The Story of the Timepiece",
      description:
        "A curated selection of short stories by S.K. Pottekkatt, a \
		Jnanpith award-winning Malayalam author, that weaves \
		through time, exploring the relationships between \
		memory, history, and human connection.",
      image: timepiece,
	  backImage: "",
	  purchaseLink: "https://www.amazon.in/Story-Timepiece-Collection-Short-Stories/dp/9386906988/ref=tmm_hrd_swatch_0",
      year: "2019",
      category: "Niyogi Books",
    }
  ];

  const testimonials = [
	{
      quote:
        "Venugopal Menon always keeps the non-Malayali reader \
		topmost in mind.",
      author: "Dr. Meenakshi Shivram",
      position: "Translator & Sahitya Akademi Awardee",
	  institutionUrl: "https://www.thehindu.com/books/early-classic-stories-series-mini-krishnan-translation-odia-kannada-malayalam/article69609734.ece",
      institution: "The Hindu",
    },
    {
	  quote:
		"The translator has taken care to preserve the \
		original flavours of the stories that are rooted \
		in specific regional milieus.",
      author: "Vineetha Mokkil",
      position: "Author & Assistant Editor",
	  institutionUrl: "https://www.outlookindia.com/books/book-reviewthe-early-classics-series",
      institution: "Outlook",
    },
    {
      quote:
        "The Second Marriage of Kunju Namboodiri and other \
		Classic Malayalam Stories is flavoursome as they come.",
      author: "Anuja Chandramouli",
      position: "Author",
	  institutionUrl: "https://www.newindianexpress.com/lifestyle/books/2025/Jun/08/rare-regional-remarkable",
      institution: "The New Indian Express",
    },
	{
      quote:
        "Venugopal Menon's translation of these classic \
		Malayalam short stories (written between 1891 and 1924) \
		captures the spirit and \
		cadence of that bygone era so deftly that I felt \
		transported—immersed in a time when the Indian \
		freedom struggle was still finding its feet.",
      author: "Vinod Joseph",
      position: "Author & Lawyer",
	  institutionUrl: "https://urlisolation.com/browser?clickId=99D81759-A323-480D-88AA-5BC3E748061B&traceToken=1751042529%3Bnewscorp_hosted%3Bhttps%3A%2Fwinnowed.blogspot.com%2F202&url=https%3A%2F%2Fwinnowed.blogspot.com%2F2025%2F06%2Fbook-review-second-marriage-of-kunju.html",
      institution: "Winnowed",
    },
	{
      quote:
        "Menon deconstructs the stories, offers insight \
		into their source, and, of course, proffers \
		insights into the translation process that are \
		sagacious enough to warrant a longer essay.",
      author: "Mahika Dhar",
      position: "Writer",
	  institutionUrl: "https://urlisolation.com/browser?clickId=99D81759-A323-480D-88AA-5BC3E748061B&traceToken=1751042529%3Bnewscorp_hosted%3Bhttps%3A%2Fwinnowed.blogspot.com%2F202&url=https%3A%2F%2Fwinnowed.blogspot.com%2F2025%2F06%2Fbook-review-second-marriage-of-kunju.html",
      institution: "Scroll.in",
    },
	{
      quote:
        "The moment you start reading a story, you have no \
		option but to read till the end. The writing is simple, \
		clear, and accessible.",
      author: "Shevlin Sebastian",
      position: "Author & Journalist",
	  institutionUrl: "https://www.newindianexpress.com/cities/kochi/2019/Jul/03/casting-a-timeless-spell-1998523.html",
      institution: "The New Indian Express",
    }
  ];

  const recentArticles = [
    {
      title:
        "Man's best friend",
      publication: "The Hindu",
      date: "November 2020",
	  link: "https://www.thehindu.com/opinion/open-page/mans-best-friend/article32990051.ece",
      excerpt:
        "Remembering how a dog was lost and found in two years and his tragic end later.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-author-bg-light via-elegant-warm-gray to-elegant-cream min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPC9zdmc+')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-author-primary mb-6 leading-tight">
              Bridging Cultures
              <span className="block text-author-accent">
                through Translation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-author-text-light mb-2in  leading-relaxed max-w-3xl mx-auto">
              Renowned translator and writer bringing the richness of Malayalam
              literature to global audiences with sensitivity and artistic
              excellence.
            </p>
			{/*
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-author-primary hover:bg-author-accent text-white px-8 py-3 text-lg font-raleway uppercase tracking-wider"
              >
                <Link to="/works">
                  Explore Works <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-author-primary text-author-primary hover:bg-author-primary hover:text-white px-8 py-3 text-lg font-raleway uppercase tracking-wider"
              >
                <Link to="/contact">Send Email</Link>
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section id="translations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-author-primary mb-6 uppercase tracking-wider">
              Featured Works
            </h2>
            <p className="text-xl text-author-text-light max-w-2xl mx-auto">
              Literary translations that preserve the essence while opening new
              worlds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
				{featuredWorks.map((work, index) => (
  <Card
    key={index}
    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md flex flex-col"
    onClick={() =>
      work.backImage
        ? setFlippedIndex(flippedIndex === index ? null : index)
        : null
    }
    style={{ cursor: work.backImage ? "pointer" : "default" }}
  >
    <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
      <div
        className={`w-full h-full transition-transform duration-700 transform-style-3d ${
          flippedIndex === index ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div className="absolute w-full h-full backface-hidden">
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* BACK */}
        <div className="absolute w-full h-full rotate-y-180 backface-hidden">
          {work.backImage ? (
            <img
              src={work.backImage}
              alt={`${work.title} Back Cover`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500">
              No Back Cover
            </div>
          )}
        </div>
      </div>
    </div>

    <CardContent className="p-6 flex flex-col flex-1">
      <div className="flex justify-between items-center mb-3">
        <Badge
          variant="secondary"
          className="bg-author-accent/10 text-author-accent border-author-accent/20 leading-snug py-2"
        >
          <div className="text-center">
            {Array.isArray(work.category)
              ? work.category.map((line, i) => (
                  <div key={i}>{line}</div>
                ))
              : work.category}
          </div>
        </Badge>
        <span className="text-sm text-author-text-light text-right font-bold">
          {work.year}
        </span>
      </div>

      <h3 className="text-xl font-serif font-bold text-author-primary mb-3">
        {work.title}
      </h3>

      <p className="text-author-text-light leading-relaxed mb-4">
        {work.description}
      </p>

	  <div className="mt-auto flex justify-center">
      {work.purchaseLink && (
        <Button
          asChild
          size="sm"
          className="bg-author-accent/80 hover:bg-author-accent/90 text-white font-semibold py-2 px-6 rounded shadow-md transition flex items-center gap-2"
        >
          <a href={work.purchaseLink} target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="h-4 w-4" />
            Buy Now
          </a>
        </Button>
      )}
		</div>
    </CardContent>
  </Card>
            ))}
          </div>
		{/*
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-author-primary text-author-primary hover:bg-author-primary hover:text-white font-raleway uppercase tracking-wider"
            >
              <Link to="/works">View All Works</Link>
            </Button>
          </div>*/}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-author-bg-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-author-primary mb-6 uppercase tracking-wider">
              What Others Say
            </h2>
            <p className="text-xl text-author-text-light max-w-2xl mx-auto">
              Recognition from literary critics and fellow authors
            </p>
          </div>
		  <div className="mt-2 flex justify-center">
		  <img
			src={profile}
			alt="Venugopal Menon"
			className="w-40 h-40 rounded-full shadow-md object-cover border-4 border-author-accent"
		  />
		</div><br/><br/>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-author-accent mb-6" />

                  <p className="text-lg text-author-primary leading-relaxed mb-6 font-serif italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="border-t pt-6">
                    <p className="font-raleway font-semibold text-author-primary mb-1">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-author-text-light">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-author-accent font-medium">
                       <a 
						href={testimonial.institutionUrl} 
						target="_blank" 
						rel="noopener noreferrer"
						className="hover:underline"
					  >
					  {testimonial.institution}
					  </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/*<div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-author-primary text-author-primary hover:bg-author-primary hover:text-white font-raleway uppercase tracking-wider"
            >
              <Link to="/reviews">Read All Reviews</Link>
            </Button>
          </div>*/}
        </div>
      </section>

      {/* Recent Press Coverage */}
      <section id="writings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-author-primary mb-6 uppercase tracking-wider">
              In the Press
            </h2>
			{/* <p className="text-xl text-author-text-light max-w-2xl mx-auto">
              Featured contributions in leading newspapers
            </p> */}
          </div>
<center>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {recentArticles.map((article, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8 flex flex-col h-full">
				  {/* Top Content */}
				  <div className="mb-4">
					<div className="flex items-center gap-2 mb-4">
					  <BookOpen className="h-5 w-5 text-author-accent" />
					  <span className="text-sm font-raleway font-medium text-author-accent uppercase tracking-wider">
						{article.publication}
					  </span>
					</div>

					<h3 className="text-xl font-serif font-bold text-author-primary mb-3 leading-tight">
					  {article.title}
					</h3>

					<p className="text-author-text-light leading-relaxed">
					  {article.excerpt}
					</p>
				  </div>

				  {/* Footer pinned to bottom */}
				  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
					<span className="font-bold text-sm text-author-text-light">{article.date}</span>
					<Button
					  asChild
					  variant="ghost"
					  size="sm"
					  className="text-author-accent hover:text-author-primary font-raleway uppercase tracking-wider p-0"
					>
					  <Link to={article.link}>
						Read Article <ArrowRight className="ml-2 h-4 w-4" />
					  </Link>
					</Button>
				  </div>
				</CardContent>
              </Card>
            ))}
          </div>

        </div></center>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-author-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Let's Connect
          </h2>

          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            Whether you're a publisher, fellow author, or reader interested in
            literary translation, I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-author-accent hover:bg-elegant-gold text-author-primary px-8 py-3 text-lg font-raleway uppercase tracking-wider"
            >
              <Link to="/contact">
                Send Email <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-black hover:text-author-primary px-8 py-3 text-lg font-raleway uppercase tracking-wider"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
