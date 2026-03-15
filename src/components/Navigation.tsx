import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { scroller } from "react-scroll";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollLinkClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          smooth: true,
          duration: 600,
          offset: -80,
        });
      }, 300);
    } else {
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 600,
        offset: -80,
      });
    }
  };

  const leftLinks = [
    { href: "/about", label: "About", isScroll: false },
    { href: "translations", label: "Translations", isScroll: true },
    { href: "writings", label: "Articles", isScroll: true },
  ];

  const rightLinks = [
    { href: "manuscripts", label: "Manuscripts", isScroll: true },
    { href: "sunday", label: "Sunday Read", isScroll: true },
    { href: "/contact", label: "Contact", isScroll: false },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  const renderLink = (link, extraClass = "") =>
    link.isScroll ? (
      <span
        key={link.href}
        onClick={() => handleScrollLinkClick(link.href)}
        className={cn(
          "text-xs font-raleway font-medium uppercase tracking-widest transition-colors cursor-pointer",
          "text-author-primary hover:text-author-accent",
          extraClass
        )}
      >
        {link.label}
      </span>
    ) : (
      <Link
        key={link.href}
        to={link.href}
        className={cn(
          "text-xs font-raleway font-medium uppercase tracking-widest transition-colors",
          location.pathname === link.href
            ? "text-author-accent"
            : "text-author-primary hover:text-author-accent",
          extraClass
        )}
      >
        {link.label}
      </Link>
    );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-md h-16"
            : "bg-white h-20"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 h-full">

          {/* Desktop: 3-column grid so logo is always perfectly centered */}
          <div className="hidden lg:grid grid-cols-3 items-center h-full">

            {/* Left nav */}
            <nav className="flex items-center justify-start space-x-8">
              {leftLinks.map((link) => renderLink(link))}
            </nav>

            {/* Logo — center column */}
            <div className="flex justify-center" invisible>
              <Link
                to="/"
                className="text-2xl md:text-3xl font-serif font-bold text-author-primary tracking-wide whitespace-nowrap"
              >
                Venugopal Menon
              </Link>
            </div>

            {/* Right nav */}
            <nav className="flex items-center justify-end space-x-8">
              {rightLinks.map((link) => renderLink(link))}
            </nav>

          </div>

          {/* Mobile: logo left, hamburger right */}
          <div className="lg:hidden flex items-center justify-between h-full">
            <Link
              to="/"
              className="text-2xl font-serif font-bold text-author-primary tracking-wide invisible"
            >
              Venugopal Menon
            </Link>
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-author-primary" />
              ) : (
                <Menu className="h-6 w-6 text-author-primary" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              {allLinks.map((link) => renderLink(link, "block"))}
              <div className="pt-4">
                <Button
                  asChild
                  size="sm"
                  className="w-full uppercase text-xs font-raleway tracking-widest bg-author-primary hover:bg-author-accent"
                >
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Send Email
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className={isScrolled ? "h-16" : "h-20"} />
    </>
  );
};

export default Navigation;