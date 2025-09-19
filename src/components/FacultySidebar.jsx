import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  Home, 
  CheckSquare, 
  FileCheck, 
  Calendar,
  Users,
  MessageSquare
} from "lucide-react";
import { useState } from "react";

export const FacultySidebar = () => {
  const { collapsed } = useSidebar();
  const [activeItem, setActiveItem] = useState("home");

  const menuItems = [
    {
      id: "home",
      title: "Dashboard",
      icon: Home,
    },
    {
      id: "attendance",
      title: "Mark Attendance",
      icon: CheckSquare,
    },
    {
      id: "documents",
      title: "Student Documents",
      icon: FileCheck,
    },
    {
      id: "classes",
      title: "Classes Scheduled", 
      icon: Calendar,
    },
    {
      id: "students",
      title: "My Students",
      icon: Users,
    },
    {
      id: "messages",
      title: "Messages",
      icon: MessageSquare,
    }
  ];

  const isActive = (itemId) => activeItem === itemId;

  return (
    <Sidebar className={`${collapsed ? 'w-16' : 'w-64'} sidebar-gradient border-r border-border/50`}>
      <SidebarContent className="p-4">
        {/* Header */}
        {!collapsed && (
          <div className="mb-6 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
            <h2 className="font-semibold text-secondary text-sm">Faculty Portal</h2>
            <p className="text-xs text-muted-foreground">Manage students & classes</p>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupLabel className={`${collapsed ? 'sr-only' : ''} text-muted-foreground uppercase tracking-wide text-xs font-medium mb-2`}>
            Faculty Tools
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveItem(item.id)}
                    className={`
                      flex items-center w-full p-3 rounded-lg transition-all duration-200 group
                      ${isActive(item.id) 
                        ? 'bg-secondary/10 text-secondary border border-secondary/20 shadow-sm' 
                        : 'hover:bg-muted/50 text-foreground/70 hover:text-foreground'
                      }
                    `}
                  >
                    <item.icon className={`
                      w-5 h-5 transition-all duration-200
                      ${isActive(item.id) ? 'text-secondary' : 'text-muted-foreground group-hover:text-foreground'}
                      ${collapsed ? 'mr-0' : 'mr-3'}
                    `} />
                    {!collapsed && (
                      <span className="font-medium text-sm">{item.title}</span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};