import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { FacultySidebar } from '../components/FacultySidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  CheckSquare, 
  FileCheck, 
  Calendar,
  Clock,
  TrendingUp,
  AlertCircle,
  BookOpen,
  MessageSquare
} from "lucide-react";

const FacultyDashboard = () => {
  // Sample data
  const stats = {
    totalStudents: 156,
    classesToday: 4,
    pendingDocuments: 23,
    averageAttendance: 78
  };

  const recentDocuments = [
    {
      id: 1,
      student: "John Doe",
      document: "Internship Certificate",
      course: "Computer Science",
      submittedAt: "2 hours ago",
      status: "pending"
    },
    {
      id: 2,
      student: "Jane Smith",
      document: "Project Report",
      course: "Data Structures",
      submittedAt: "4 hours ago", 
      status: "pending"
    },
    {
      id: 3,
      student: "Mike Johnson",
      document: "Seminar Certificate",
      course: "Database Systems",
      submittedAt: "1 day ago",
      status: "approved"
    }
  ];

  const todayClasses = [
    {
      subject: "Data Structures",
      time: "09:00 AM - 10:30 AM",
      room: "CS-101",
      students: 45,
      type: "Lecture"
    },
    {
      subject: "Database Management",
      time: "11:00 AM - 12:30 PM",
      room: "CS-205", 
      students: 38,
      type: "Lab"
    },
    {
      subject: "Software Engineering",
      time: "02:00 PM - 03:30 PM",
      room: "CS-301",
      students: 42,
      type: "Lecture"
    },
    {
      subject: "Algorithm Design",
      time: "04:00 PM - 05:30 PM",
      room: "CS-102",
      students: 31,
      type: "Tutorial"
    }
  ];

  const messages = [
    {
      id: 1,
      from: "Institute Administration",
      subject: "Faculty Meeting Scheduled",
      preview: "Monthly faculty meeting on Friday at 2:00 PM...",
      time: "1 hour ago",
      unread: true
    },
    {
      id: 2,
      from: "Dr. Sarah Wilson",
      subject: "Curriculum Review Committee",
      preview: "Please review the proposed changes to the curriculum...",
      time: "3 hours ago",
      unread: false
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      approved: "bg-green-100 text-green-800 border-green-200",
      rejected: "bg-red-100 text-red-800 border-red-200"
    };
    return colors[status] || colors.pending;
  };

  const getClassTypeColor = (type) => {
    const colors = {
      Lecture: "bg-blue-100 text-blue-800 border-blue-200",
      Lab: "bg-purple-100 text-purple-800 border-purple-200",
      Tutorial: "bg-green-100 text-green-800 border-green-200"
    };
    return colors[type] || colors.Lecture;
  };

  return (
    <DashboardLayout 
      sidebar={<FacultySidebar />}
      title="Faculty Dashboard"
      userType="faculty"
    >
      <div className="p-6 space-y-6">
        {/* Welcome Section */}
        <div className="educational-gradient rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Good morning, Dr. Smith!</h2>
            <p className="text-white/80 mb-4">
              Ready to inspire minds today? Here's your faculty overview.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold">{stats.totalStudents}</div>
                <div className="text-sm text-white/80">Total Students</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold">{stats.classesToday}</div>
                <div className="text-sm text-white/80">Classes Today</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold">{stats.pendingDocuments}</div>
                <div className="text-sm text-white/80">Pending Reviews</div>
              </div>
            </div>
          </div>
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="card-gradient border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">
                    My Students
                  </CardTitle>
                  <Users className="w-4 h-4 text-secondary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stats.totalStudents}</div>
                  <p className="text-xs text-muted-foreground">Across all courses</p>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">
                    Avg. Attendance
                  </CardTitle>
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stats.averageAttendance}%</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+3%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">
                    Pending Reviews
                  </CardTitle>
                  <AlertCircle className="w-4 h-4 text-yellow-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stats.pendingDocuments}</div>
                  <p className="text-xs text-muted-foreground">Documents to review</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Documents */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <FileCheck className="w-5 h-5 mr-2 text-secondary" />
                  Recent Document Submissions
                </CardTitle>
                <CardDescription>
                  Student documents awaiting your review and approval
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentDocuments.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border/50">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-secondary/10 rounded-lg">
                        <FileCheck className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground">{doc.document}</h4>
                        <p className="text-xs text-muted-foreground">
                          {doc.student} • {doc.course}
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                          <Clock className="w-3 h-3 mr-1" />
                          {doc.submittedAt}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(doc.status)}>
                        {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                      </Badge>
                      {doc.status === 'pending' && (
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline" className="h-8 px-2 text-xs bg-green-50 text-green-700 hover:bg-green-100 border-green-200">
                            Approve
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 px-2 text-xs bg-red-50 text-red-700 hover:bg-red-100 border-red-200">
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Submissions
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
                  <Calendar className="w-5 h-5 mr-2 text-secondary" />
                  Today's Classes
                </CardTitle>
                <CardDescription>
                  Your teaching schedule for today
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {todayClasses.map((class_, index) => (
                  <div key={index} className="p-3 bg-muted/20 rounded-lg border border-border/30">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm text-foreground">{class_.subject}</h4>
                      <Badge className={getClassTypeColor(class_.type)}>
                        {class_.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{class_.time}</p>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {class_.room}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {class_.students} students
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <CheckSquare className="w-5 h-5 mr-2 text-accent" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <CheckSquare className="w-4 h-4 mr-2" />
                  Mark Attendance
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileCheck className="w-4 h-4 mr-2" />
                  Review Documents
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Create Assignment
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  View Students
                </Button>
              </CardContent>
            </Card>

            {/* Messages */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                  Recent Messages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {messages.map((message) => (
                  <div key={message.id} className={`p-3 rounded-lg border ${message.unread ? 'bg-primary/5 border-primary/20' : 'bg-muted/20 border-border/30'}`}>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className={`text-xs font-medium ${message.unread ? 'text-primary' : 'text-foreground'}`}>
                        {message.from}
                      </h4>
                      <span className="text-xs text-muted-foreground">{message.time}</span>
                    </div>
                    <p className="text-xs font-medium text-foreground mb-1">{message.subject}</p>
                    <p className="text-xs text-muted-foreground">{message.preview}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full" size="sm">
                  View All Messages
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FacultyDashboard;