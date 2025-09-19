import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { StudentSidebar } from '../components/StudentSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Calendar, 
  Award, 
  TrendingUp, 
  Clock,
  FileText,
  Users,
  Target,
  Bell,
  Download
} from "lucide-react";

const StudentDashboard = () => {
  // Sample data
  const stats = {
    attendance: 85,
    cgpa: 8.2,
    completedCourses: 12,
    activeCourses: 6
  };

  const recentActivities = [
    {
      id: 1,
      type: "document",
      title: "Internship Certificate uploaded successfully",
      description: "Your internship certificate has been approved by Dr. Smith",
      time: "2 hours ago",
      icon: Award,
      color: "text-green-600"
    },
    {
      id: 2,
      type: "assignment",
      title: "New assignment posted in Data Structures",
      description: "Assignment 3: Binary Trees - Due in 3 days",
      time: "5 hours ago", 
      icon: BookOpen,
      color: "text-blue-600"
    },
    {
      id: 3,
      type: "message",
      title: "Message from Institute Administration",
      description: "Important: Update your contact information before semester end",
      time: "1 day ago",
      icon: Bell,
      color: "text-orange-600"
    }
  ];

  const upcomingClasses = [
    {
      subject: "Data Structures",
      time: "09:00 AM - 10:30 AM",
      instructor: "Dr. Johnson",
      room: "CS-101"
    },
    {
      subject: "Database Management",
      time: "11:00 AM - 12:30 PM", 
      instructor: "Prof. Williams",
      room: "CS-205"
    },
    {
      subject: "Software Engineering",
      time: "02:00 PM - 03:30 PM",
      instructor: "Dr. Brown",
      room: "CS-301"
    }
  ];

  return (
    <DashboardLayout 
      sidebar={<StudentSidebar />}
      title="Student Dashboard"
      userType="student"
    >
      <div className="p-6 space-y-6">
        {/* Welcome Section */}
        <div className="educational-gradient rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Welcome Back, John!</h2>
            <p className="text-white/80 mb-4">
              Ready to continue your educational journey? Here's your daily overview.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold">{stats.cgpa}</div>
                <div className="text-sm text-white/80">Current CGPA</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold">{stats.attendance}%</div>
                <div className="text-sm text-white/80">Attendance</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold">{stats.activeCourses}</div>
                <div className="text-sm text-white/80">Active Courses</div>
              </div>
            </div>
          </div>
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Academic Overview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Performance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="card-gradient border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">
                    Overall Attendance
                  </CardTitle>
                  <Calendar className="w-4 h-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground mb-2">{stats.attendance}%</div>
                  <Progress value={stats.attendance} className="mb-2" />
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+2%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">
                    Academic Performance
                  </CardTitle>
                  <Award className="w-4 h-4 text-secondary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground mb-2">{stats.cgpa}/10</div>
                  <Progress value={stats.cgpa * 10} className="mb-2" />
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">Excellent</span> performance
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Recent Activities
                </CardTitle>
                <CardDescription>
                  Stay updated with your latest academic activities and notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 p-3 bg-muted/20 rounded-lg border border-border/50">
                    <div className={`p-2 rounded-lg bg-background/50 ${activity.color}`}>
                      <activity.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-foreground">{activity.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
                      <p className="text-xs text-muted-foreground mt-2 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4">
                  View All Activities
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Today's Classes
                </CardTitle>
                <CardDescription>
                  Your schedule for today
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingClasses.map((class_, index) => (
                  <div key={index} className="p-3 bg-muted/20 rounded-lg border border-border/30">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm text-foreground">{class_.subject}</h4>
                      <Badge variant="outline" className="text-xs">
                        {class_.room}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{class_.time}</p>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {class_.instructor}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Target className="w-5 h-5 mr-2 text-accent" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Upload Document
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Generate Portfolio
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Attendance
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Award className="w-4 h-4 mr-2" />
                  Check CGPA
                </Button>
              </CardContent>
            </Card>

            {/* Study Progress */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                  Study Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">Completed Courses</span>
                    <span className="text-muted-foreground">{stats.completedCourses}/18</span>
                  </div>
                  <Progress value={(stats.completedCourses / 18) * 100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">Current Semester</span>
                    <span className="text-muted-foreground">6/8 subjects</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;