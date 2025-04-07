
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Privacy = () => {
  const lastUpdated = "April 5, 2025";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-8">Last Updated: {lastUpdated}</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="mb-4">
                  At LaunchCareer, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
                <p>
                  Please read this Privacy Policy carefully. By accessing our website and using our services, you consent to the practices described in this policy.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium mb-2">Personal Data</h3>
                <p className="mb-4">
                  We collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Create an account and use our services</li>
                  <li>Submit your resume for AI enhancement</li>
                  <li>Schedule interviews with our team</li>
                  <li>Participate in our job application campaign</li>
                  <li>Contact our customer support team</li>
                </ul>
                
                <h3 className="text-xl font-medium mb-2">Types of Information</h3>
                <p className="mb-4">
                  The personal information we collect may include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Resume data (work history, education, skills, achievements)</li>
                  <li>Professional and career preferences</li>
                  <li>Payment information (processed through secure third-party providers)</li>
                </ul>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Create and manage your account</li>
                  <li>Provide our resume enhancement services</li>
                  <li>Facilitate interviews with our team</li>
                  <li>Apply to jobs on your behalf (with your explicit consent)</li>
                  <li>Process payments</li>
                  <li>Improve our services and develop new features</li>
                  <li>Communicate with you about service updates and career opportunities</li>
                </ul>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">4. How We Share Your Information</h2>
                <p className="mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Potential employers (only as part of our job application campaign and with your consent)</li>
                  <li>Service providers who assist us in operating our website and providing our services</li>
                  <li>Payment processors to complete transactions</li>
                  <li>Legal authorities when required by law or to protect our rights</li>
                </ul>
                <p>
                  We do not sell your personal information to third parties.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                <p className="mb-4">
                  We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">6. Your Privacy Rights</h2>
                <p className="mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>The right to access the personal information we have about you</li>
                  <li>The right to request that we correct or update your personal information</li>
                  <li>The right to request that we delete your personal information</li>
                  <li>The right to opt-out of certain data processing practices</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at privacy@launchcareer.com.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
                <p>
                  If you have questions or concerns about this Privacy Policy, please contact us at privacy@launchcareer.com or through our <Link to="/contact" className="text-brand-teal hover:underline">contact form</Link>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
