
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  FileText, Calendar, Briefcase, CreditCard, CheckCircle, Clock, 
  XCircle, User, Download, Building, ChevronRight
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-brand-blue-dark">Dashboard</h1>
              <p className="text-gray-600">Welcome back, John Doe</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild>
                <Link to="/resume">Create New Resume</Link>
              </Button>
            </div>
          </div>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Resume</p>
                    <h3 className="font-bold text-2xl mt-1">1</h3>
                    <p className="text-xs text-gray-500 mt-1">Last updated 3 days ago</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <FileText size={20} />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Interview Status</p>
                    <div className="mt-1 flex items-center gap-2">
                      <Badge variant="success" className="bg-amber-100 text-amber-800 hover:bg-amber-100">Scheduled</Badge>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">April 10, 2023 • 10:00 AM</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <Calendar size={20} />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Applications</p>
                    <h3 className="font-bold text-2xl mt-1">12</h3>
                    <p className="text-xs text-gray-500 mt-1">Last application 6 hours ago</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Briefcase size={20} />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Interviews Secured</p>
                    <h3 className="font-bold text-2xl mt-1">3</h3>
                    <p className="text-xs text-gray-500 mt-1">Total value: $450</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <CreditCard size={20} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content Tabs */}
          <Tabs defaultValue="applications">
            <TabsList className="mb-8">
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="resumes">Resumes</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            
            <TabsContent value="applications">
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Campaign Status</h2>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Campaign Progress</p>
                      <div className="flex items-center gap-2 mb-4">
                        <Progress value={25} className="h-2" />
                        <span className="text-sm font-medium">25%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Target Applications</p>
                          <p className="font-medium">50</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Completed</p>
                          <p className="font-medium">12</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Campaign Details</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Target Companies:</span>
                          <span>Big Tech, Startups</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Job Level:</span>
                          <span>Mid Level</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Job Types:</span>
                          <span>Full-time, Remote</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Start Date:</span>
                          <span>April 5, 2023</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/campaign">Edit Campaign</Link>
                    </Button>
                  </div>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Applications</CardTitle>
                    <CardDescription>Latest job applications submitted by our AI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-white p-4 rounded-md border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                              <span className="text-xs font-medium text-red-800">G</span>
                            </div>
                            <div>
                              <h3 className="font-medium">Senior Frontend Engineer</h3>
                              <p className="text-sm text-gray-500">Google</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 justify-between sm:justify-end">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Interview Secured</Badge>
                          <p className="text-sm text-gray-500">Today</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-xs font-medium text-blue-800">M</span>
                            </div>
                            <div>
                              <h3 className="font-medium">Full Stack Developer</h3>
                              <p className="text-sm text-gray-500">Microsoft</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 justify-between sm:justify-end">
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">In Progress</Badge>
                          <p className="text-sm text-gray-500">Yesterday</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-xs font-medium text-green-800">S</span>
                            </div>
                            <div>
                              <h3 className="font-medium">Product Engineer</h3>
                              <p className="text-sm text-gray-500">Spotify</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 justify-between sm:justify-end">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Interview Secured</Badge>
                          <p className="text-sm text-gray-500">2 days ago</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-xs font-medium text-purple-800">A</span>
                            </div>
                            <div>
                              <h3 className="font-medium">UX Engineer</h3>
                              <p className="text-sm text-gray-500">Airbnb</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 justify-between sm:justify-end">
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Rejected</Badge>
                          <p className="text-sm text-gray-500">3 days ago</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="w-full mt-6 text-brand-teal">
                      View All Applications
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Interviews</CardTitle>
                    <CardDescription>Your scheduled interview sessions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-md border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-brand-teal" />
                            <div>
                              <h3 className="font-medium">LaunchCareer Verification Interview</h3>
                              <p className="text-sm text-gray-500">April 10, 2023 • 10:00 AM</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">Reschedule</Button>
                          <Button size="sm">Join Call</Button>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <Building size={18} className="text-red-600" />
                            <div>
                              <h3 className="font-medium">Google - Senior Frontend Engineer</h3>
                              <p className="text-sm text-gray-500">April 15, 2023 • 2:00 PM</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <Building size={18} className="text-green-600" />
                            <div>
                              <h3 className="font-medium">Spotify - Product Engineer</h3>
                              <p className="text-sm text-gray-500">April 17, 2023 • 11:00 AM</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="resumes">
              <Card>
                <CardHeader>
                  <CardTitle>Your Resumes</CardTitle>
                  <CardDescription>Manage your generated resumes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-md border">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-600">
                            <FileText size={20} />
                          </div>
                          <div>
                            <h3 className="font-medium">John_Doe_Resume_Tech.pdf</h3>
                            <p className="text-sm text-gray-500">Generated on April 5, 2023</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Download size={16} className="mr-2" />
                            Download
                          </Button>
                          <Button size="sm">
                            <FileText size={16} className="mr-2" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-8">
                    <Button asChild>
                      <Link to="/resume">Create New Resume</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="billing">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Purchase History</CardTitle>
                    <CardDescription>Your recent transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-md border">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <h3 className="font-medium">Interview with LaunchCareer</h3>
                            <p className="text-sm text-gray-500">April 5, 2023</p>
                          </div>
                          <div className="flex items-center gap-3 justify-between sm:justify-start">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                            <p className="font-medium">$100.00</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md border">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <h3 className="font-medium">AI Resume Generation</h3>
                            <p className="text-sm text-gray-500">April 5, 2023</p>
                          </div>
                          <div className="flex items-center gap-3 justify-between sm:justify-start">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                            <p className="font-medium">$20.00</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md border">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <h3 className="font-medium">Google Interview Fee</h3>
                            <p className="text-sm text-gray-500">April 6, 2023</p>
                          </div>
                          <div className="flex items-center gap-3 justify-between sm:justify-start">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Paid</Badge>
                            <p className="font-medium">$200.00</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md border">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <h3 className="font-medium">Spotify Interview Fee</h3>
                            <p className="text-sm text-gray-500">April 7, 2023</p>
                          </div>
                          <div className="flex items-center gap-3 justify-between sm:justify-start">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Paid</Badge>
                            <p className="font-medium">$200.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Manage your payment methods</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-md border">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                              Visa
                            </div>
                            <div>
                              <h3 className="font-medium">•••• •••• •••• 4242</h3>
                              <p className="text-sm text-gray-500">Expires 12/25</p>
                            </div>
                          </div>
                          <Badge>Default</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="mt-4">
                      + Add Payment Method
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Manage your personal information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                      <User size={28} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">John Doe</h3>
                      <p className="text-gray-500">john.doe@example.com</p>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-2">Personal Information</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Full Name</label>
                          <p className="font-medium">John Doe</p>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Email</label>
                          <p className="font-medium">john.doe@example.com</p>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Phone</label>
                          <p className="font-medium">+1 (555) 123-4567</p>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Location</label>
                          <p className="font-medium">San Francisco, CA</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4">
                        Edit Profile
                      </Button>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-2">Account Settings</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Account Type</label>
                          <p className="font-medium">Individual</p>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Password</label>
                          <p className="font-medium">••••••••••</p>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Two-Factor Auth</label>
                          <p className="font-medium text-red-500">Not Enabled</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4">
                        Security Settings
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
