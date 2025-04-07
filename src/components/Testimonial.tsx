
import React from "react";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonial = ({ quote, author, position, company }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="mb-4 text-brand-teal">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2 .34-.21.63-.51.63-.88 0-.41-.26-.78-.64-.92-.54-.2-1.25-.14-2.04.16-1.83.69-3.22 2.14-3.98 3.86-.76 1.71-.51 3.47.5 4.79 1.04 1.33 3.18 2.05 5.42 1.13 1.24-.51 2.19-1.47 2.76-2.79.46-1.06.62-2.23.43-3.28l-.01-.06zm10.11 0c0-.88-.23-1.618-.69-2.217-.326-.41-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2 .34-.21.63-.51.63-.88 0-.41-.26-.78-.64-.92-.54-.2-1.25-.14-2.04.16-1.83.69-3.22 2.14-3.98 3.86-.76 1.71-.51 3.47.5 4.79 1.04 1.33 3.18 2.05 5.42 1.13 1.24-.51 2.19-1.47 2.76-2.79.46-1.06.62-2.23.43-3.28l-.01-.06z" />
        </svg>
      </div>
      <blockquote className="text-gray-700 mb-4">
        {quote}
      </blockquote>
      <div className="mt-4">
        <p className="font-medium text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{position}, {company}</p>
      </div>
    </div>
  );
};

export default Testimonial;
