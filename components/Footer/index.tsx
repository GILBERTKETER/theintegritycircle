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
import { motion } from 'framer-motion';

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
        { label: "Contact Us", href: "/contact-us" }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 8,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  return (
    <motion.footer
      className="bg-gray-900 text-gray-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Newsletter Section */}
      <motion.div
        className="border-b border-gray-800"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              className="text-center md:text-left"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Updated with TheIntegrityCircle
              </h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for updates on government projects and activities
              </p>
            </motion.div>
            <motion.div
              className="w-full md:w-auto"
              variants={itemVariants}
            >
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow md:w-64"
                  aria-label="Email for newsletter"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                  type="submit"
                  className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
        >
          {/* About Section */}
          <motion.div
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              TheIntegrityCircle
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-6"
              variants={itemVariants}
            >
              Empowering citizens with transparency and accountability in government projects
              across Kenya. Together we build a more informed and engaged society.
            </motion.p>
            <motion.div
              className="flex gap-4"
              variants={containerVariants}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`Follow us on ${social.platform}`}
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links Sections */}
          {footerSections.map((section) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
            >
              <motion.h3
                className="text-white font-semibold mb-4"
                variants={itemVariants}
              >
                {section.title}
              </motion.h3>
              <motion.ul
                className="space-y-2"
                variants={containerVariants}
              >
                {section.links.map((link) => (
                  <motion.li
                    key={link.label}
                    variants={itemVariants}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 2 }}
                      >
                        <ArrowRight className="w-4 h-4 mr-2" />
                      </motion.span>
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800"
          variants={containerVariants}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.label}
                className="flex items-center"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <motion.span
                  className="text-gray-400 mr-3"
                  whileHover={{ rotate: 15 }}
                >
                  {info.icon}
                </motion.span>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  <p className="text-white">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-gray-800"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            variants={containerVariants}
          >
            <motion.div
              className="text-gray-400 text-sm text-center md:text-left"
              variants={itemVariants}
            >
              © {new Date().getFullYear()} TheIntegrityCircle. All rights reserved.
            </motion.div>
            <motion.div
              className="flex gap-6 mt-4 md:mt-0"
              variants={containerVariants}
            >
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-400 hover:text-white text-sm"
                  whileHover={{ y: -2 }}
                  variants={itemVariants}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;