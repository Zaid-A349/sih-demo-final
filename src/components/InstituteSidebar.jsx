import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  Home,
  Users,
  UserPlus,
  Building,
  FileText,
  BarChart3,
  TrendingUp,
  Award,
  ChevronRight
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

export const InstituteSidebar = () => {
  const { collapsed } = useSidebar();
  const [activeItem, setActiveItem] = useState("home");
  const [openGroups, setOpenGroups] = useState(["manage", "reports"]);

  const toggleGroup = (groupName) => {
    setOpenGroups(prev => 
      prev.includes(groupName) 
        ? prev.filter(g => g !== groupName)
        : [...prev, groupName]
    );
  };

  const menuItems = [
    {
      id: "home",
      title: "Dashboard",
      icon: Home,
      type: "single"
    },
    {
      id: "manage",
      title: "Manage Users", 
      icon: Users,
      type: "group",
      items: [
        { id: "manage-students", title: "Manage Students", icon: Users },
        { id: "manage-faculty", title: "Manage Faculty", icon: Users }
      ]
    },
    {
      id: "add-users",
      title: "Add New Users",
      icon: UserPlus,
      type: "group",
      items: [
        { id: "add-student", title: "Add Student", icon: UserPlus },
        { id: "add-faculty", title: "Add Faculty", icon: UserPlus }
      ]
    },
    {
      id: "departments",
      title: "Manage Departments",
      icon: Building,
      type: "single"
    },
    {
      id: "reports",
      title: "Reports",
      icon: FileText,
      type: "group",
      items: [
        { id: "naac-report", title: "NAAC Report", icon: FileText },
        { id: "nirf-report", title: "NIRF Report", icon: BarChart3 },
        { id: "aicte-report", title: "AICTE Report", icon: TrendingUp }
      ]
    },
    {
      id: "analytics",
      title: "Analytics",
      icon: BarChart3,
      type: "group",
      items: [
        { id: "student-reports", title: "Student Reports", icon: Users },
        { id: "faculty-ranking", title: "Faculty Ranking", icon: Award }
      ]
    }
  ];

  const isActive = (itemId) => activeItem === itemId;
  const isGroupOpen = (groupId) => openGroups.includes(groupId);

  return (
    <Sidebar className={`${collapsed ? 'w-16' : 'w-64'} sidebar-gradient border-r border-border/50`}>
      <SidebarContent className="p-4">
        {/* Header */}
        {!collapsed && (
          <div className="mb-6 p-3 bg-accent/10 rounded-lg border border-accent/20">
            <h2 className="font-semibold text-accent text-sm">Institute Portal</h2>
            <p className="text-xs text-muted-foreground">Administrative control center</p>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupLabel className={`${collapsed ? 'sr-only' : ''} text-muted-foreground uppercase tracking-wide text-xs font-medium mb-2`}>
            Administration
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  {item.type === 'single' ? (
                    <SidebarMenuButton
                      onClick={() => setActiveItem(item.id)}
                      className={`
                        flex items-center w-full p-3 rounded-lg transition-all duration-200 group
                        ${isActive(item.id) 
                          ? 'bg-accent/10 text-accent border border-accent/20 shadow-sm' 
                          : 'hover:bg-muted/50 text-foreground/70 hover:text-foreground'
                        }
                      `}
                    >
                      <item.icon className={`
                        w-5 h-5 transition-all duration-200
                        ${isActive(item.id) ? 'text-accent' : 'text-muted-foreground group-hover:text-foreground'}
                        ${collapsed ? 'mr-0' : 'mr-3'}
                      `} />
                      {!collapsed && (
                        <span className="font-medium text-sm">{item.title}</span>
                      )}
                    </SidebarMenuButton>
                  ) : (
                    <Collapsible open={isGroupOpen(item.id)} onOpenChange={() => toggleGroup(item.id)}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={`
                            flex items-center justify-between w-full p-3 rounded-lg transition-all duration-200 group
                            ${isGroupOpen(item.id) 
                              ? 'bg-muted/30 text-foreground' 
                              : 'hover:bg-muted/50 text-foreground/70 hover:text-foreground'
                            }
                          `}
                        >
                          <div className="flex items-center">
                            <item.icon className={`
                              w-5 h-5 transition-all duration-200
                              ${isGroupOpen(item.id) ? 'text-accent' : 'text-muted-foreground group-hover:text-foreground'}
                              ${collapsed ? 'mr-0' : 'mr-3'}
                            `} />
                            {!collapsed && (
                              <span className="font-medium text-sm">{item.title}</span>
                            )}
                          </div>
                          {!collapsed && (
                            <ChevronRight className={`
                              w-4 h-4 transition-transform duration-200 text-muted-foreground
                              ${isGroupOpen(item.id) ? 'rotate-90' : ''}
                            `} />
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      {!collapsed && (
                        <CollapsibleContent className="mt-1">
                          <SidebarMenuSub className="ml-4 space-y-1">
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.id}>
                                <SidebarMenuSubButton
                                  onClick={() => setActiveItem(subItem.id)}
                                  className={`
                                    flex items-center w-full p-2 rounded-md transition-all duration-200 text-sm group
                                    ${isActive(subItem.id)
                                      ? 'bg-accent/10 text-accent border border-accent/20'
                                      : 'hover:bg-muted/30 text-muted-foreground hover:text-foreground'
                                    }
                                  `}
                                >
                                  <subItem.icon className={`
                                    w-4 h-4 mr-2 transition-colors duration-200
                                    ${isActive(subItem.id) ? 'text-accent' : 'text-muted-foreground group-hover:text-foreground'}
                                  `} />
                                  {subItem.title}
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};