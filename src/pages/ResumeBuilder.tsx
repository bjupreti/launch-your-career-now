
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
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
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Briefcase, GraduationCap, Award, User, Download, Save, CheckCircle } from "lucide-react";

// Define the resume data structure
type ResumeData = {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    website?: string;
    summary: string;
  };
  workExperiences: {
    id: string;
    jobTitle: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    id: string;
    degree: string;
    school: string;
    location?: string;
    startDate: string;
    endDate: string;
    gpa?: string;
  }[];
  projects: {
    id: string;
    name: string;
    description: string;
    technologies: string;
    url?: string;
  }[];
  skills: string[];
  certifications: {
    id: string;
    name: string;
    issuer: string;
    date: string;
    url?: string;
  }[];
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

  // Save resume data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  const handleInputChange = (section: keyof ResumeData, field: string, value: string) => {
    setResumeData({
      ...resumeData,
      [section]: {
        ...resumeData[section],
        [field]: value,
      },
    });
  };

  const handleArrayInputChange = (
    section: keyof ResumeData,
    index: number,
    field: string,
    value: string
  ) => {
    const newArray = [...resumeData[section]];
    newArray[index] = { ...newArray[index], [field]: value };
    setResumeData({
      ...resumeData,
      [section]: newArray,
    });
  };

  const addArrayItem = (section: keyof ResumeData, template: any) => {
    setResumeData({
      ...resumeData,
      [section]: [...resumeData[section], { ...template, id: `${section}-${resumeData[section].length + 1}` }],
    });
  };

  const removeArrayItem = (section: keyof ResumeData, index: number) => {
    const newArray = [...resumeData[section]];
    newArray.splice(index, 1);
    setResumeData({
      ...resumeData,
      [section]: newArray,
    });
  };

  const handleSkillsChange = (skills: string) => {
    setResumeData({
      ...resumeData,
      skills: skills.split(",").map(skill => skill.trim()),
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
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6 text-lg font-medium text-brand-blue">
        <User size={24} />
        <h2>Personal Information</h2>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName">Full Name*</Label>
          <Input 
            id="fullName" 
            value={resumeData.personalInfo.fullName} 
            onChange={(e) => handleInputChange("personalInfo", "fullName", e.target.value)}
            placeholder="John Doe" 
          />
        </div>
        <div>
          <Label htmlFor="email">Email*</Label>
          <Input 
            id="email" 
            type="email" 
            value={resumeData.personalInfo.email} 
            onChange={(e) => handleInputChange("personalInfo", "email", e.target.value)}
            placeholder="johndoe@example.com" 
          />
        </div>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input 
            id="phone" 
            value={resumeData.personalInfo.phone} 
            onChange={(e) => handleInputChange("personalInfo", "phone", e.target.value)}
            placeholder="(555) 123-4567" 
          />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input 
            id="location" 
            value={resumeData.personalInfo.location} 
            onChange={(e) => handleInputChange("personalInfo", "location", e.target.value)}
            placeholder="San Francisco, CA" 
          />
        </div>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="linkedin">LinkedIn (Optional)</Label>
          <Input 
            id="linkedin" 
            value={resumeData.personalInfo.linkedin} 
            onChange={(e) => handleInputChange("personalInfo", "linkedin", e.target.value)}
            placeholder="linkedin.com/in/johndoe" 
          />
        </div>
        <div>
          <Label htmlFor="website">Personal Website (Optional)</Label>
          <Input 
            id="website" 
            value={resumeData.personalInfo.website} 
            onChange={(e) => handleInputChange("personalInfo", "website", e.target.value)}
            placeholder="johndoe.com" 
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea 
          id="summary" 
          value={resumeData.personalInfo.summary} 
          onChange={(e) => handleInputChange("personalInfo", "summary", e.target.value)}
          placeholder="Write a brief summary highlighting your professional background and key strengths..." 
          className="min-h-[100px]" 
        />
      </div>
    </div>
  );

  const renderExperienceTab = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6 text-lg font-medium text-brand-blue">
        <Briefcase size={24} />
        <h2>Work Experience</h2>
      </div>

      {resumeData.workExperiences.map((experience, index) => (
        <Card key={experience.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Experience {index + 1}</h3>
              {resumeData.workExperiences.length > 1 && (
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => removeArrayItem("workExperiences", index)}
                >
                  Remove
                </Button>
              )}
            </div>
            
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor={`jobTitle-${index}`}>Job Title</Label>
                  <Input 
                    id={`jobTitle-${index}`} 
                    value={experience.jobTitle} 
                    onChange={(e) => handleArrayInputChange("workExperiences", index, "jobTitle", e.target.value)}
                    placeholder="Software Engineer" 
                  />
                </div>
                <div>
                  <Label htmlFor={`company-${index}`}>Company</Label>
                  <Input 
                    id={`company-${index}`} 
                    value={experience.company} 
                    onChange={(e) => handleArrayInputChange("workExperiences", index, "company", e.target.value)}
                    placeholder="Acme Inc." 
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor={`location-${index}`}>Location</Label>
                <Input 
                  id={`location-${index}`} 
                  value={experience.location} 
                  onChange={(e) => handleArrayInputChange("workExperiences", index, "location", e.target.value)}
                  placeholder="San Francisco, CA" 
                />
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                  <Input 
                    id={`startDate-${index}`} 
                    value={experience.startDate} 
                    onChange={(e) => handleArrayInputChange("workExperiences", index, "startDate", e.target.value)}
                    placeholder="Jan 2020" 
                  />
                </div>
                <div>
                  <Label htmlFor={`endDate-${index}`}>End Date</Label>
                  <Input 
                    id={`endDate-${index}`} 
                    value={experience.endDate} 
                    onChange={(e) => handleArrayInputChange("workExperiences", index, "endDate", e.target.value)}
                    placeholder="Present" 
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor={`description-${index}`}>Description</Label>
                <Textarea 
                  id={`description-${index}`} 
                  value={experience.description} 
                  onChange={(e) => handleArrayInputChange("workExperiences", index, "description", e.target.value)}
                  placeholder="Describe your responsibilities and achievements..." 
                  className="min-h-[100px]" 
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button 
        type="button" 
        variant="outline" 
        onClick={() => addArrayItem("workExperiences", {
          id: "",
          jobTitle: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          description: ""
        })}
        className="w-full"
      >
        + Add Another Experience
      </Button>
    </div>
  );

  const renderEducationTab = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6 text-lg font-medium text-brand-blue">
        <GraduationCap size={24} />
        <h2>Education</h2>
      </div>

      {resumeData.education.map((edu, index) => (
        <Card key={edu.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Education {index + 1}</h3>
              {resumeData.education.length > 1 && (
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => removeArrayItem("education", index)}
                >
                  Remove
                </Button>
              )}
            </div>
            
            <div className="grid gap-4">
              <div>
                <Label htmlFor={`degree-${index}`}>Degree</Label>
                <Input 
                  id={`degree-${index}`} 
                  value={edu.degree} 
                  onChange={(e) => handleArrayInputChange("education", index, "degree", e.target.value)}
                  placeholder="Bachelor of Science in Computer Science" 
                />
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor={`school-${index}`}>School</Label>
                  <Input 
                    id={`school-${index}`} 
                    value={edu.school} 
                    onChange={(e) => handleArrayInputChange("education", index, "school", e.target.value)}
                    placeholder="University of California" 
                  />
                </div>
                <div>
                  <Label htmlFor={`edu-location-${index}`}>Location (Optional)</Label>
                  <Input 
                    id={`edu-location-${index}`} 
                    value={edu.location || ""}
                    onChange={(e) => handleArrayInputChange("education", index, "location", e.target.value)}
                    placeholder="Berkeley, CA" 
                  />
                </div>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor={`eduStartDate-${index}`}>Start Date</Label>
                  <Input 
                    id={`eduStartDate-${index}`} 
                    value={edu.startDate} 
                    onChange={(e) => handleArrayInputChange("education", index, "startDate", e.target.value)}
                    placeholder="Sep 2016" 
                  />
                </div>
                <div>
                  <Label htmlFor={`eduEndDate-${index}`}>End Date</Label>
                  <Input 
                    id={`eduEndDate-${index}`} 
                    value={edu.endDate} 
                    onChange={(e) => handleArrayInputChange("education", index, "endDate", e.target.value)}
                    placeholder="May 2020" 
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor={`gpa-${index}`}>GPA (Optional)</Label>
                <Input 
                  id={`gpa-${index}`} 
                  value={edu.gpa || ""}
                  onChange={(e) => handleArrayInputChange("education", index, "gpa", e.target.value)}
                  placeholder="3.8" 
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button 
        type="button" 
        variant="outline" 
        onClick={() => addArrayItem("education", {
          id: "",
          degree: "",
          school: "",
          location: "",
          startDate: "",
          endDate: "",
          gpa: ""
        })}
        className="w-full"
      >
        + Add Another Education
      </Button>
    </div>
  );

  const renderProjectsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6 text-lg font-medium text-brand-blue">
        <FileText size={24} />
        <h2>Projects</h2>
      </div>

      {resumeData.projects.map((project, index) => (
        <Card key={project.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Project {index + 1}</h3>
              {resumeData.projects.length > 1 && (
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => removeArrayItem("projects", index)}
                >
                  Remove
                </Button>
              )}
            </div>
            
            <div className="grid gap-4">
              <div>
                <Label htmlFor={`projectName-${index}`}>Project Name</Label>
                <Input 
                  id={`projectName-${index}`} 
                  value={project.name} 
                  onChange={(e) => handleArrayInputChange("projects", index, "name", e.target.value)}
                  placeholder="E-commerce Website" 
                />
              </div>
              
              <div>
                <Label htmlFor={`projectDescription-${index}`}>Project Description</Label>
                <Textarea 
                  id={`projectDescription-${index}`} 
                  value={project.description} 
                  onChange={(e) => handleArrayInputChange("projects", index, "description", e.target.value)}
                  placeholder="Describe your project..." 
                  className="min-h-[80px]" 
                />
              </div>
              
              <div>
                <Label htmlFor={`technologies-${index}`}>Technologies Used</Label>
                <Input 
                  id={`technologies-${index}`} 
                  value={project.technologies} 
                  onChange={(e) => handleArrayInputChange("projects", index, "technologies", e.target.value)}
                  placeholder="React, JavaScript, Node.js, AWS" 
                />
              </div>
              
              <div>
                <Label htmlFor={`projectUrl-${index}`}>Project URL (Optional)</Label>
                <Input 
                  id={`projectUrl-${index}`} 
                  value={project.url || ""}
                  onChange={(e) => handleArrayInputChange("projects", index, "url", e.target.value)}
                  placeholder="https://myproject.com" 
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button 
        type="button" 
        variant="outline" 
        onClick={() => addArrayItem("projects", {
          id: "",
          name: "",
          description: "",
          technologies: "",
          url: ""
        })}
        className="w-full"
      >
        + Add Another Project
      </Button>
    </div>
  );

  const renderSkillsTab = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6 text-lg font-medium text-brand-blue">
        <Award size={24} />
        <h2>Skills & Certifications</h2>
      </div>
      
      <div>
        <Label htmlFor="skills">Skills (comma separated)</Label>
        <Textarea 
          id="skills" 
          value={resumeData.skills.join(", ")} 
          onChange={(e) => handleSkillsChange(e.target.value)}
          placeholder="JavaScript, React, Node.js, AWS, Python, Project Management, etc." 
          className="min-h-[80px]" 
        />
        <p className="text-sm text-muted-foreground mt-1">
          Enter your skills separated by commas (e.g., JavaScript, React, Project Management)
        </p>
      </div>

      <div className="mt-8 mb-4">
        <h3 className="text-lg font-medium mb-4">Certifications</h3>
        
        {resumeData.certifications.map((cert, index) => (
          <Card key={cert.id} className="overflow-hidden mb-4">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold">Certification {index + 1}</h4>
                {resumeData.certifications.length > 1 && (
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => removeArrayItem("certifications", index)}
                  >
                    Remove
                  </Button>
                )}
              </div>
              
              <div className="grid gap-4">
                <div>
                  <Label htmlFor={`certName-${index}`}>Certification Name</Label>
                  <Input 
                    id={`certName-${index}`} 
                    value={cert.name} 
                    onChange={(e) => handleArrayInputChange("certifications", index, "name", e.target.value)}
                    placeholder="AWS Certified Developer" 
                  />
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor={`certIssuer-${index}`}>Issuing Organization</Label>
                    <Input 
                      id={`certIssuer-${index}`} 
                      value={cert.issuer} 
                      onChange={(e) => handleArrayInputChange("certifications", index, "issuer", e.target.value)}
                      placeholder="Amazon Web Services" 
                    />
                  </div>
                  <div>
                    <Label htmlFor={`certDate-${index}`}>Date</Label>
                    <Input 
                      id={`certDate-${index}`} 
                      value={cert.date} 
                      onChange={(e) => handleArrayInputChange("certifications", index, "date", e.target.value)}
                      placeholder="May 2022" 
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor={`certUrl-${index}`}>URL (Optional)</Label>
                  <Input 
                    id={`certUrl-${index}`} 
                    value={cert.url || ""}
                    onChange={(e) => handleArrayInputChange("certifications", index, "url", e.target.value)}
                    placeholder="https://credential.net/..." 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Button 
          type="button" 
          variant="outline" 
          onClick={() => addArrayItem("certifications", {
            id: "",
            name: "",
            issuer: "",
            date: "",
            url: ""
          })}
          className="w-full"
        >
          + Add Another Certification
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
    <div className="p-6 bg-white rounded-lg border">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">{resumeData.personalInfo.fullName}</h1>
        <div className="text-sm text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
          {resumeData.personalInfo.email && <div>{resumeData.personalInfo.email}</div>}
          {resumeData.personalInfo.phone && <div>{resumeData.personalInfo.phone}</div>}
          {resumeData.personalInfo.location && <div>{resumeData.personalInfo.location}</div>}
        </div>
        <div className="text-sm text-gray-700 flex flex-wrap gap-x-4 gap-y-1 mt-1">
          {resumeData.personalInfo.linkedin && <div>LinkedIn: {resumeData.personalInfo.linkedin}</div>}
          {resumeData.personalInfo.website && <div>Website: {resumeData.personalInfo.website}</div>}
        </div>
      </div>

      {resumeData.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Professional Summary</h2>
          <p className="text-sm">{resumeData.personalInfo.summary}</p>
        </div>
      )}

      {resumeData.workExperiences.length > 0 && resumeData.workExperiences[0].company && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Work Experience</h2>
          {resumeData.workExperiences.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold">{exp.jobTitle}</h3>
                  <div className="text-sm">{exp.company}{exp.location ? `, ${exp.location}` : ""}</div>
                </div>
                <div className="text-sm">
                  {exp.startDate} - {exp.endDate}
                </div>
              </div>
              <p className="text-sm mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {resumeData.education.length > 0 && resumeData.education[0].school && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Education</h2>
          {resumeData.education.map((edu, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold">{edu.degree}</h3>
                  <div className="text-sm">{edu.school}{edu.location ? `, ${edu.location}` : ""}</div>
                </div>
                <div className="text-sm">
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
              {edu.gpa && <div className="text-sm">GPA: {edu.gpa}</div>}
            </div>
          ))}
        </div>
      )}

      {resumeData.projects.length > 0 && resumeData.projects[0].name && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Projects</h2>
          {resumeData.projects.map((proj, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between">
                <h3 className="font-bold">{proj.name}</h3>
                {proj.url && <a href={proj.url} className="text-sm text-blue-600 hover:underline">View Project</a>}
              </div>
              <p className="text-sm mt-1">{proj.description}</p>
              <div className="text-sm mt-1"><span className="font-medium">Technologies:</span> {proj.technologies}</div>
            </div>
          ))}
        </div>
      )}

      {resumeData.skills.length > 0 && resumeData.skills[0] && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, i) => (
              <span key={i} className="bg-gray-100 px-2 py-1 rounded text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {resumeData.certifications.length > 0 && resumeData.certifications[0].name && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Certifications</h2>
          {resumeData.certifications.map((cert, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold">{cert.name}</h3>
                  <div className="text-sm">{cert.issuer} - {cert.date}</div>
                </div>
                {cert.url && <a href={cert.url} className="text-sm text-blue-600 hover:underline">View Certificate</a>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-brand-blue-dark">Create Your Professional Resume</h1>
            <p className="text-gray-600 mt-2">
              Fill in your information below to build a professional resume that will help you land your dream job.
            </p>
          </div>
          
          <Tabs defaultValue="personal" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-5 mb-6">
              <TabsTrigger value="personal" className="text-sm md:text-base">
                <User className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Personal</span>
              </TabsTrigger>
              <TabsTrigger value="experience" className="text-sm md:text-base">
                <Briefcase className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Experience</span>
              </TabsTrigger>
              <TabsTrigger value="education" className="text-sm md:text-base">
                <GraduationCap className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Education</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="text-sm md:text-base">
                <FileText className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Projects</span>
              </TabsTrigger>
              <TabsTrigger value="skills" className="text-sm md:text-base">
                <Award className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Skills</span>
              </TabsTrigger>
            </TabsList>

            <Card>
              <CardContent className="pt-6">
                <TabsContent value={activeTab}>
                  {renderTabContent()}
                </TabsContent>
                
                <div className="flex flex-col sm:flex-row justify-between mt-8 gap-3">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={handleSaveResume}
                    className="flex items-center gap-2"
                  >
                    <Save size={16} />
                    Save Progress
                  </Button>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {activeTab !== "personal" && (
                      <Button 
                        type="button"
                        onClick={() => {
                          const tabs = ["personal", "experience", "education", "projects", "skills"];
                          const currentIndex = tabs.indexOf(activeTab);
                          setActiveTab(tabs[currentIndex - 1]);
                        }}
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
                      >
                        Next
                      </Button>
                    ) : (
                      <Button 
                        type="button"
                        onClick={generateResume}
                        disabled={isGenerating}
                        className="flex items-center gap-2"
                      >
                        {isGenerating ? "Generating..." : "Generate Resume"}
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
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Resume Preview</DialogTitle>
            <DialogDescription>
              Review your resume before downloading or making further edits.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">{renderResumePreview()}</div>
          
          <DialogFooter className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
            <Button 
              variant="outline" 
              className="sm:order-1"
              onClick={() => setShowPreviewDialog(false)}
            >
              Continue Editing
            </Button>
            <Button 
              className="sm:order-2 flex items-center gap-2" 
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
