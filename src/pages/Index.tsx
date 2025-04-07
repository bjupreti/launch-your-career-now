
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import Testimonial from "@/components/Testimonial";
import { FileText, Users, Briefcase } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Launch Your Career with AI-Powered Precision
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Get personalized resumes, expert interviews, and automatic job applications that land you offers, not just interviews.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:text-white hover:bg-white/10" asChild>
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Help You Succeed</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform combines AI technology with human expertise to create a personalized job search experience unlike any other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FileText size={24} />} 
              title="AI Resume Generation" 
              description="Get a professional resume crafted by our AI and fine-tuned by experts."
              price="Starting at $20"
            />
            
            <FeatureCard 
              icon={<Users size={24} />} 
              title="Professional Interview" 
              description="Schedule a detailed interview with our team to verify your identity and align your career goals."
              price="$100 per session"
              isPrimary={true}
            />
            
            <FeatureCard 
              icon={<Briefcase size={24} />} 
              title="Job Application Campaign" 
              description="Let our AI apply to relevant jobs on your behalf, with payment only for secured interviews."
              price="Pay only for results"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process gets you from sign-up to job offers in record time.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Steps */}
              <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
              
              {/* Step 1 */}
              <div className="relative mb-12 md:mb-24">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                    <div className="md:text-right">
                      <h3 className="text-xl font-bold mb-2">Create Your Account</h3>
                      <p className="text-gray-600">
                        Sign up and create your profile with basic information to get started on your career journey.
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white z-10">
                    1
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative mb-12 md:mb-24">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white z-10">
                    2
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-xl font-bold mb-2">Generate Your Resume</h3>
                    <p className="text-gray-600">
                      Fill out our form and let our AI create a professional resume that highlights your strengths and experience.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative mb-12 md:mb-24">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                    <div className="md:text-right">
                      <h3 className="text-xl font-bold mb-2">Complete Your Interview</h3>
                      <p className="text-gray-600">
                        Schedule and complete your verification interview with our team to ensure your identity and career goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white z-10">
                    3
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white z-10">
                    4
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-xl font-bold mb-2">Start Your Job Campaign</h3>
                    <p className="text-gray-600">
                      Activate your AI-powered job application campaign and only pay when you secure interviews with top companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from professionals who transformed their careers using our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial 
              quote="Within three weeks of using LaunchCareer, I had interviews with five top tech companies and ultimately landed my dream job at Google."
              author="Sarah K."
              position="Software Engineer"
              company="Google"
            />
            
            <Testimonial 
              quote="The AI resume generator was a game-changer. It highlighted skills I hadn't even considered emphasizing, and the expert review made it flawless."
              author="Michael T."
              position="Product Manager"
              company="Airbnb"
            />
            
            <Testimonial 
              quote="I was skeptical about the AI job application approach, but it worked! I received more interview invitations in one week than I had in months of applying myself."
              author="Jessica L."
              position="Marketing Director"
              company="Spotify"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue-dark py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Career?</h2>
            <p className="text-lg mb-8 text-white/80">
              Join thousands of professionals who've accelerated their careers with our AI-powered platform.
            </p>
            <Button size="lg" className="bg-brand-teal hover:bg-brand-teal-light text-white" asChild>
              <Link to="/signup">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
