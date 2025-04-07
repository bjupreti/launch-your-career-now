
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, Briefcase, GraduationCap, Award, User, Download, Save, CheckCircle, Trash2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

// Define the resume data structure
type PersonalInfo = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  website?: string;
  summary: string;
};

type WorkExperience = {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};

type Education = {
  id: string;
  degree: string;
  school: string;
  location?: string;
  startDate: string;
  endDate: string;
  gpa?: string;
};

type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string;
  url?: string;
};

type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
};

type ResumeData = {
  personalInfo: PersonalInfo;
  workExperiences: WorkExperience[];
  education: Education[];
  projects: Project[];
  skills: string[];
  certifications: Certification[];
};

const ResumeBuilder = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("personal");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreviewDialog, setShowPreviewDialog] = useState(false);
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    // Try to load saved resume data from localStorage
    const savedData = localStorage.getItem("resumeData");
    return savedData ? JSON.parse(savedData) : {
      personalInfo: {
        fullName: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        website: "",
        summary: "",
      },
      workExperiences: [{
        id: "work-1",
        jobTitle: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      }],
      education: [{
        id: "edu-1",
        degree: "",
        school: "",
        location: "",
        startDate: "",
        endDate: "",
        gpa: "",
      }],
      projects: [{
        id: "proj-1",
        name: "",
        description: "",
        technologies: "",
        url: "",
      }],
      skills: [""],
      certifications: [{
        id: "cert-1",
        name: "",
        issuer: "",
        date: "",
        url: "",
      }],
    };
  });
  
  const [completionPercentage, setCompletionPercentage] = useState(0);

  // Calculate completion percentage
  useEffect(() => {
    const calculateCompletion = () => {
      let total = 0;
      let completed = 0;
      
      // Personal info (required fields)
      if (resumeData.personalInfo.fullName) completed++;
      if (resumeData.personalInfo.email) completed++;
      total += 2;
      
      // Work experience
      const workFields = resumeData.workExperiences.reduce((acc, exp) => {
        if (exp.jobTitle) acc++;
        if (exp.company) acc++;
        if (exp.description) acc++;
        return acc;
      }, 0);
      total += resumeData.workExperiences.length * 3;
      completed += workFields;
      
      // Education
      const eduFields = resumeData.education.reduce((acc, edu) => {
        if (edu.degree) acc++;
        if (edu.school) acc++;
        return acc;
      }, 0);
      total += resumeData.education.length * 2;
      completed += eduFields;
      
      // Skills (at least one)
      if (resumeData.skills.length > 0 && resumeData.skills[0] !== "") completed++;
      total += 1;
      
      setCompletionPercentage(Math.round((completed / total) * 100));
    };
    
    calculateCompletion();
  }, [resumeData]);

  // Save resume data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  const handleInputChange = (field: keyof PersonalInfo, value: string) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value,
      },
    });
  };

  const handleArrayInputChange = <T extends WorkExperience | Education | Project | Certification>(
    section: keyof ResumeData,
    index: number,
    field: keyof T,
    value: string
  ) => {
    const newArray = [...resumeData[section] as any[]];
    newArray[index] = { ...newArray[index], [field]: value };
    setResumeData({
      ...resumeData,
      [section]: newArray,
    });
  };

  const addArrayItem = <T extends WorkExperience | Education | Project | Certification>(
    section: keyof ResumeData,
    template: Omit<T, 'id'>
  ) => {
    const newId = `${section}-${(resumeData[section] as any[]).length + 1}`;
    setResumeData({
      ...resumeData,
      [section]: [...(resumeData[section] as any[]), { ...template, id: newId }],
    });
  };

  const removeArrayItem = (section: keyof ResumeData, index: number) => {
    const newArray = [...resumeData[section] as any[]];
    newArray.splice(index, 1);
    setResumeData({
      ...resumeData,
      [section]: newArray,
    });
  };

  const handleSkillsChange = (skills: string) => {
    setResumeData({
      ...resumeData,
      skills: skills.split(",").map(skill => skill.trim()).filter(Boolean),
    });
  };

  const handleSaveResume = () => {
    // Check for required fields
    if (!resumeData.personalInfo.fullName || !resumeData.personalInfo.email) {
      toast({
        title: "Missing information",
        description: "Please fill in at least your name and email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Resume saved successfully",
      description: "Your resume has been saved. You can continue editing later.",
    });
  };

  const generateResume = () => {
    setIsGenerating(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsGenerating(false);
      setShowPreviewDialog(true);
      toast({
        title: "Resume generated",
        description: "Your resume has been generated and is ready for preview.",
      });
    }, 2000);
  };

  const handleDownloadPdf = () => {
    // In a real implementation, this would generate and download a PDF
    toast({
      title: "Download started",
      description: "Your resume PDF is being downloaded.",
    });
  };

  const renderPersonalInfoTab = () => (
    <div className="space-y-6 transition-opacity duration-300">
      <div className="flex items-center gap-3 mb-6 text-xl font-medium">
        <div className="p-2 bg-brand-blue-dark/10 text-brand-blue-dark rounded-full">
          <User size={20} />
        </div>
        <h2 className="text-gradient font-semibold">Personal Information</h2>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 animate-slide-up">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-sm font-medium">Full Name*</Label>
          <Input 
            id="fullName" 
            value={resumeData.personalInfo.fullName} 
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            placeholder="John Doe" 
            className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">Email*</Label>
          <Input 
            id="email" 
            type="email" 
            value={resumeData.personalInfo.email} 
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="johndoe@example.com" 
            className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
          />
        </div>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
          <Input 
            id="phone" 
            value={resumeData.personalInfo.phone} 
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="(555) 123-4567" 
            className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location" className="text-sm font-medium">Location</Label>
          <Input 
            id="location" 
            value={resumeData.personalInfo.location} 
            onChange={(e) => handleInputChange("location", e.target.value)}
            placeholder="San Francisco, CA" 
            className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
          />
        </div>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="linkedin" className="text-sm font-medium">LinkedIn (Optional)</Label>
          <Input 
            id="linkedin" 
            value={resumeData.personalInfo.linkedin} 
            onChange={(e) => handleInputChange("linkedin", e.target.value)}
            placeholder="linkedin.com/in/johndoe" 
            className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website" className="text-sm font-medium">Personal Website (Optional)</Label>
          <Input 
            id="website" 
            value={resumeData.personalInfo.website} 
            onChange={(e) => handleInputChange("website", e.target.value)}
            placeholder="johndoe.com" 
            className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="summary" className="text-sm font-medium">Professional Summary</Label>
        <Textarea 
          id="summary" 
          value={resumeData.personalInfo.summary} 
          onChange={(e) => handleInputChange("summary", e.target.value)}
          placeholder="Write a brief summary highlighting your professional background and key strengths..." 
          className="min-h-[150px] rounded-lg border-gray-200 focus:border-brand-teal shadow-sm resize-none" 
        />
      </div>
    </div>
  );

  const renderExperienceTab = () => (
    <div className="space-y-8 transition-opacity duration-300">
      <div className="flex items-center gap-3 mb-6 text-xl font-medium">
        <div className="p-2 bg-brand-blue-dark/10 text-brand-blue-dark rounded-full">
          <Briefcase size={20} />
        </div>
        <h2 className="text-gradient font-semibold">Work Experience</h2>
      </div>

      {resumeData.workExperiences.map((experience, index) => (
        <Card key={experience.id} className="overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition-all animate-scale">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg">Experience {index + 1}</h3>
              {resumeData.workExperiences.length > 1 && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-red-500 border-red-200 hover:bg-red-50"
                  onClick={() => removeArrayItem("workExperiences", index)}
                >
                  <Trash2 size={16} className="mr-1" />
                  Remove
                </Button>
              )}
            </div>
            
            <div className="grid gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor={`jobTitle-${index}`} className="text-sm font-medium">Job Title</Label>
                  <Input 
                    id={`jobTitle-${index}`} 
                    value={experience.jobTitle} 
                    onChange={(e) => handleArrayInputChange<WorkExperience>("workExperiences", index, "jobTitle", e.target.value)}
                    placeholder="Software Engineer" 
                    className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`company-${index}`} className="text-sm font-medium">Company</Label>
                  <Input 
                    id={`company-${index}`} 
                    value={experience.company} 
                    onChange={(e) => handleArrayInputChange<WorkExperience>("workExperiences", index, "company", e.target.value)}
                    placeholder="Acme Inc." 
                    className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor={`location-${index}`} className="text-sm font-medium">Location</Label>
                <Input 
                  id={`location-${index}`} 
                  value={experience.location} 
                  onChange={(e) => handleArrayInputChange<WorkExperience>("workExperiences", index, "location", e.target.value)}
                  placeholder="San Francisco, CA" 
                  className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                />
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor={`startDate-${index}`} className="text-sm font-medium">Start Date</Label>
                  <Input 
                    id={`startDate-${index}`} 
                    value={experience.startDate} 
                    onChange={(e) => handleArrayInputChange<WorkExperience>("workExperiences", index, "startDate", e.target.value)}
                    placeholder="Jan 2020" 
                    className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`endDate-${index}`} className="text-sm font-medium">End Date</Label>
                  <Input 
                    id={`endDate-${index}`} 
                    value={experience.endDate} 
                    onChange={(e) => handleArrayInputChange<WorkExperience>("workExperiences", index, "endDate", e.target.value)}
                    placeholder="Present" 
                    className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor={`description-${index}`} className="text-sm font-medium">Description</Label>
                <Textarea 
                  id={`description-${index}`} 
                  value={experience.description} 
                  onChange={(e) => handleArrayInputChange<WorkExperience>("workExperiences", index, "description", e.target.value)}
                  placeholder="Describe your responsibilities and achievements..." 
                  className="min-h-[120px] rounded-lg border-gray-200 focus:border-brand-teal shadow-sm resize-none" 
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button 
        type="button" 
        variant="outline" 
        onClick={() => addArrayItem<WorkExperience>("workExperiences", {
          jobTitle: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          description: ""
        })}
        className="w-full justify-center group hover:bg-brand-teal/5 hover:border-brand-teal/30 transition-all"
      >
        <span className="inline-block mr-2 group-hover:scale-110 transition-transform">+</span> Add Another Experience
      </Button>
    </div>
  );

  const renderEducationTab = () => (
    <div className="space-y-8 transition-opacity duration-300">
      <div className="flex items-center gap-3 mb-6 text-xl font-medium">
        <div className="p-2 bg-brand-blue-dark/10 text-brand-blue-dark rounded-full">
          <GraduationCap size={20} />
        </div>
        <h2 className="text-gradient font-semibold">Education</h2>
      </div>

      {resumeData.education.map((edu, index) => (
        <Card key={edu.id} className="overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition-all animate-scale">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg">Education {index + 1}</h3>
              {resumeData.education.length > 1 && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-red-500 border-red-200 hover:bg-red-50"
                  onClick={() => removeArrayItem("education", index)}
                >
                  <Trash2 size={16} className="mr-1" />
                  Remove
                </Button>
              )}
            </div>
            
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor={`degree-${index}`} className="text-sm font-medium">Degree</Label>
                <Input 
                  id={`degree-${index}`} 
                  value={edu.degree} 
                  onChange={(e) => handleArrayInputChange<Education>("education", index, "degree", e.target.value)}
                  placeholder="Bachelor of Science in Computer Science" 
                  className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                />
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor={`school-${index}`} className="text-sm font-medium">School</Label>
                  <Input 
                    id={`school-${index}`} 
                    value={edu.school} 
                    onChange={(e) => handleArrayInputChange<Education>("education", index, "school", e.target.value)}
                    placeholder="University of California" 
                    className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`edu-location-${index}`} className="text-sm font-medium">Location (Optional)</Label>
                  <Input 
                    id={`edu-location-${index}`} 
                    value={edu.location || ""}
                    onChange={(e) => handleArrayInputChange<Education>("education", index, "location", e.target.value)}
                    placeholder="Berkeley, CA" 
                    className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                  />
                </div>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor={`eduStartDate-${index}`} className="text-sm font-medium">Start Date</Label>
                  <Input 
                    id={`eduStartDate-${index}`} 
                    value={edu.startDate} 
                    onChange={(e) => handleArrayInputChange<Education>("education", index, "startDate", e.target.value)}
                    placeholder="Sep 2016" 
                    className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`eduEndDate-${index}`} className="text-sm font-medium">End Date</Label>
                  <Input 
                    id={`eduEndDate-${index}`} 
                    value={edu.endDate} 
                    onChange={(e) => handleArrayInputChange<Education>("education", index, "endDate", e.target.value)}
                    placeholder="May 2020" 
                    className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor={`gpa-${index}`} className="text-sm font-medium">GPA (Optional)</Label>
                <Input 
                  id={`gpa-${index}`} 
                  value={edu.gpa || ""}
                  onChange={(e) => handleArrayInputChange<Education>("education", index, "gpa", e.target.value)}
                  placeholder="3.8" 
                  className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button 
        type="button" 
        variant="outline" 
        onClick={() => addArrayItem<Education>("education", {
          degree: "",
          school: "",
          location: "",
          startDate: "",
          endDate: "",
          gpa: ""
        })}
        className="w-full justify-center group hover:bg-brand-teal/5 hover:border-brand-teal/30 transition-all"
      >
        <span className="inline-block mr-2 group-hover:scale-110 transition-transform">+</span> Add Another Education
      </Button>
    </div>
  );

  const renderProjectsTab = () => (
    <div className="space-y-8 transition-opacity duration-300">
      <div className="flex items-center gap-3 mb-6 text-xl font-medium">
        <div className="p-2 bg-brand-blue-dark/10 text-brand-blue-dark rounded-full">
          <FileText size={20} />
        </div>
        <h2 className="text-gradient font-semibold">Projects</h2>
      </div>

      {resumeData.projects.map((project, index) => (
        <Card key={project.id} className="overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition-all animate-scale">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg">Project {index + 1}</h3>
              {resumeData.projects.length > 1 && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-red-500 border-red-200 hover:bg-red-50"
                  onClick={() => removeArrayItem("projects", index)}
                >
                  <Trash2 size={16} className="mr-1" />
                  Remove
                </Button>
              )}
            </div>
            
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor={`projectName-${index}`} className="text-sm font-medium">Project Name</Label>
                <Input 
                  id={`projectName-${index}`} 
                  value={project.name} 
                  onChange={(e) => handleArrayInputChange<Project>("projects", index, "name", e.target.value)}
                  placeholder="E-commerce Website" 
                  className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor={`projectDescription-${index}`} className="text-sm font-medium">Project Description</Label>
                <Textarea 
                  id={`projectDescription-${index}`} 
                  value={project.description} 
                  onChange={(e) => handleArrayInputChange<Project>("projects", index, "description", e.target.value)}
                  placeholder="Describe your project..." 
                  className="min-h-[100px] rounded-lg border-gray-200 focus:border-brand-teal shadow-sm resize-none" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor={`technologies-${index}`} className="text-sm font-medium">Technologies Used</Label>
                <Input 
                  id={`technologies-${index}`} 
                  value={project.technologies} 
                  onChange={(e) => handleArrayInputChange<Project>("projects", index, "technologies", e.target.value)}
                  placeholder="React, JavaScript, Node.js, AWS" 
                  className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor={`projectUrl-${index}`} className="text-sm font-medium">Project URL (Optional)</Label>
                <Input 
                  id={`projectUrl-${index}`} 
                  value={project.url || ""}
                  onChange={(e) => handleArrayInputChange<Project>("projects", index, "url", e.target.value)}
                  placeholder="https://myproject.com" 
                  className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button 
        type="button" 
        variant="outline" 
        onClick={() => addArrayItem<Project>("projects", {
          name: "",
          description: "",
          technologies: "",
          url: ""
        })}
        className="w-full justify-center group hover:bg-brand-teal/5 hover:border-brand-teal/30 transition-all"
      >
        <span className="inline-block mr-2 group-hover:scale-110 transition-transform">+</span> Add Another Project
      </Button>
    </div>
  );

  const renderSkillsTab = () => (
    <div className="space-y-8 transition-opacity duration-300">
      <div className="flex items-center gap-3 mb-6 text-xl font-medium">
        <div className="p-2 bg-brand-blue-dark/10 text-brand-blue-dark rounded-full">
          <Award size={20} />
        </div>
        <h2 className="text-gradient font-semibold">Skills & Certifications</h2>
      </div>
      
      <Card className="overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition-all">
        <CardContent className="p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-3">Skills</h3>
            <div className="space-y-2">
              <Label htmlFor="skills" className="text-sm font-medium">Skills (comma separated)</Label>
              <Textarea 
                id="skills" 
                value={resumeData.skills.join(", ")} 
                onChange={(e) => handleSkillsChange(e.target.value)}
                placeholder="JavaScript, React, Node.js, AWS, Python, Project Management, etc." 
                className="min-h-[100px] rounded-lg border-gray-200 focus:border-brand-teal shadow-sm resize-none" 
              />
              <p className="text-sm text-muted-foreground mt-2">
                Enter your skills separated by commas (e.g., JavaScript, React, Project Management)
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {resumeData.skills.map((skill, i) => (
                skill && (
                  <span key={i} className="bg-brand-blue-dark/5 text-brand-blue-dark px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                )
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-4 space-y-6">
        <h3 className="text-lg font-semibold">Certifications</h3>
        
        {resumeData.certifications.map((cert, index) => (
          <Card key={cert.id} className="overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition-all animate-scale">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-semibold text-lg">Certification {index + 1}</h4>
                {resumeData.certifications.length > 1 && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-red-500 border-red-200 hover:bg-red-50"
                    onClick={() => removeArrayItem("certifications", index)}
                  >
                    <Trash2 size={16} className="mr-1" />
                    Remove
                  </Button>
                )}
              </div>
              
              <div className="grid gap-6">
                <div className="space-y-2">
                  <Label htmlFor={`certName-${index}`} className="text-sm font-medium">Certification Name</Label>
                  <Input 
                    id={`certName-${index}`} 
                    value={cert.name} 
                    onChange={(e) => handleArrayInputChange<Certification>("certifications", index, "name", e.target.value)}
                    placeholder="AWS Certified Developer" 
                    className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                  />
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor={`certIssuer-${index}`} className="text-sm font-medium">Issuing Organization</Label>
                    <Input 
                      id={`certIssuer-${index}`} 
                      value={cert.issuer} 
                      onChange={(e) => handleArrayInputChange<Certification>("certifications", index, "issuer", e.target.value)}
                      placeholder="Amazon Web Services" 
                      className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`certDate-${index}`} className="text-sm font-medium">Date</Label>
                    <Input 
                      id={`certDate-${index}`} 
                      value={cert.date} 
                      onChange={(e) => handleArrayInputChange<Certification>("certifications", index, "date", e.target.value)}
                      placeholder="May 2022" 
                      className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`certUrl-${index}`} className="text-sm font-medium">URL (Optional)</Label>
                  <Input 
                    id={`certUrl-${index}`} 
                    value={cert.url || ""}
                    onChange={(e) => handleArrayInputChange<Certification>("certifications", index, "url", e.target.value)}
                    placeholder="https://credential.net/..." 
                    className="rounded-lg border-gray-200 focus:border-brand-teal shadow-sm"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Button 
          type="button" 
          variant="outline" 
          onClick={() => addArrayItem<Certification>("certifications", {
            name: "",
            issuer: "",
            date: "",
            url: ""
          })}
          className="w-full justify-center group hover:bg-brand-teal/5 hover:border-brand-teal/30 transition-all"
        >
          <span className="inline-block mr-2 group-hover:scale-110 transition-transform">+</span> Add Another Certification
        </Button>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return renderPersonalInfoTab();
      case "experience":
        return renderExperienceTab();
      case "education":
        return renderEducationTab();
      case "projects":
        return renderProjectsTab();
      case "skills":
        return renderSkillsTab();
      default:
        return renderPersonalInfoTab();
    }
  };

  const renderResumePreview = () => (
    <div className="p-8 bg-white rounded-lg border shadow-lg">
      <div className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold mb-2 text-brand-blue-dark">{resumeData.personalInfo.fullName}</h1>
        <div className="text-sm text-gray-600 flex flex-wrap gap-x-4 gap-y-2">
          {resumeData.personalInfo.email && <div>{resumeData.personalInfo.email}</div>}
          {resumeData.personalInfo.phone && <div>{resumeData.personalInfo.phone}</div>}
          {resumeData.personalInfo.location && <div>{resumeData.personalInfo.location}</div>}
        </div>
        <div className="text-sm text-gray-700 flex flex-wrap gap-x-4 gap-y-1 mt-2">
          {resumeData.personalInfo.linkedin && <div>LinkedIn: {resumeData.personalInfo.linkedin}</div>}
          {resumeData.personalInfo.website && <div>Website: {resumeData.personalInfo.website}</div>}
        </div>
      </div>

      {resumeData.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-3 text-brand-blue">Professional Summary</h2>
          <p className="text-sm leading-relaxed">{resumeData.personalInfo.summary}</p>
        </div>
      )}

      {resumeData.workExperiences.length > 0 && resumeData.workExperiences[0].company && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-3 text-brand-blue">Work Experience</h2>
          {resumeData.workExperiences.map((exp, i) => (
            <div key={i} className="mb-5">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-brand-blue-dark">{exp.jobTitle}</h3>
                  <div className="text-sm">{exp.company}{exp.location ? `, ${exp.location}` : ""}</div>
                </div>
                <div className="text-sm text-gray-600">
                  {exp.startDate} - {exp.endDate}
                </div>
              </div>
              <p className="text-sm mt-2 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {resumeData.education.length > 0 && resumeData.education[0].school && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-3 text-brand-blue">Education</h2>
          {resumeData.education.map((edu, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-brand-blue-dark">{edu.degree}</h3>
                  <div className="text-sm">{edu.school}{edu.location ? `, ${edu.location}` : ""}</div>
                </div>
                <div className="text-sm text-gray-600">
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
              {edu.gpa && <div className="text-sm mt-1">GPA: {edu.gpa}</div>}
            </div>
          ))}
        </div>
      )}

      {resumeData.projects.length > 0 && resumeData.projects[0].name && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-3 text-brand-blue">Projects</h2>
          {resumeData.projects.map((proj, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold text-brand-blue-dark">{proj.name}</h3>
                {proj.url && <a href={proj.url} className="text-sm text-brand-teal hover:underline">View Project</a>}
              </div>
              <p className="text-sm mt-1 leading-relaxed">{proj.description}</p>
              <div className="text-sm mt-2"><span className="font-medium text-gray-700">Technologies:</span> {proj.technologies}</div>
            </div>
          ))}
        </div>
      )}

      {resumeData.skills.length > 0 && resumeData.skills[0] && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-3 text-brand-blue">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, i) => (
              skill && (
                <span key={i} className="bg-brand-blue-dark/5 text-brand-blue-dark px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              )
            ))}
          </div>
        </div>
      )}

      {resumeData.certifications.length > 0 && resumeData.certifications[0].name && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-3 text-brand-blue">Certifications</h2>
          {resumeData.certifications.map((cert, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-brand-blue-dark">{cert.name}</h3>
                  <div className="text-sm">{cert.issuer} - {cert.date}</div>
                </div>
                {cert.url && <a href={cert.url} className="text-sm text-brand-teal hover:underline">View Certificate</a>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 mesh-bg">
      <Navbar />
      
      <div className="flex-grow pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">Create Your Professional Resume</h1>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Fill in your information below to build a standout resume that will help you land your dream job. Our AI-powered tools will help you optimize every section.
            </p>
            
            {/* Progress indicator */}
            <div className="mt-6 mx-auto max-w-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Resume completion</span>
                <span className="text-sm font-medium">{completionPercentage}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-brand-blue to-brand-teal transition-all duration-500 ease-out"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="personal" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-5 mb-8 bg-white/80 backdrop-blur-sm p-1 rounded-lg border shadow-soft">
              <TabsTrigger value="personal" className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-brand-blue data-[state=active]:to-brand-teal data-[state=active]:text-white rounded-md text-sm md:text-base">
                <User className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Personal</span>
              </TabsTrigger>
              <TabsTrigger value="experience" className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-brand-blue data-[state=active]:to-brand-teal data-[state=active]:text-white rounded-md text-sm md:text-base">
                <Briefcase className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Experience</span>
              </TabsTrigger>
              <TabsTrigger value="education" className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-brand-blue data-[state=active]:to-brand-teal data-[state=active]:text-white rounded-md text-sm md:text-base">
                <GraduationCap className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Education</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-brand-blue data-[state=active]:to-brand-teal data-[state=active]:text-white rounded-md text-sm md:text-base">
                <FileText className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Projects</span>
              </TabsTrigger>
              <TabsTrigger value="skills" className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-brand-blue data-[state=active]:to-brand-teal data-[state=active]:text-white rounded-md text-sm md:text-base">
                <Award className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Skills</span>
              </TabsTrigger>
            </TabsList>

            <Card className="border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden backdrop-blur-sm bg-white/90">
              <CardContent className="pt-6 px-6 pb-6 sm:p-8">
                <TabsContent value={activeTab} className="mt-0">
                  {renderTabContent()}
                </TabsContent>
                
                <div className="flex flex-col sm:flex-row justify-between mt-10 gap-3">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={handleSaveResume}
                    className="flex items-center gap-2 border-brand-blue hover:bg-brand-blue/5"
                  >
                    <Save size={16} />
                    Save Progress
                  </Button>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {activeTab !== "personal" && (
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={() => {
                          const tabs = ["personal", "experience", "education", "projects", "skills"];
                          const currentIndex = tabs.indexOf(activeTab);
                          setActiveTab(tabs[currentIndex - 1]);
                        }}
                        className="border-gray-300 text-gray-700"
                      >
                        Previous
                      </Button>
                    )}
                    {activeTab !== "skills" ? (
                      <Button 
                        type="button"
                        onClick={() => {
                          const tabs = ["personal", "experience", "education", "projects", "skills"];
                          const currentIndex = tabs.indexOf(activeTab);
                          setActiveTab(tabs[currentIndex + 1]);
                        }}
                        className="bg-gradient-to-r from-brand-blue to-brand-teal hover:shadow-md transition-all"
                      >
                        Next
                      </Button>
                    ) : (
                      <Button 
                        type="button"
                        onClick={generateResume}
                        disabled={isGenerating}
                        className={`flex items-center gap-2 ${
                          isGenerating 
                            ? "bg-gray-400" 
                            : "bg-gradient-to-r from-brand-blue to-brand-teal hover:shadow-md"
                        } transition-all`}
                      >
                        {isGenerating ? "Generating..." : "Generate Resume"}
                        {!isGenerating && <CheckCircle size={16} />}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Tabs>
        </div>
      </div>
      
      {/* Resume Preview Dialog */}
      <Dialog open={showPreviewDialog} onOpenChange={setShowPreviewDialog}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-md border-gray-200 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-brand-blue-dark flex items-center gap-2">
              <FileText size={20} />
              Resume Preview
            </DialogTitle>
            <DialogDescription>
              Review your resume before downloading or making further edits.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">{renderResumePreview()}</div>
          
          <DialogFooter className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
            <Button 
              variant="outline" 
              className="sm:order-1 border-gray-300"
              onClick={() => setShowPreviewDialog(false)}
            >
              Continue Editing
            </Button>
            <Button 
              className="sm:order-2 flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-teal hover:shadow-md transition-all" 
              onClick={handleDownloadPdf}
            >
              <Download size={16} /> Download PDF
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default ResumeBuilder;
