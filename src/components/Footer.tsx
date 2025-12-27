import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-author-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
		  {/*<h3 className="text-2xl font-serif font-bold mb-6 text-author-accent">
              Venugopal Menon
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Acclaimed translator and author of works including "The Second
              Marriage of Kunju Namboodiri" and "The Story of a Timepiece."
              Bridging cultures through the art of literary translation.
		  </p>*/}
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Venugopal Menon. All rights
              reserved.
            </p>
          </div>

          {/* Quick Links 
          <div>
            <h4 className="text-lg font-raleway font-semibold uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/works", label: "Works" },
                { href: "/reviews", label: "Reviews" },
                { href: "/articles", label: "Articles" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-gray-300 hover:text-author-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

           Contact Information 
          <div>
            <h4 className="text-lg font-raleway font-semibold uppercase tracking-wider mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-author-accent" />
                <span className="text-gray-300 text-sm">
                  venugopal@example.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-author-accent" />
                <span className="text-gray-300 text-sm">+91 xxx xxx xxxx</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-author-accent" />
                <span className="text-gray-300 text-sm">Kerala, India</span>
              </div>
            </div>
          </div>
        </div>
		  */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            Literary translations that bridge cultures and connect hearts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
