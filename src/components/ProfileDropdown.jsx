import React from 'react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Settings, CreditCard, LogOut, Palette, Shield } from "lucide-react";

export const ProfileDropdown = ({ user, userType, getUserTypeColor, getInitials, onLogout }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-3 hover:bg-muted/60 rounded-lg p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-card border border-border/30">
        <div className="text-right">
          <p className="text-sm font-medium text-foreground">{user?.name}</p>
          <Badge className={`text-xs ${getUserTypeColor(userType)}`}>
            {userType.charAt(0).toUpperCase() + userType.slice(1)}
          </Badge>
        </div>
        <Avatar className="ring-2 ring-primary/30">
          <AvatarImage src="/api/placeholder/32/32" alt={user?.name} />
          <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
            {getInitials(user?.name || 'User')}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-64 p-2 bg-card border border-border shadow-lg" align="end" sideOffset={5}>
        <DropdownMenuLabel className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/api/placeholder/48/48" alt={user?.name} />
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-lg">
              {getInitials(user?.name || 'User')}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{user?.name}</p>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
            <Badge className={`text-xs mt-1 ${getUserTypeColor(userType)}`}>
              {userType.charAt(0).toUpperCase() + userType.slice(1)}
            </Badge>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem className="flex items-center space-x-2 p-3 cursor-pointer hover:bg-muted/50 rounded-md transition-colors">
          <User className="w-4 h-4 text-primary" />
          <span>View Profile</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="flex items-center space-x-2 p-3 cursor-pointer hover:bg-muted/50 rounded-md transition-colors">
          <Settings className="w-4 h-4 text-primary" />
          <span>Account Settings</span>
        </DropdownMenuItem>
        
        {userType === 'student' && (
          <DropdownMenuItem className="flex items-center space-x-2 p-3 cursor-pointer hover:bg-muted/50 rounded-md transition-colors">
            <CreditCard className="w-4 h-4 text-primary" />
            <span>Premium Portfolio</span>
          </DropdownMenuItem>
        )}
        
        <DropdownMenuItem className="flex items-center space-x-2 p-3 cursor-pointer hover:bg-muted/50 rounded-md transition-colors">
          <Palette className="w-4 h-4 text-primary" />
          <span>Theme Settings</span>
        </DropdownMenuItem>
        
        {userType === 'institute' && (
          <DropdownMenuItem className="flex items-center space-x-2 p-3 cursor-pointer hover:bg-muted/50 rounded-md transition-colors">
            <Shield className="w-4 h-4 text-primary" />
            <span>Admin Panel</span>
          </DropdownMenuItem>
        )}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          className="flex items-center space-x-2 p-3 cursor-pointer text-destructive focus:text-destructive hover:bg-destructive/10 rounded-md transition-colors"
          onClick={onLogout}
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};