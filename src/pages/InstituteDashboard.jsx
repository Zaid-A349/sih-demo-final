import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { InstituteSidebar } from '../components/InstituteSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  GraduationCap, 
  TrendingUp,
  Award,
  Building,
  FileText,
  BarChart3,
  Calendar,
  AlertCircle,
  UserPlus,
  Target
} from "lucide-react";

const InstituteDashboard = () => {
  // Sample data
  const stats = {
    totalStudents: 2456,
    totalFaculty: 234,
    departments: 12,
    pendingApplications: 45,
    monthlyGrowth: 8.5,
    graduationRate: 92
  };

  const departmentData = [
    { name: "Computer Science", students: 486, faculty: 42, head: "Dr. Johnson" },
    { name: "Mechanical Engineering", students: 398, faculty: 38, head: "Prof. Smith" },
    { name: "Electronics & Communication", students: 364, faculty: 35, head: "Dr. Brown" },
    { name: "Civil Engineering", students: 341, faculty: 31, head: "Prof. Wilson" },
    { name: "Information Technology", students: 287, faculty: 28, head: "Dr. Davis" }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "enrollment",
      title: "New student enrollments",
      description: "45 new students enrolled this month",
      time: "2 hours ago",
      icon: UserPlus,
      color: "text-green-600"
    },
    {
      id: 2,
      type: "faculty",
      title: "Faculty performance review completed",
      description: "Q3 performance reviews for CS department",
      time: "4 hours ago",
      icon: Award,
      color: "text-blue-600"
    },
    {
      id: 3,
      type: "report",
      title: "NAAC report submitted",
      description: "Annual NAAC accreditation report submitted successfully",
      time: "1 day ago",
      icon: FileText,
      color: "text-purple-600"
    }
  ];

  const monthlyData = [
    { month: "Jan", students: 2156, faculty: 201 },
    { month: "Feb", students: 2298, faculty: 215 },
    { month: "Mar", students: 2356, faculty: 225 },
    { month: "Apr", students: 2412, faculty: 231 },
    { month: "May", students: 2456, faculty: 234 }
  ];

  const pendingReports = [
    { type: "NAAC", deadline: "Dec 15, 2024", status: "In Progress", priority: "high" },
    { type: "NIRF", deadline: "Jan 30, 2025", status: "Draft", priority: "medium" },
    { type: "AICTE", deadline: "Feb 28, 2025", status: "Not Started", priority: "low" }
  ];

  const getPriorityColor = (priority) => {
    const colors = {
      high: "bg-red-100 text-red-800 border-red-200",
      medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
      low: "bg-green-100 text-green-800 border-green-200"
    };
    return colors[priority] || colors.medium;
  };

  const getStatusColor = (status) => {
    const colors = {
      "In Progress": "bg-blue-100 text-blue-800 border-blue-200",
      "Draft": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "Not Started": "bg-gray-100 text-gray-800 border-gray-200",
      "Completed": "bg-green-100 text-green-800 border-green-200"
    };
    return colors[status] || colors["Not Started"];
  };

  return (
    <DashboardLayout 
      sidebar={<InstituteSidebar />}
      title="Institute Dashboard"
      userType="institute"
    >
      <div className="p-6 space-y-6">
        {/* Welcome Section */}
        <div className="educational-gradient rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Institute Administration Portal</h2>
            <p className="text-white/80 mb-4">
              Comprehensive oversight and management of your educational institution.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold">{stats.totalStudents.toLocaleString()}</div>
                <div className="text-sm text-white/80">Total Students</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold">{stats.totalFaculty}</div>
                <div className="text-sm text-white/80">Faculty Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold">{stats.departments}</div>
                <div className="text-sm text-white/80">Departments</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold">{stats.graduationRate}%</div>
                <div className="text-sm text-white/80">Graduation Rate</div>
              </div>
            </div>
          </div>
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-lg"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Stats */}
          <div className="lg:col-span-3 space-y-6">
            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="card-gradient border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">
                    Total Students
                  </CardTitle>
                  <GraduationCap className="w-4 h-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stats.totalStudents.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+{stats.monthlyGrowth}%</span> this month
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">
                    Faculty Members
                  </CardTitle>
                  <Users className="w-4 h-4 text-secondary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stats.totalFaculty}</div>
                  <p className="text-xs text-muted-foreground">Active teaching staff</p>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">
                    Departments
                  </CardTitle>
                  <Building className="w-4 h-4 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stats.departments}</div>
                  <p className="text-xs text-muted-foreground">Academic divisions</p>
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
                  <div className="text-2xl font-bold text-foreground">{stats.pendingApplications}</div>
                  <p className="text-xs text-muted-foreground">Applications pending</p>
                </CardContent>
              </Card>
            </div>

            {/* Department Overview */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Building className="w-5 h-5 mr-2 text-accent" />
                  Department Overview
                </CardTitle>
                <CardDescription>
                  Student and faculty distribution across academic departments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentData.map((dept, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border/50">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{dept.name}</h4>
                        <p className="text-sm text-muted-foreground">Head: {dept.head}</p>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-foreground">{dept.students}</div>
                          <div className="text-xs text-muted-foreground">Students</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-foreground">{dept.faculty}</div>
                          <div className="text-xs text-muted-foreground">Faculty</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-accent">{Math.round(dept.students / dept.faculty)}</div>
                          <div className="text-xs text-muted-foreground">Ratio</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Growth Analytics */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                  Growth Analytics
                </CardTitle>
                <CardDescription>
                  Monthly growth trends for students and faculty
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">Student Growth</h4>
                    <div className="space-y-2">
                      {monthlyData.slice(-3).map((data, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">{data.month}</span>
                          <span className="text-sm font-medium text-foreground">{data.students.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">Faculty Growth</h4>
                    <div className="space-y-2">
                      {monthlyData.slice(-3).map((data, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">{data.month}</span>
                          <span className="text-sm font-medium text-foreground">{data.faculty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
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
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add New Student
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  Add Faculty Member
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Building className="w-4 h-4 mr-2" />
                  Manage Departments
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
              </CardContent>
            </Card>

            {/* Pending Reports */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <FileText className="w-5 h-5 mr-2 text-primary" />
                  Pending Reports
                </CardTitle>
                <CardDescription>
                  Upcoming accreditation deadlines
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {pendingReports.map((report, index) => (
                  <div key={index} className="p-3 bg-muted/20 rounded-lg border border-border/30">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm text-foreground">{report.type} Report</h4>
                      <Badge className={getPriorityColor(report.priority)}>
                        {report.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">Due: {report.deadline}</p>
                    <Badge className={getStatusColor(report.status)}>
                      {report.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <BarChart3 className="w-5 h-5 mr-2 text-secondary" />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="p-3 bg-muted/20 rounded-lg border border-border/30">
                    <div className="flex items-start space-x-3">
                      <div className={`p-1 rounded-lg bg-background/50 ${activity.color}`}>
                        <activity.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-medium text-foreground">{activity.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Award className="w-5 h-5 mr-2 text-green-600" />
                  System Health
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">Database Performance</span>
                    <span className="text-green-600">Excellent</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">Server Uptime</span>
                    <span className="text-green-600">99.8%</span>
                  </div>
                  <Progress value={99.8} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">User Activity</span>
                    <span className="text-blue-600">High</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InstituteDashboard;