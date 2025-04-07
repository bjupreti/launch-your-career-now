
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building, Users, Globe, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-brand-blue-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">About LaunchCareer</h1>
              <p className="text-xl text-gray-100">
                We're on a mission to transform how people find meaningful employment through AI-powered tools and personalized guidance.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg mx-auto">
                <p className="mb-4">
                  LaunchCareer was founded in 2024 by a team of technology and recruitment professionals who saw a fundamental problem in the job market: qualified candidates were getting lost in automated systems, while employers struggled to find the right talent.
                </p>
                <p className="mb-4">
                  We believe that finding the right job shouldn't be about gaming algorithms or sending hundreds of applications into the void. It should be about connecting your unique skills and passions with organizations where you can truly thrive.
                </p>
                <p>
                  That's why we've built a platform that combines cutting-edge AI technology with human expertise to help job seekers stand out, make meaningful connections, and land opportunities that align with their career goals.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="mb-4 w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Human-Centered</h3>
                <p className="text-gray-600">
                  We put people first. Technology is our tool, but human connection is our foundation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="mb-4 w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                  <Building size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We're committed to honesty, transparency, and ethical practices in everything we do.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="mb-4 w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                <p className="text-gray-600">
                  We're constantly evolving, improving our platform based on feedback and new insights.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="mb-4 w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
                <p className="text-gray-600">
                  We're dedicated to creating opportunities for people of all backgrounds and experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Alex Morgan",
                  role: "Founder & CEO",
                  bio: "Former tech recruiter with 15+ years of experience at leading companies.",
                  imgUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                },
                {
                  name: "Jamie Taylor",
                  role: "Chief Technology Officer",
                  bio: "AI expert with a passion for creating technology that solves real human problems.",
                  imgUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                },
                {
                  name: "Taylor Reed",
                  role: "Head of Career Services",
                  bio: "Career coach with expertise in helping professionals navigate career transitions.",
                  imgUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="mb-4 w-24 h-24 mx-auto overflow-hidden rounded-full">
                    <img 
                      src={member.imgUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-center">{member.name}</h3>
                  <p className="text-brand-teal text-center mb-3">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-brand-blue-dark text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Us on Our Mission</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to transform your job search experience and connect with opportunities that matter?
            </p>
            <a 
              href="/signup" 
              className="inline-block bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold py-3 px-8 rounded-md transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
