"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Menu, ChevronDown, Search, Bell, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface NavItem {
  items: string[];
}

interface NavItems {
  [key: string]: NavItem;
}

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const [notifications] = useState<Notification[]>([
    {
      id: 1,
      title: "New Project Update",
      message: "The county development project has been updated",
      time: "2 hours ago",
      isRead: false
    },
    {
      id: 2,
      title: "Document Shared",
      message: "New guidelines have been shared in Resources",
      time: "5 hours ago",
      isRead: false
    },
    {
      id: 3,
      title: "Community Event",
      message: "Don't forget about tomorrow's community meeting",
      time: "1 day ago",
      isRead: true
    }
  ]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const navItems: NavItems = {
    "Counties": {
      items: ["Browse Counties", "County Performance", "Development Projects", "County Resources"]
    },
    "Projects": {
      items: ["Ongoing Projects", "Completed Projects", "Project Tracking", "Impact Assessment"]
    },
    "Resources": {
      items: ["Documents", "Reports", "Guidelines", "Open Data"]
    },
    "Community": {
      items: ["Forums", "Events", "Success Stories", "Get Involved"]
    }
  };

  const handleMouseEnter = (key: string): void => {
    setActiveDropdown(key);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>): void => {
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (!relatedTarget?.closest('.nav-dropdown-group')) {
      setActiveDropdown(null);
    }
  };

  const toggleMobileMenu = (): void => {
    setIsOpen(!isOpen);
  };

  // Animation variants


  const slideDown = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <motion.div
        className="bg-blue-900 text-white px-4 py-2"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            className="text-sm"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Call us: +254 700 000 000 | Email: info@integritycircle.co.ke
          </motion.div>
          <motion.div
            className="flex gap-4 text-sm"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a href="#" className="hover:text-blue-200">Report Corruption</a>
            <a href="#" className="hover:text-blue-200">File a Complaint</a>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          {/* Rest of your existing header code remains exactly the same */}
          {/* Copy everything from your existing header starting from the div with className="flex justify-between items-center h-20" */}
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <motion.div
              className="flex items-center"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="text-2xl font-bold text-blue-900">
                TheIntegrityCircle
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {Object.entries(navItems).map(([key, value], index) => (
                <motion.div
                  key={key}
                  className="relative group nav-dropdown-group"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    type="button"
                    className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-900"
                    aria-haspopup="true"
                  >
                    <span>{key}</span>
                    <motion.div
                      animate={{ rotate: activeDropdown === key ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeDropdown === key && (
                      <motion.div
                        className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
                        role="menu"
                        aria-orientation="vertical"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <div className="py-2">
                          {value.items.map((item, itemIndex) => (
                            <motion.a
                              key={item}
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                              role="menuitem"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: itemIndex * 0.05 }}
                            >
                              {item}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Right Section */}
            <motion.div
              className="hidden lg:flex items-center space-x-6"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {/* Search Section */}
              <div ref={searchRef} className="relative">
                <motion.button
                  className="text-gray-600 hover:text-blue-900"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Search"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  type="button"
                >
                  <Search className="w-5 h-5" />
                </motion.button>

                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-xl p-4"
                      variants={slideDown}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <div className="flex items-center gap-2">
                        <motion.input
                          ref={searchInputRef}
                          type="text"
                          placeholder="Search..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          initial={{ width: "80%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.2 }}
                        />
                        <motion.button
                          onClick={() => setIsSearchOpen(false)}
                          className="text-gray-500 hover:text-gray-700"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          type="button"
                        >
                          <X className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Notifications Section */}
              <div ref={notificationRef} className="relative">
                <motion.button
                  className="text-gray-600 hover:text-blue-900 relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Notifications"
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  type="button"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <motion.span
                      className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      {unreadCount}
                    </motion.span>
                  )}
                </motion.button>

                <AnimatePresence>
                  {isNotificationsOpen && (
                    <motion.div
                      className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <div className="p-4 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map((notification, index) => (
                          <motion.div
                            key={notification.id}
                            className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${!notification.isRead ? 'bg-blue-50' : ''
                              }`}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="font-medium text-gray-900">{notification.title}</div>
                            <p className="text-sm text-gray-600">{notification.message}</p>
                            <span className="text-xs text-gray-500">{notification.time}</span>
                          </motion.div>
                        ))}
                      </div>
                      <div className="p-4 border-t border-gray-200">
                        <motion.a
                          href="#"
                          className="text-sm text-blue-600 hover:text-blue-800"
                          whileHover={{ x: 5 }}
                        >
                          View all notifications
                        </motion.a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                className="flex items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Sign In"
                type="button"
              >
                <User className="w-5 h-5" />
                <Link href="/auth/signin">
                  <span>Sign In</span>
                </Link>
              </motion.button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.div
              className="lg:hidden"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <motion.button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-blue-900"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
                type="button"
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="lg:hidden"
              role="navigation"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
            >
              <motion.div
                className="px-2 pt-2 pb-3 space-y-1"
                variants={slideDown}
              >
                {Object.entries(navItems).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    className="space-y-1"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.button
                      className="w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      aria-expanded="false"
                      type="button"
                    >
                      {key}
                    </motion.button>
                    <motion.div
                      className="pl-4"
                      role="menu"
                      aria-orientation="vertical"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {value.items.map((item, itemIndex) => (
                        <motion.a
                          key={item}
                          href="#"
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-900"
                          role="menuitem"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: itemIndex * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          {item}
                        </motion.a>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
                <motion.div
                  className="px-3 py-4 space-y-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button
                    className="w-full flex justify-center items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Sign In"
                    type="button"
                  >
                    <User className="w-5 h-5" />
                    <span>Sign In</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;