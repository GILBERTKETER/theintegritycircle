"use client"
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Clock
} from 'lucide-react';

interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

interface SocialLink {
  platform: string;
  icon: React.ReactNode;
  href: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Projects", href: "/projects" },
        { label: "Resources", href: "/resources" },
        { label: "News & Updates", href: "/news" },
        { label: "Contact Us", href: "/contact" }
      ]
    },
    {
      title: "Counties",
      links: [
        { label: "Browse Counties", href: "/counties" },
        { label: "County Performance", href: "/performance" },
        { label: "Development Index", href: "/development" },
        { label: "Success Stories", href: "/success-stories" },
        { label: "County Resources", href: "/resources" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Research Papers", href: "/research" },
        { label: "Data & Statistics", href: "/data" },
        { label: "Project Guidelines", href: "/guidelines" },
        { label: "FAQ", href: "/faq" }
      ]
    }
  ];

  const socialLinks: SocialLink[] = [
    { platform: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
    { platform: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
    { platform: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
    { platform: "YouTube", icon: <Youtube className="w-5 h-5" />, href: "#" }
  ];

  const contactInfo: ContactInfo[] = [
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: "Email",
      value: "info@integritycircle.co.ke" 
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      label: "Phone",
      value: "+254 700 000 000" 
    },
    { 
      icon: <MapPin className="w-5 h-5" />, 
      label: "Address",
      value: "Nairobi, Kenya" 
    },
    { 
      icon: <Clock className="w-5 h-5" />, 
      label: "Working Hours",
      value: "Mon - Fri, 8:00 AM - 5:00 PM" 
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Updated with TheIntegrityCircle
              </h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for updates on government projects and activities
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow md:w-64"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">TheIntegrityCircle</h2>
            <p className="text-gray-400 mb-6">
              Empowering citizens with transparency and accountability in government projects 
              across Kenya. Together we build a more informed and engaged society.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`Follow us on ${social.platform}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info) => (
              <div 
                key={info.label} 
                className="flex items-center"
              >
                <span className="text-gray-400 mr-3">{info.icon}</span>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  <p className="text-white">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} TheIntegrityCircle. All rights reserved.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;