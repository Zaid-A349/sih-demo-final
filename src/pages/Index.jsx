// Smart Student Hub - Modern Educational Platform

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Building, ArrowRight, BookOpen, Award, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Smart Student Hub</h1>
              <p className="text-sm text-muted-foreground">Educational Excellence Platform</p>
            </div>
          </div>
          <Button onClick={() => window.location.href = '/login'} className="bg-primary hover:bg-primary/90">
            <Users className="w-4 h-4 mr-2" />
            Access Portal
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="educational-gradient text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Educational Institution
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            A comprehensive digital platform that centralizes student achievements, 
            streamlines faculty management, and empowers institutional excellence.
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/login'}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Comprehensive Educational Management</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform serves three distinct user types with specialized dashboards and functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Portal */}
            <Card className="card-gradient border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-foreground">Student Portal</CardTitle>
                <CardDescription>
                  Comprehensive academic tracking and portfolio generation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4 mr-2 text-primary" />
                    Academic Records & Attendance
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Award className="w-4 h-4 mr-2 text-primary" />
                    Achievement Documentation
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BarChart3 className="w-4 h-4 mr-2 text-primary" />
                    Portfolio Generation
                  </div>
                </div>
                <Badge className="w-full justify-center bg-primary/10 text-primary border-primary/20">
                  Student Access
                </Badge>
              </CardContent>
            </Card>

            {/* Faculty Portal */}
            <Card className="card-gradient border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-foreground">Faculty Portal</CardTitle>
                <CardDescription>
                  Student management and academic oversight tools
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4 mr-2 text-secondary" />
                    Attendance Management
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Award className="w-4 h-4 mr-2 text-secondary" />
                    Document Approval
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BarChart3 className="w-4 h-4 mr-2 text-secondary" />
                    Class Scheduling
                  </div>
                </div>
                <Badge className="w-full justify-center bg-secondary/10 text-secondary border-secondary/20">
                  Faculty Access
                </Badge>
              </CardContent>
            </Card>

            {/* Institute Portal */}
            <Card className="card-gradient border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-foreground">Institute Portal</CardTitle>
                <CardDescription>
                  Complete administrative control and reporting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4 mr-2 text-accent" />
                    User Management
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Award className="w-4 h-4 mr-2 text-accent" />
                    NAAC/NIRF/AICTE Reports
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BarChart3 className="w-4 h-4 mr-2 text-accent" />
                    Analytics & Insights
                  </div>
                </div>
                <Badge className="w-full justify-center bg-accent/10 text-accent border-accent/20">
                  Admin Access
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of educational institutions already using Smart Student Hub to streamline their operations.
          </p>
          <Button 
            size="lg" 
            onClick={() => window.location.href = '/login'}
            className="bg-primary hover:bg-primary/90 group"
          >
            Access Your Portal
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2024 Smart Student Hub. Transforming education through technology.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
