import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

// TODO: replace with your real email address
const CONTACT_EMAIL = "menonvenum@gmail.com";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-author-bg-light via-elegant-warm-gray to-elegant-cream py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-author-primary mb-6">
            Get in Touch
          </h1>
        </div>
      </section>

      {/* Email */}
      <section className="py-20">
        <div className="max-w-xl mx-auto px-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-10 text-center">
              <Mail className="h-10 w-10 text-author-accent mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold text-author-primary mb-4">
                Write to me
              </h2>
              <p className="text-author-text-light leading-relaxed mb-6">
                Publishers, fellow authors, and readers are welcome to reach out by email.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-xl font-raleway font-semibold text-author-accent hover:text-author-primary hover:underline break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
