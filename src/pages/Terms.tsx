
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Terms = () => {
  const lastUpdated = "April 5, 2025";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-sm text-gray-500 mb-8">Last Updated: {lastUpdated}</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to LaunchCareer. These Terms of Service govern your use of our website and services. By accessing our website or using our services, you agree to be bound by these Terms.
                </p>
                <p>
                  Please read these Terms carefully. If you do not agree with these Terms, please do not use our services.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
                <p className="mb-4">
                  Throughout these Terms, the following definitions apply:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>"We", "Us", "Our"</strong> refers to LaunchCareer.</li>
                  <li><strong>"Service", "Services"</strong> refers to the AI Resume Generation, Professional Interview, and Job Application Campaign services provided by LaunchCareer.</li>
                  <li><strong>"User", "You", "Your"</strong> refers to the individual accessing our website or using our services.</li>
                  <li><strong>"Website"</strong> refers to the LaunchCareer platform accessible at www.launchcareer.com.</li>
                </ul>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
                <p className="mb-4">
                  To use our services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
                <p className="mb-4">
                  You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">4. Services and Payments</h2>
                <h3 className="text-xl font-medium mb-2">4.1 AI Resume Generation</h3>
                <p className="mb-4">
                  Our AI Resume Generation service costs $20 per resume. This service includes AI-assisted optimization of your resume based on the information you provide.
                </p>
                
                <h3 className="text-xl font-medium mb-2">4.2 Professional Interview</h3>
                <p className="mb-4">
                  Our Professional Interview service costs $100. This service includes a detailed interview with our team to verify your identity and assess your career goals.
                </p>
                
                <h3 className="text-xl font-medium mb-2">4.3 Job Application Campaign</h3>
                <p className="mb-4">
                  Our Job Application Campaign service charges fees only if interviews are secured. The fees are:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>$200 for interviews with big tech companies</li>
                  <li>$50 for interviews with startups</li>
                </ul>
                
                <h3 className="text-xl font-medium mb-2">4.4 Payments</h3>
                <p className="mb-4">
                  All payments are processed securely through our payment processors. By making a payment, you authorize us to charge your payment method for the amount indicated.
                </p>
                
                <h3 className="text-xl font-medium mb-2">4.5 Refunds</h3>
                <p className="mb-4">
                  Refund policies vary by service:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>AI Resume Generation: Full refund if requested within 7 days of purchase.</li>
                  <li>Professional Interview: No refunds after the interview has been conducted.</li>
                  <li>Job Application Campaign: No refunds for interviews secured.</li>
                </ul>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
                <p className="mb-4">
                  You retain ownership of the content you provide to us, including your resume and other career information. However, you grant us a non-exclusive, worldwide, royalty-free license to use, store, and process this content for the purpose of providing our services.
                </p>
                <p className="mb-4">
                  You represent and warrant that your content does not violate any third-party rights and complies with all applicable laws.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                <p className="mb-4">
                  The LaunchCareer website, logo, and all content, features, and functionality are owned by LaunchCareer and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="mb-4">
                  You may not use our trademarks, logos, or content without our express written permission.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                <p className="mb-4">
                  To the maximum extent permitted by law, LaunchCareer shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Your use of or inability to use our services</li>
                  <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                  <li>Any interruption or cessation of transmission to or from our website</li>
                  <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our website</li>
                </ul>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
                <p className="mb-4">
                  We may terminate or suspend your account and access to our services at our sole discretion, without notice, for any reason, including if we believe that you have violated these Terms.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
                <p className="mb-4">
                  We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. You are advised to review these Terms periodically for any changes.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us at legal@launchcareer.com or through our <Link to="/contact" className="text-brand-teal hover:underline">contact form</Link>.
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

export default Terms;
