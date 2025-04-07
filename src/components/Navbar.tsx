
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link 
      to={to} 
      className={`relative px-1 py-2 text-base transition-colors duration-200 ${
        isActive(to) 
          ? "text-brand-teal font-medium" 
          : "text-gray-700 hover:text-brand-teal"
      } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-brand-teal after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100`}
    >
      {children}
    </Link>
  );

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 py-4 md:py-3 px-4 sm:px-6 lg:px-8 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-white/80 shadow-sm" : "bg-white/0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 z-10">
          <span className="text-xl font-bold text-gradient">LaunchCareer</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <NavLink to="/testimonials">Testimonials</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" asChild className="rounded-full border-brand-teal text-brand-teal hover:bg-brand-teal/10 transition-all">
              <Link to="/login">Log In</Link>
            </Button>
            <Button asChild className="rounded-full bg-gradient-to-r from-brand-blue to-brand-teal hover:shadow-glow transition-all">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 p-2 rounded-full hover:bg-gray-100/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 pt-16 bg-white/95 backdrop-blur-lg z-0 animate-fade-in">
          <div className="flex flex-col space-y-2 pt-8 px-6">
            <Link
              to="/testimonials"
              className="px-3 py-4 text-lg text-gray-800 hover:text-brand-teal border-b border-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className="px-3 py-4 text-lg text-gray-800 hover:text-brand-teal border-b border-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="px-3 py-4 text-lg text-gray-800 hover:text-brand-teal border-b border-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-6 flex flex-col space-y-4">
              <Button variant="outline" asChild className="w-full justify-center rounded-full border-brand-teal text-brand-teal">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  Log In
                </Link>
              </Button>
              <Button asChild className="w-full justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-teal">
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
