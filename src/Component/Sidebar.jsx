"use client";
import { useState } from "react";
import { 
  LayoutDashboard, 
  FileText, 
  Link as LinkIcon,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  ChevronDown,
  Plus,
  Search,
  Bell,
  User,
  MoreHorizontal
} from "lucide-react";
import { Button } from "@/Component/ui/button";
import { Input } from "@/Component/ui/input";
import { Avatar, AvatarFallback } from "@/Component/ui/avatar";

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState(['blogs']);

  const toggleSection = (section) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: FileText, label: "Blogs", href: "/blogs", hasSubmenu: true, section: "blogs" },
    { icon: LinkIcon, label: "Link Audit", href: "/link-audit" },
    { icon: BarChart3, label: "Analytics", href: "/analytics" },
    { icon: Users, label: "Team Management", href: "/team" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const blogSubmenuItems = [
    { label: "Latest Blog Posts", href: "/blogs/latest" },
    { label: "Blog Categories", href: "/blogs/categories" },
    { label: "Draft Posts", href: "/blogs/drafts" },
    { label: "Scheduled Posts", href: "/blogs/scheduled" },
    { label: "Blog Settings", href: "/blogs/settings" },
  ];

  return (
    <div className="w-64 h-screen bg-sidebar-bg text-sidebar-text flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-sidebar-hover">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold text-white">DA</span>
          </div>
          <span className="font-semibold text-lg">DashFlow AI</span>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sidebar-text-muted" />
          <Input 
            placeholder="Search..." 
            className="pl-10 bg-sidebar-hover border-sidebar-hover text-sidebar-text placeholder:text-sidebar-text-muted focus:border-sidebar-active"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-2">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <div>
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-sidebar-text hover:bg-sidebar-hover hover:text-sidebar-text ${
                    item.label === "Blogs" ? "bg-sidebar-active text-white" : ""
                  }`}
                  onClick={item.hasSubmenu ? () => toggleSection(item.section) : undefined}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                  {item.hasSubmenu && (
                    <ChevronDown 
                      className={`ml-auto h-4 w-4 transition-transform ${
                        expandedSections.includes(item.section) ? "transform rotate-180" : ""
                      }`} 
                    />
                  )}
                </Button>
              </div>
              {item.hasSubmenu && expandedSections.includes(item.section) && (
                <ul className="ml-4 mt-1 space-y-1">
                  {blogSubmenuItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-sidebar-text-muted hover:bg-sidebar-hover hover:text-sidebar-text text-sm py-1 h-8"
                      >
                        {subItem.label}
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-sidebar-hover">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-primary text-white text-xs">SA</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium text-sidebar-text">Sample</p>
            <p className="text-xs text-sidebar-text-muted">sample@example.com</p>
          </div>
          <Button variant="ghost" size="sm" className="text-sidebar-text-muted hover:text-sidebar-text">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;