import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-author-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Venugopal Menon. All rights
              reserved.
            </p>
          </div>
		</div>
	  </div>
    </footer>
  );
};

export default Footer;
