
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 md:py-6 px-4 sm:px-6 lg:px-8 bg-white border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-brand-blue-dark">LaunchCareer</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/testimonials" className="text-gray-700 hover:text-brand-teal transition-colors">
            Testimonials
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-brand-teal transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-brand-teal transition-colors">
            About
          </Link>
          <div className="flex items-center space-x-3">
            <Button variant="outline" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-4 bg-white">
          <div className="flex flex-col space-y-3">
            <Link
              to="/testimonials"
              className="px-3 py-2 text-gray-700 hover:text-brand-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className="px-3 py-2 text-gray-700 hover:text-brand-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 text-gray-700 hover:text-brand-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" asChild className="w-full justify-center">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  Log In
                </Link>
              </Button>
              <Button asChild className="w-full justify-center">
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
