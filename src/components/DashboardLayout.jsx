import React, { useState } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { LogOut, Bell } from "lucide-react";
import { useAuth } from "../App";
import { LogoutDialog } from "./LogoutDialog";
import { useNavigate } from "react-router-dom";

export const DashboardLayout = ({ children, sidebar, title, userType }) => {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getUserTypeColor = (type) => {
    const colors = {
      student: "bg-primary/10 text-primary border-primary/20",
      faculty: "bg-secondary/10 text-secondary border-secondary/20", 
      institute: "bg-accent/10 text-accent border-accent/20"
    };
    return colors[type] || colors.student;
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <SidebarProvider defaultOpen={true} className="min-h-screen">
      <div className="flex min-h-screen w-full">
        {sidebar}
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="flex h-16 items-center justify-between px-6">
              <div className="flex items-center space-x-4">
                <SidebarTrigger className="text-muted-foreground" />
                <div>
                  <h1 className="text-xl font-semibold text-foreground">{title}</h1>
                  <p className="text-sm text-muted-foreground">
                    Welcome back, {user?.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full text-xs flex items-center justify-center text-white">
                    3
                  </span>
                </Button>
                
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{user?.name}</p>
                    <Badge className={`text-xs ${getUserTypeColor(userType)}`}>
                      {userType.charAt(0).toUpperCase() + userType.slice(1)}
                    </Badge>
                  </div>
                  <Avatar>
                    <AvatarImage src="/api/placeholder/32/32" alt={user?.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {getInitials(user?.name || 'User')}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowLogoutDialog(true)}
                  className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                >
                  <LogOut className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 bg-muted/30">
            {children}
          </main>
        </div>
      </div>

      <LogoutDialog
        open={showLogoutDialog}
        onOpenChange={setShowLogoutDialog}
        onConfirm={handleLogout}
      />
    </SidebarProvider>
  );
};