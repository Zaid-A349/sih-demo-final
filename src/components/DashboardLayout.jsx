import React, { useState } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { useAuth } from "../App";
import { LogoutDialog } from "./LogoutDialog";
import { ProfileDropdown } from "./ProfileDropdown";
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
            <div className="flex h-16 items-center justify-between px-4 md:px-6 gap-4">
              <div className="flex items-center space-x-3 min-w-0 flex-1">
                <SidebarTrigger className="text-muted-foreground flex-shrink-0" />
                <div className="min-w-0">
                  <h1 className="text-lg md:text-xl font-semibold text-foreground truncate">{title}</h1>
                  <p className="text-xs md:text-sm text-muted-foreground truncate">
                    Welcome back, {user?.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
                <Button variant="ghost" size="icon" className="relative hover:bg-accent/50">
                  <Bell className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full text-xs flex items-center justify-center text-white">
                    3
                  </span>
                </Button>
                
                <ProfileDropdown 
                  user={user}
                  userType={userType}
                  getUserTypeColor={getUserTypeColor}
                  getInitials={getInitials}
                  onLogout={() => setShowLogoutDialog(true)}
                />
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