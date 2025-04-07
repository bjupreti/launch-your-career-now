
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-brand-blue-dark">LaunchCareer</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Accelerate your career journey with AI-powered solutions and expert guidance.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/resume" className="text-gray-600 hover:text-brand-teal transition-colors text-sm">
                  AI Resume Generation
                </Link>
              </li>
              <li>
                <Link to="/interview" className="text-gray-600 hover:text-brand-teal transition-colors text-sm">
                  Expert Interviews
                </Link>
              </li>
              <li>
                <Link to="/campaign" className="text-gray-600 hover:text-brand-teal transition-colors text-sm">
                  Job Application Campaign
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-teal transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-600 hover:text-brand-teal transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-brand-teal transition-colors text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-brand-teal transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-brand-teal transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} LaunchCareer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
