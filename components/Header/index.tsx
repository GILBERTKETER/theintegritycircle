"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Menu, ChevronDown, Search, Bell, User, X } from 'lucide-react';

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

  // Sample notifications
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

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm">
            Call us: +254 700 000 000 | Email: info@integritycircle.co.ke
          </div>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-blue-200">Report Corruption</a>
            <a href="#" className="hover:text-blue-200">File a Complaint</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-900">
                TheIntegrityCircle
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {Object.entries(navItems).map(([key, value]) => (
                <div
                  key={key}
                  className="relative group nav-dropdown-group"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-900"
                    // aria-expanded={String(activeDropdown === key)}
                    aria-haspopup="true"
                  >
                    <span>{key}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {activeDropdown === key && (
                    <div 
                      className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <div className="py-2">
                        {value.items.map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                            role="menuitem"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Search Section */}
              <div ref={searchRef} className="relative">
                <button 
                  className="text-gray-600 hover:text-blue-900"
                  aria-label="Search"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  type="button"
                >
                  <Search className="w-5 h-5" />
                </button>
                
                {isSearchOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-xl p-4">
                    <div className="flex items-center gap-2">
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                      <button
                        onClick={() => setIsSearchOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                        type="button"
                      >{""}
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Notifications Section */}
              <div ref={notificationRef} className="relative">
                <button 
                  className="text-gray-600 hover:text-blue-900 relative"
                  aria-label="Notifications"
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  type="button"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${
                            !notification.isRead ? 'bg-blue-50' : ''
                          }`}
                        >
                          <div className="font-medium text-gray-900">{notification.title}</div>
                          <p className="text-sm text-gray-600">{notification.message}</p>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 border-t border-gray-200">
                      <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                        View all notifications
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <button 
                className="flex items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                aria-label="Sign In"
                type="button"
              >
                <User className="w-5 h-5" />
                <span>Sign In</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-blue-900"
                // aria-expanded={String(isOpen)}
                aria-label="Toggle mobile menu"
                type="button"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden" role="navigation">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {Object.entries(navItems).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <button 
                    className="w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                    aria-expanded="false"
                    type="button"
                  >
                    {key}
                  </button>
                  <div className="pl-4" role="menu" aria-orientation="vertical">
                    {value.items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-900"
                        role="menuitem"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div className="px-3 py-4 space-y-4">
                <button 
                  className="w-full flex justify-center items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                  aria-label="Sign In"
                  type="button"
                >
                  <User className="w-5 h-5" />
                  <span>Sign In</span>
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;