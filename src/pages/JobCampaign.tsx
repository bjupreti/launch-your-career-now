
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Building, CheckCircle, AlertCircle } from "lucide-react";

const JobCampaign = () => {
  const { toast } = useToast();
  const [preferredCompanies, setPreferredCompanies] = useState<string[]>([]);
  const [jobLevel, setJobLevel] = useState<string>("mid");
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  
  const handleCompanyTypeChange = (value: string) => {
    setPreferredCompanies(
      preferredCompanies.includes(value)
        ? preferredCompanies.filter((item) => item !== value)
        : [...preferredCompanies, value]
    );
  };
  
  const handleJobTypeChange = (value: string) => {
    setJobTypes(
      jobTypes.includes(value)
        ? jobTypes.filter((item) => item !== value)
        : [...jobTypes, value]
    );
  };
  
  const handleStartCampaign = () => {
    if (preferredCompanies.length === 0 || jobTypes.length === 0) {
      toast({
        title: "Please complete your preferences",
        description: "You need to select at least one company type and job type.",
        variant: "destructive"
      });
      return;
    }
    
    setShowSuccessDialog(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4" variant="secondary">Advanced Feature</Badge>
            <h1 className="text-3xl font-bold text-brand-blue-dark">AI-Powered Job Application Campaign</h1>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Let our AI apply to relevant jobs on your behalf and only pay when you secure interviews.
            </p>
          </div>
          
          <div className="md:grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building size={18} />
                    <CardTitle>Target Companies</CardTitle>
                  </div>
                  <CardDescription>Select the types of companies you want to work for</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="bigtech"
                        checked={preferredCompanies.includes("bigtech")}
                        onCheckedChange={() => handleCompanyTypeChange("bigtech")}
                      />
                      <div className="grid gap-1.5">
                        <Label htmlFor="bigtech" className="font-medium">Big Tech Companies</Label>
                        <p className="text-sm text-gray-500">Google, Apple, Microsoft, Amazon, Meta, etc.</p>
                        <p className="text-xs text-brand-teal">Fee: $200 per secured interview</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="startup" 
                        checked={preferredCompanies.includes("startup")}
                        onCheckedChange={() => handleCompanyTypeChange("startup")}
                      />
                      <div className="grid gap-1.5">
                        <Label htmlFor="startup" className="font-medium">Startups</Label>
                        <p className="text-sm text-gray-500">Early to late-stage startups with strong growth potential</p>
                        <p className="text-xs text-brand-teal">Fee: $50 per secured interview</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="enterprise" 
                        checked={preferredCompanies.includes("enterprise")}
                        onCheckedChange={() => handleCompanyTypeChange("enterprise")}
                      />
                      <div className="grid gap-1.5">
                        <Label htmlFor="enterprise" className="font-medium">Enterprise Companies</Label>
                        <p className="text-sm text-gray-500">Fortune 500 companies, large enterprises</p>
                        <p className="text-xs text-brand-teal">Fee: $150 per secured interview</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} />
                    <CardTitle>Job Preferences</CardTitle>
                  </div>
                  <CardDescription>Configure your job search criteria</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Job Level</h3>
                      <RadioGroup defaultValue="mid" value={jobLevel} onValueChange={setJobLevel}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="entry" id="entry" />
                          <Label htmlFor="entry">Entry Level (0-2 years experience)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mid" id="mid" />
                          <Label htmlFor="mid">Mid Level (3-5 years experience)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="senior" id="senior" />
                          <Label htmlFor="senior">Senior Level (6+ years experience)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-sm font-medium mb-3">Job Types</h3>
                      <div className="grid gap-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="fulltime" 
                            checked={jobTypes.includes("fulltime")}
                            onCheckedChange={() => handleJobTypeChange("fulltime")}
                          />
                          <Label htmlFor="fulltime">Full-time</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="contract" 
                            checked={jobTypes.includes("contract")}
                            onCheckedChange={() => handleJobTypeChange("contract")}
                          />
                          <Label htmlFor="contract">Contract</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="remote" 
                            checked={jobTypes.includes("remote")}
                            onCheckedChange={() => handleJobTypeChange("remote")}
                          />
                          <Label htmlFor="remote">Remote Only</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="hybrid" 
                            checked={jobTypes.includes("hybrid")}
                            onCheckedChange={() => handleJobTypeChange("hybrid")}
                          />
                          <Label htmlFor="hybrid">Hybrid</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={handleStartCampaign}>Start Campaign</Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="mt-6 md:mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-brand-teal text-white flex items-center justify-center text-xs">1</span>
                        Configure Your Campaign
                      </h3>
                      <p className="text-xs text-gray-500 ml-7">
                        Select your target companies, job level, and preferences.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-brand-teal text-white flex items-center justify-center text-xs">2</span>
                        AI Applications
                      </h3>
                      <p className="text-xs text-gray-500 ml-7">
                        Our AI applies to matching job positions using your resume and profile.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-brand-teal text-white flex items-center justify-center text-xs">3</span>
                        Track Progress
                      </h3>
                      <p className="text-xs text-gray-500 ml-7">
                        Monitor application status in your dashboard.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-brand-teal text-white flex items-center justify-center text-xs">4</span>
                        Pay Only for Results
                      </h3>
                      <p className="text-xs text-gray-500 ml-7">
                        You're charged only when you secure an interview.
                      </p>
                    </div>
                    
                    <div className="border-t pt-4 mt-4">
                      <div className="flex items-start gap-2">
                        <AlertCircle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-600">
                          <span className="font-medium">Note:</span> This feature is only available after completing your mandatory interview verification.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Campaign Ready to Launch!</DialogTitle>
            <DialogDescription>
              Your AI-powered job application campaign is set to begin.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center py-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium">Campaign Created Successfully</h3>
              <p className="text-sm text-gray-500 mt-2 mb-6">
                Our AI will begin applying to jobs that match your criteria. You'll be notified when interviews are secured.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-left mb-4">
                <h4 className="font-medium text-sm mb-2">Campaign Summary:</h4>
                <div className="text-sm">
                  <p><span className="text-gray-600">Company Types:</span> {preferredCompanies.join(", ")}</p>
                  <p><span className="text-gray-600">Job Level:</span> {jobLevel}</p>
                  <p><span className="text-gray-600">Job Types:</span> {jobTypes.join(", ")}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Remember: You'll only be charged when interviews are secured - $200 for big tech companies and $50 for startups.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setShowSuccessDialog(false)}>View Dashboard</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default JobCampaign;
