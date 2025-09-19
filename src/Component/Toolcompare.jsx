"use client";
import { useState } from "react";
import { Button } from "@/Component/ui/button";
import { Input } from "@/Component/ui/input";
import { Textarea } from "@/Component/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/Component/ui/card";
import { Label } from "@/Component/ui/label";
import { 
  Plus, 
  X, 
  Upload, 
  Eye, 
  ExternalLink,
  Trash2,
  Edit,
  Copy,
  MoreHorizontal,
  ChevronDown,
  Star,
  Users,
  Calendar
} from "lucide-react";
import { Badge } from "@/Component/ui/badge";
import { Switch } from "@/Component/ui/switch";

const ToolsComparisonBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [toolsMentioned, setToolsMentioned] = useState([
    { id: "1", name: "Aahton", description: "Mention of tool" },
    { id: "2", name: "Norton", description: "Mention of tool" }
  ]);
  
  const [blogSections, setBlogSections] = useState([
    {
      id: "1",
      title: "Blog Section One",
      content: "Blog heading",
      tools: []
    },
    {
      id: "2", 
      title: "Blog Section Two",
      content: "Blog heading",
      tools: []
    }
  ]);

  const [bannerFields, setBannerFields] = useState({
    title: "",
    tag: "",
    "banner-one": "",
    "banner-two": "",
    "banner-three": "",
    "banner-four": "",
    "banner-five": "",
  });

  const addTool = () => {
    const newTool = {
      id: Date.now().toString(),
      name: "New Tool",
      description: "Tool description"
    };
    setToolsMentioned([...toolsMentioned, newTool]);
  };

  const removeTool = (id) => {
    setToolsMentioned(toolsMentioned.filter(tool => tool.id !== id));
  };

  const addBlogSection = () => {
    const newSection = {
      id: Date.now().toString(),
      title: `Blog Section ${blogSections.length + 1}`,
      content: "Blog heading",
      tools: []
    };
    setBlogSections([...blogSections, newSection]);
  };

  const removeBlogSection = (id) => {
    setBlogSections(blogSections.filter(section => section.id !== id));
  };

  return (
    <div className="flex-1 bg-background overflow-auto">
      {/* Header */}
      <div className="bg-card border-b border-card-border p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">✓</span>
            </div>
            <h1 className="text-xl font-semibold text-foreground">Create New Tools Comparison Blog</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              Generate Blog
            </Button>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Current Blog
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-8">
        {/* Blog Hero Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Blog Hero Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="blog-title">BLOG TITLE</Label>
                <Input
                  id="blog-title"
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                  placeholder="Blog Title Here"
                  className="border-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hero-keywords">HERO KEYWORDS</Label>
                <Input
                  id="hero-keywords"
                  placeholder="Hero Keywords"
                  className="border-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="primary-keyword">Primary CTA Button Text</Label>
                <Input
                  id="primary-keyword"
                  placeholder="Primary CTA Button Text"
                  className="border-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="secondary-keyword">Primary CTA Button Link</Label>
                <Input
                  id="secondary-keyword"
                  placeholder="Primary CTA Button Link"
                  className="border-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="secondary-cta-text">Secondary CTA Button Text</Label>
                <Input
                  id="secondary-cta-text"
                  placeholder="Secondary CTA Button Text"
                  className="border-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="secondary-cta-link">Secondary CTA Button Link</Label>
                <Input
                  id="secondary-cta-link"
                  placeholder="Secondary CTA Button Link"
                  className="border-input"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Comparison / Progress Experience</Label>
              <div className="flex gap-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Import from tool
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Add from manual input
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tools Mentioned */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Tools Mentioned</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Section Headline</Label>
                <Input placeholder="Our Favorite CRM Tools For Small Businesses Mentioned..." className="border-input" />
              </div>
              <div className="space-y-2">
                <Label>Button Link</Label>
                <Input placeholder="Tools with description link text for a continuation..." className="border-input" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Section & Sub Tools Section</Label>
              <div className="space-y-3">
                {toolsMentioned.map((tool) => (
                  <div key={tool.id} className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {tool.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{tool.name}</p>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeTool(tool.id)}
                      className="text-error hover:text-error hover:bg-error/10"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button 
                variant="outline" 
                onClick={addTool}
                className="w-full mt-3"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Tool
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sticky Banner Offer Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Sticky Banner Offer Card</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="banner-title">Add Tool Headline Here</Label>
                <Input
                  id="banner-title"
                  value={bannerFields.title}
                  onChange={(e) => setBannerFields({...bannerFields, title: e.target.value})}
                  placeholder="Title"
                  className="border-input"
                />
              </div>
              <div className="space-y-2">
                <Label>SEE View Requests →</Label>
                <Button variant="outline" className="w-full justify-start">
                  SEE View Requests →
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {Object.entries(bannerFields).filter(([key]) => key.startsWith('banner-')).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <Label htmlFor={key}>{key.replace('banner-', 'Banner ').replace('-', ' ')}</Label>
                  <Input
                    id={key}
                    value={value}
                    onChange={(e) => setBannerFields({...bannerFields, [key]: e.target.value})}
                    placeholder="Content"
                    className="border-input"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tool Blog Cards */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Tool Blog Cards</CardTitle>
            <Button variant="outline" className="text-primary">
              ALL LIVE (14) Blog Cards →
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {blogSections.map((section, index) => (
              <div key={section.id} className="border border-card-border rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
                      <span className="text-xs">≡</span>
                    </div>
                    <h3 className="font-medium">{section.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removeBlogSection(section.id)}
                      className="text-error hover:text-error"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Blog Title</Label>
                    <Input placeholder="Blog Heading" className="border-input" />
                  </div>

                  <div className="space-y-2">
                    <Label>Blog Meta Text Fields</Label>
                    <Input placeholder="Blog Meta Message" className="border-input" />
                  </div>

                  <div className="space-y-2">
                    <Label>Select-fit & Add new Messages used to the blog</Label>
                    <Textarea 
                      placeholder="Select-fit & Add new Messages used to the blog"
                      className="border-input min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 border border-card-border rounded-lg">
                      <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">S</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">SLACK ●</p>
                        <p className="text-xs text-muted-foreground">The team chat</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 border border-card-border rounded-lg">
                      <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">N</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Notion ●</p>
                        <p className="text-xs text-muted-foreground">The team note</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            <Button 
              variant="outline" 
              onClick={addBlogSection}
              className="w-full"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Blog Section
            </Button>
          </CardContent>
        </Card>

        {/* More Comparison Tools Blog */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">More Comparison Tools Blog</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Search All & Create List Of Mix And Feature Disclosure</Label>
              <div className="space-y-3">
                <Input placeholder="Search in house" className="border-input" />
                
                <div className="grid grid-cols-3 gap-4">
                  <Card className="p-4 text-center space-y-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-medium">Freeway to Webflow</h4>
                    <p className="text-xs text-muted-foreground">
                      A simple way to turn static web designs
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <Star className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <Button size="sm" className="w-full bg-black text-white hover:bg-gray-800">
                      View Full Comparison
                    </Button>
                  </Card>

                  <Card className="p-4 text-center space-y-3">
                    <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-medium">Slack to Google Chat</h4>
                    <p className="text-xs text-muted-foreground">
                      Keep all of the team communications that
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <Star className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      View Full Comparison
                    </Button>
                  </Card>

                  <Card className="p-4 text-center space-y-3">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-medium">Gemini vs ChatGPT</h4>
                    <p className="text-xs text-muted-foreground">
                      A robust suite of out to tools such as
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <Star className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <Button size="sm" className="w-full">
                      View Full Comparison
                    </Button>
                  </Card>
                </div>
              </div>
            </div>

            <div className="border-t border-card-border pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium mb-2">Save & Publish</h4>
                  <p className="text-sm text-muted-foreground">
                    Publish Comparison Blog
                  </p>
                </div>
                <Button className="bg-primary hover:bg-primary-hover">
                  <Plus className="w-4 h-4 mr-2" />
                  Publish Comparison Blog
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ToolsComparisonBlog;