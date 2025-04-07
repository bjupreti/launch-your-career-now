import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Dashboard = () => {
  const recentActivity = [
    { id: 1, date: "2024-08-01", description: "Resume updated", details: "Updated skills section" },
    { id: 2, date: "2024-07-28", description: "Interview scheduled", details: "Scheduled interview with TechCorp" },
    { id: 3, date: "2024-07-20", description: "Job applied", details: "Applied for Software Engineer role at Innovate Solutions" },
    { id: 4, date: "2024-07-15", description: "Profile completed", details: "Completed profile information" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-brand-blue-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Your Career Dashboard</h1>
              <p className="text-xl text-gray-100">
                Track your progress, manage your applications, and get personalized insights to accelerate your career.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Applications Sent</CardTitle>
                  <CardDescription>Total job applications submitted</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">42</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Interviews Scheduled</CardTitle>
                  <CardDescription>Upcoming and past interviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">7</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Profile Completion</CardTitle>
                  <CardDescription>Complete your profile to unlock more features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">85%</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Recent Activity</h2>
            <Table>
              <TableCaption>A summary of your recent activities on LaunchCareer.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivity.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell className="font-medium">{activity.date}</TableCell>
                    <TableCell>{activity.description}</TableCell>
                    <TableCell>{activity.details}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" className="ml-auto">View Details</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4}>
                    <div className="flex justify-end space-x-2">
                      <Button variant="secondary" size="sm">
                        View All
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </section>

        {/* Personalized Insights Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Personalized Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Resume Score</CardTitle>
                  <CardDescription>Based on AI analysis of your resume</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">88/100</div>
                  <p className="mt-4 text-gray-600">
                    Your resume is well-structured and includes relevant keywords. Consider adding more specific achievements to further improve your score.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Job Recommendations</CardTitle>
                  <CardDescription>Based on your profile and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Software Engineer at TechCorp</li>
                    <li>Data Scientist at Innovate Solutions</li>
                    <li>Product Manager at BrandForward</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
