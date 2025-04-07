
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar as CalendarIcon, Clock, Users, CheckCircle } from "lucide-react";

const Interview = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];
  
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };
  
  const handleScheduleInterview = () => {
    if (selectedDate && selectedTime) {
      setShowPaymentDialog(true);
    } else {
      toast({
        title: "Please select a date and time",
        description: "You need to select both a date and time slot to schedule an interview.",
        variant: "destructive"
      });
    }
  };
  
  const handlePayment = () => {
    // In a real app, this would process the payment
    setShowPaymentDialog(false);
    setShowSuccessDialog(true);
  };
  
  const handleCloseSuccess = () => {
    setShowSuccessDialog(false);
    setSelectedDate(undefined);
    setSelectedTime(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-brand-blue-dark">Schedule Your Interview</h1>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Book a mandatory 30-minute interview with our team to verify your identity and discuss your career goals in detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CalendarIcon size={18} />
                    <CardTitle>Select Date & Time</CardTitle>
                  </div>
                  <CardDescription>Choose an available date and time slot for your interview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Calendar */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        className="border rounded-md"
                        disabled={(date) => {
                          // Disable past dates, Sundays and Saturdays
                          return date < new Date() || date.getDay() === 0 || date.getDay() === 6;
                        }}
                      />
                    </div>
                    
                    {/* Time Slots */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                      {selectedDate ? (
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => handleTimeSelect(time)}
                              className={`py-2 px-4 text-sm border rounded-md transition-colors
                                ${selectedTime === time
                                  ? 'bg-brand-teal text-white border-transparent'
                                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                              <div className="flex items-center justify-center gap-1">
                                <Clock size={14} />
                                <span>{time}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center p-8 border border-dashed rounded-md bg-gray-50">
                          <p className="text-gray-500 text-sm text-center">
                            Please select a date to view available time slots
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <Button
                      onClick={handleScheduleInterview}
                      disabled={!selectedDate || !selectedTime}
                    >
                      Schedule Interview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users size={18} />
                    <CardTitle>Why We Interview</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Unlike other platforms, we personally interview every candidate to:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex gap-2 text-sm">
                        <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Verify your identity and work experience</span>
                      </li>
                      <li className="flex gap-2 text-sm">
                        <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Understand your career goals in detail</span>
                      </li>
                      <li className="flex gap-2 text-sm">
                        <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Tailor our job search to your specific needs</span>
                      </li>
                      <li className="flex gap-2 text-sm">
                        <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Ensure our platform is used by serious candidates</span>
                      </li>
                    </ul>
                    <div className="pt-4 border-t">
                      <p className="text-sm font-medium">Interview Fee: $100</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Note: If you've purchased a resume review, we'll refund the $30 fee.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Payment Dialog */}
      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Interview Booking</DialogTitle>
            <DialogDescription>
              You are scheduling an interview with our career professionals.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Date:</span>
                <span className="text-gray-700">
                  {selectedDate ? selectedDate.toLocaleDateString("en-US", {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }) : ''}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Time:</span>
                <span className="text-gray-700">{selectedTime}</span>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Interview Session</h3>
                  <p className="text-sm text-gray-500">30-minute video interview</p>
                </div>
                <div className="font-medium">$100.00</div>
              </div>
            </div>
            
            <div className="border-t pt-4 flex justify-between font-medium">
              <div>Total</div>
              <div>$100.00</div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPaymentDialog(false)}>Cancel</Button>
            <Button onClick={handlePayment}>Pay $100.00</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Interview Scheduled!</DialogTitle>
            <DialogDescription>
              Your interview has been successfully scheduled.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center py-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium">You're all set!</h3>
              <div className="text-sm text-gray-600 mt-2 mb-4 space-y-1">
                <p>
                  <span className="font-medium">Date:</span> {selectedDate?.toLocaleDateString("en-US", {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p>
                  <span className="font-medium">Time:</span> {selectedTime}
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-2 mb-4">
                We'll send you an email with a video conference link and reminder before the interview.
              </p>
              <Button className="mb-2 w-full">Add to Calendar</Button>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleCloseSuccess}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Interview;
