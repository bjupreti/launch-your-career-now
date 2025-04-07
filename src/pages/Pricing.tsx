
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "AI Resume Generation",
      price: "$20",
      description: "Transform your resume with AI-powered optimization",
      features: [
        "Professional formatting",
        "ATS-friendly keywords",
        "Skills highlighting",
        "Achievement-focused content",
        "Unlimited revisions for 7 days",
        "Download in multiple formats"
      ],
      cta: "Build My Resume",
      highlight: false,
      link: "/resume"
    },
    {
      title: "Professional Interview",
      price: "$100",
      description: "Personalized career strategy session with our expert team",
      features: [
        "30-minute video consultation",
        "Career path guidance",
        "Resume review included",
        "Job search strategy",
        "Interview preparation tips",
        "Follow-up support for 30 days"
      ],
      cta: "Schedule Interview",
      highlight: true,
      link: "/interview"
    },
    {
      title: "Job Campaign",
      price: "Pay Per Interview",
      description: "Let our AI apply to jobs on your behalf",
      features: [
        "AI job matching",
        "Personalized applications",
        "Pay only for interviews: $50-$200",
        "Real-time application tracking",
        "Interview scheduling assistance",
        "Career coaching support"
      ],
      cta: "Start Campaign",
      highlight: false,
      link: "/campaign"
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
              <p className="text-xl text-gray-100">
                Invest in your career with our results-driven services.
              </p>
            </div>
          </div>
        </section>
        
        {/* Pricing Cards */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`flex flex-col ${
                    plan.highlight ? 'border-brand-teal shadow-lg relative overflow-hidden' : ''
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-brand-teal text-white text-xs font-semibold px-3 py-1 rounded-bl">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.title}</CardTitle>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-3xl font-bold">{plan.price}</span>
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check size={18} className="text-brand-teal mr-2 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      asChild
                      className={`w-full ${plan.highlight ? 'bg-brand-teal hover:bg-brand-teal/90' : ''}`}
                    >
                      <Link to={plan.link}>{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                { 
                  q: "How does the pay-per-interview model work?", 
                  a: "We only charge you when we successfully secure an interview. The fee varies based on the company: $50 for startups and $200 for established tech companies." 
                },
                { 
                  q: "Is there a money-back guarantee?", 
                  a: "Yes. If you're not satisfied with our AI resume service within 7 days, we offer a full refund. For the interview service, we guarantee that if you don't find the session valuable, we'll refund your payment." 
                },
                { 
                  q: "Can I upgrade my plan later?", 
                  a: "Absolutely! You can start with our AI resume service and upgrade to include the professional interview or job application campaign at any time." 
                },
                { 
                  q: "How soon will I see results?", 
                  a: "Our AI resume service delivers results immediately. For the job campaign, most clients begin seeing interview requests within 2-3 weeks, depending on job market conditions and your industry." 
                }
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
