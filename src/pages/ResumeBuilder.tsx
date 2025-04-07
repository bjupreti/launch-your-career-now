
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Briefcase, GraduationCap, Award, CheckCircle } from "lucide-react";

const ResumeBuilder = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showUpsellDialog, setShowUpsellDialog] = useState(false);

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowPaymentDialog(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePayment = () => {
    // In a real app, this would process the payment
    setShowPaymentDialog(false);
    setShowSuccessDialog(true);
  };

  const handleDismissSuccess = () => {
    setShowSuccessDialog(false);
    setShowUpsellDialog(true);
  };

  const handleBookReview = () => {
    toast({
      title: "Review booked successfully",
      description: "We'll contact you shortly to schedule your resume review session.",
    });
    setShowUpsellDialog(false);
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-2">
        {[1, 2, 3, 4].map((step) => (
          <React.Fragment key={step}>
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium 
              ${currentStep === step 
                ? 'bg-brand-teal text-white' 
                : currentStep > step 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-gray-100 text-gray-400'}`}
            >
              {currentStep > step ? <CheckCircle size={16} /> : step}
            </div>
            {step < 4 && (
              <div 
                className={`w-8 h-0.5 
                ${currentStep > step ? 'bg-green-200' : 'bg-gray-200'}`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6 text-lg font-medium text-brand-blue">
              <Briefcase size={24} />
              <h2>Work Experience</h2>
            </div>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input id="jobTitle" placeholder="Software Engineer" />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Acme Inc." />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="San Francisco, CA" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" placeholder="Jan 2020" />
                </div>
                <div>
                  <Label htmlFor="endDate">End Date</Label>
                  <Input id="endDate" placeholder="Present" />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe your responsibilities and achievements..." className="min-h-[100px]" />
              </div>
              <div>
                <Button type="button" variant="outline" className="mt-2">
                  + Add Another Experience
                </Button>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6 text-lg font-medium text-brand-blue">
              <GraduationCap size={24} />
              <h2>Education</h2>
            </div>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="degree">Degree</Label>
                <Input id="degree" placeholder="Bachelor of Science in Computer Science" />
              </div>
              <div>
                <Label htmlFor="school">School</Label>
                <Input id="school" placeholder="University of California, Berkeley" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="eduStartDate">Start Date</Label>
                  <Input id="eduStartDate" placeholder="Sep 2016" />
                </div>
                <div>
                  <Label htmlFor="eduEndDate">End Date</Label>
                  <Input id="eduEndDate" placeholder="May 2020" />
                </div>
              </div>
              <div>
                <Label htmlFor="gpa">GPA (Optional)</Label>
                <Input id="gpa" placeholder="3.8" />
              </div>
              <div>
                <Button type="button" variant="outline" className="mt-2">
                  + Add Another Education
                </Button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6 text-lg font-medium text-brand-blue">
              <Award size={24} />
              <h2>Projects & Skills</h2>
            </div>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="projectName">Project Name</Label>
                <Input id="projectName" placeholder="E-commerce Website" />
              </div>
              <div>
                <Label htmlFor="projectDescription">Project Description</Label>
                <Textarea id="projectDescription" placeholder="Describe your project..." className="min-h-[80px]" />
              </div>
              <div>
                <Label htmlFor="skills">Skills (comma separated)</Label>
                <Input id="skills" placeholder="React, JavaScript, Node.js, AWS" />
              </div>
              <div>
                <Button type="button" variant="outline" className="mt-2">
                  + Add Another Project
                </Button>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6 text-lg font-medium text-brand-blue">
              <FileText size={24} />
              <h2>Additional Information</h2>
            </div>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea id="summary" placeholder="Write a brief summary highlighting your professional background and key strengths..." className="min-h-[100px]" />
              </div>
              <div>
                <Label htmlFor="certifications">Certifications (Optional)</Label>
                <Input id="certifications" placeholder="AWS Certified Developer, Google Cloud Professional" />
              </div>
              <div>
                <Label htmlFor="languages">Languages (Optional)</Label>
                <Input id="languages" placeholder="English (Native), Spanish (Intermediate)" />
              </div>
              <div>
                <Label htmlFor="interests">Interests (Optional)</Label>
                <Input id="interests" placeholder="Open Source Contributing, Hiking, Photography" />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-brand-blue-dark">Create Your AI-Powered Resume</h1>
            <p className="text-gray-600 mt-2">
              Fill in your details below and our AI will generate a professional resume for you.
            </p>
          </div>
          
          {renderStepIndicator()}
          
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmitForm}>
                {renderStep()}
                
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <Button type="button" variant="outline" onClick={handlePrevious}>
                      Previous
                    </Button>
                  )}
                  <div className={currentStep === 1 ? 'ml-auto' : ''}>
                    <Button type="submit">
                      {currentStep < 4 ? 'Next' : 'Generate Resume'}
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Payment Dialog */}
      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Generate Your AI Resume</DialogTitle>
            <DialogDescription>
              Our AI will create a professionally formatted resume that highlights your experience and skills.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="border rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">AI Resume Generation</h3>
                  <p className="text-sm text-gray-500">Professional formatting and optimization</p>
                </div>
                <div className="font-medium">$20.00</div>
              </div>
            </div>
            <div className="border-t pt-4 flex justify-between font-medium">
              <div>Total</div>
              <div>$20.00</div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPaymentDialog(false)}>Cancel</Button>
            <Button onClick={handlePayment}>Pay $20.00</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Resume Generated Successfully!</DialogTitle>
            <DialogDescription>
              Your AI-powered resume has been created and is ready for download.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center py-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium">Your resume is ready</h3>
              <p className="text-sm text-gray-500 mt-2 mb-4">
                We've created a professional resume based on your information.
              </p>
              <Button className="mb-2 w-full">Download Resume</Button>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleDismissSuccess}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Upsell Dialog */}
      <Dialog open={showUpsellDialog} onOpenChange={setShowUpsellDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enhance Your Resume with Expert Feedback</DialogTitle>
            <DialogDescription>
              Get personalized feedback from our professional resume reviewers to make your resume even better.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Professional Resume Review</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>30-minute call with a resume expert</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Industry-specific optimization tips</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Written feedback document</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>One round of revisions</span>
                </li>
              </ul>
              <div className="font-medium text-center">$30.00</div>
            </div>
          </div>
          <DialogFooter className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
            <Button variant="outline" className="sm:order-1" onClick={() => setShowUpsellDialog(false)}>No, Thanks</Button>
            <Button className="sm:order-2" onClick={handleBookReview}>Book Review for $30.00</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default ResumeBuilder;
