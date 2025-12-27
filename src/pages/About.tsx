import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-author-bg-light via-elegant-warm-gray to-elegant-cream py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-author-primary mb-6">
            About Venugopal Menon
          </h1>
          <p className="text-xl text-author-text-light leading-relaxed">
            A literary translator dedicated to bridging cultures through the art
            of translation
          </p>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-author-bg-section rounded-lg p-12 mb-12">
            <BookOpen className="h-16 w-16 text-author-accent mx-auto mb-6" />
            {/*<h2 className="text-3xl font-serif font-bold text-author-primary mb-6">
              About Page Coming Soon
            </h2>*/}
            <p className="text-lg text-author-text-light mb-8 leading-relaxed">
              Venugopal Menon retired from Larsen & Toubro Limited where he worked in sales, marketing,
			   and finally training, wherein his writing and workshopping skills were widely
			    appreciated. He turned his attention to literary pursuits in a 
				preliminary manner, beginning with proofreading for Paragon Prepress Journal,
				 Delhi.
            </p>
			{/*
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-author-accent mx-auto mb-3" />
                <h3 className="font-raleway font-semibold text-author-primary mb-2">
                  Literary Journey
                </h3>
                <p className="text-sm text-author-text-light">
                  Career highlights and milestones
                </p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-author-accent mx-auto mb-3" />
                <h3 className="font-raleway font-semibold text-author-primary mb-2">
                  Awards & Recognition
                </h3>
                <p className="text-sm text-author-text-light">
                  Honors and accolades received
                </p>
              </div>
              <div className="text-center">
                <Globe className="h-8 w-8 text-author-accent mx-auto mb-3" />
                <h3 className="font-raleway font-semibold text-author-primary mb-2">
                  Translation Philosophy
                </h3>
                <p className="text-sm text-author-text-light">
                  Approach to cultural translation
                </p>
              </div>
            </div>*/}

            <Button
              asChild
              className="bg-author-primary hover:bg-author-accent font-raleway uppercase tracking-wider"
            >
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
