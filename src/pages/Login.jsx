import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Building, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useAuth } from "../App";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import logoImage from "../assets/logo.ico";

const Login = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "student"
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Demo credentials for different user types
    const demoCredentials = {
      student: { email: "student@demo.com", password: "demo123" },
      faculty: { email: "faculty@demo.com", password: "demo123" },
      institute: { email: "admin@demo.com", password: "demo123" }
    };

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const userType = activeTab === "institute" ? "institute" : formData.userType;
      const expectedCreds = demoCredentials[userType];

      if (formData.email === expectedCreds.email && formData.password === expectedCreds.password) {
        const userData = {
          id: Math.random().toString(36).substr(2, 9),
          type: userType,
          email: formData.email,
          name: userType === 'student' ? 'John Doe' : userType === 'faculty' ? 'Dr. Smith' : 'Admin User'
        };
        
        login(userData);
        toast({
          title: "Login Successful!",
          description: `Welcome back, ${userData.name}!`,
          duration: 3000,
        });
        navigate(`/${userType}`);
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Use demo credentials.",
          variant: "destructive",
          duration: 4000,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during login.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const roleIcons = {
    student: GraduationCap,
    faculty: Users,
    institute: Building
  };

  const UserIcon = roleIcons[formData.userType];

  return (
    <div className="min-h-screen educational-gradient flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-white/5 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-white/15 rounded-full blur-lg animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 glass-effect">
            <img src={logoImage} alt="EduLogix Logo" className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">EduLogix</h1>
          <p className="text-white/80">Your gateway to educational excellence</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/10 backdrop-blur-sm border border-white/20">
            <TabsTrigger 
              value="user" 
              className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70 font-medium"
            >
              <Users className="w-4 h-4 mr-2" />
              Student / Faculty
            </TabsTrigger>
            <TabsTrigger 
              value="institute" 
              className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70 font-medium"
            >
              <Building className="w-4 h-4 mr-2" />
              Institute
            </TabsTrigger>
          </TabsList>

          <TabsContent value="user" className="space-y-0">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <UserIcon className="w-6 h-6 text-primary-glow" />
                  <CardTitle className="text-xl">
                    {formData.userType === 'student' ? 'Student Login' : 'Faculty Login'}
                  </CardTitle>
                </div>
                <CardDescription className="text-white/70">
                  Access your educational dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* User Type Toggle */}
                <div className="flex space-x-2 mb-4">
                  <Button
                    type="button"
                    variant={formData.userType === 'student' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFormData({...formData, userType: 'student'})}
                    className="flex-1 bg-primary/20 hover:bg-primary/30 border-primary/30"
                  >
                    <GraduationCap className="w-4 h-4 mr-1" />
                    Student
                  </Button>
                  <Button
                    type="button"
                    variant={formData.userType === 'faculty' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFormData({...formData, userType: 'faculty'})}
                    className="flex-1 bg-primary/20 hover:bg-primary/30 border-primary/30"
                  >
                    <Users className="w-4 h-4 mr-1" />
                    Faculty
                  </Button>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/90">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={`${formData.userType}@demo.com`}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary-glow"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white/90">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="demo123"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary-glow pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 text-white/70 hover:text-white hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 group"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Signing In..."
                    ) : (
                      <>
                        Sign In
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="institute" className="space-y-0">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Building className="w-6 h-6 text-secondary" />
                  <CardTitle className="text-xl">Institute Portal</CardTitle>
                </div>
                <CardDescription className="text-white/70">
                  Administrative access panel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="institute-email" className="text-white/90">Admin Email</Label>
                    <Input
                      id="institute-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="admin@demo.com"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-secondary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="institute-password" className="text-white/90">Password</Label>
                    <div className="relative">
                      <Input
                        id="institute-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="demo123"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-secondary pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 text-white/70 hover:text-white hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium py-3 group"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Accessing Portal..."
                    ) : (
                      <>
                        Access Portal
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Badge variant="secondary" className="bg-secondary/20 text-white border-secondary/30">
                  Administrative Access Required
                </Badge>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Demo Credentials Info */}
        <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-center">
          <p className="text-white/90 text-sm font-medium mb-2">Demo Credentials:</p>
          <div className="text-white/70 text-xs space-y-1">
            <p><strong>Student:</strong> student@demo.com / demo123</p>
            <p><strong>Faculty:</strong> faculty@demo.com / demo123</p>
            <p><strong>Institute:</strong> admin@demo.com / demo123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;