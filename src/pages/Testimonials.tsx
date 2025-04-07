
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "LaunchCareer completely transformed my job search. Their AI resume service helped me land interviews at companies that previously ignored my applications.",
      author: "Jamie Rodriguez",
      position: "Software Engineer",
      company: "TechGlobal"
    },
    {
      quote: "The personalized interview with the team was invaluable. They understood my career goals and helped me position myself perfectly for the roles I wanted.",
      author: "Alex Chen",
      position: "Product Manager",
      company: "InnovateCorp"
    },
    {
      quote: "The AI job application campaign was worth every penny. I secured three interviews at top companies within two weeks, something I couldn't accomplish after months of applying on my own.",
      author: "Taylor Johnson",
      position: "Marketing Director",
      company: "BrandForward"
    },
    {
      quote: "I was skeptical at first, but LaunchCareer delivered results. Their resume service highlighted my strengths in ways I hadn't considered before.",
      author: "Morgan Williams",
      position: "Data Scientist",
      company: "AnalyticsPro"
    },
    {
      quote: "The team's attention to detail during the interview process ensured that I was presented to employers in the best possible light. Highly recommend!",
      author: "Casey Thompson",
      position: "UX Designer",
      company: "CreativeEdge"
    },
    {
      quote: "After struggling with my job search for months, LaunchCareer's services helped me land my dream role within weeks.",
      author: "Jordan Lee",
      position: "Operations Manager",
      company: "LogisticsMaster"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-brand-blue-dark text-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h1>
              <p className="text-xl text-gray-100">
                See how LaunchCareer has transformed the careers and lives of professionals like you.
              </p>
            </div>
          </div>
        </section>
        
        {/* Testimonials Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
              Join thousands of professionals who have accelerated their careers with our AI-powered platform.
            </p>
            <Button asChild size="lg">
              <Link to="/signup">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
