
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";

const CustomLayout = () => {
  const [layoutName, setLayoutName] = useState("");
  const [layoutHTML, setLayoutHTML] = useState("");
  const [layoutCSS, setLayoutCSS] = useState("");

  const handleSaveLayout = () => {
    if (!layoutName.trim()) {
      toast({
        title: "Layout name required",
        description: "Please provide a name for your custom layout",
        variant: "destructive",
      });
      return;
    }

    if (!layoutHTML.trim()) {
      toast({
        title: "HTML template required",
        description: "Please provide HTML for your custom layout",
        variant: "destructive",
      });
      return;
    }

    // Here we would save the layout to a database
    // For now, we'll just show a success toast
    toast({
      title: "Layout saved",
      description: `Your custom layout "${layoutName}" has been saved successfully.`,
    });
  };

  return (
    <div className="min-h-[calc(100vh-136px)] bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Create Custom Layout
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-600 sm:text-xl">
            Design your own signature layout template
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-semibold text-center">Layout Editor</h2>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="layoutName">Layout Name</Label>
                    <Input
                      id="layoutName"
                      value={layoutName}
                      onChange={(e) => setLayoutName(e.target.value)}
                      placeholder="e.g., Modern Compact"
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="layoutHTML">HTML Template</Label>
                    <Textarea
                      id="layoutHTML"
                      value={layoutHTML}
                      onChange={(e) => setLayoutHTML(e.target.value)}
                      placeholder="<div class='signature'>{{name}}</div>"
                      className="h-40 font-mono"
                    />
                    <p className="text-xs text-gray-500">
                      Use placeholders like {`{{name}}, {{email}}`}, etc. for dynamic content.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="layoutCSS">Custom CSS (optional)</Label>
                    <Textarea
                      id="layoutCSS"
                      value={layoutCSS}
                      onChange={(e) => setLayoutCSS(e.target.value)}
                      placeholder=".signature { font-family: Arial; }"
                      className="h-40 font-mono"
                    />
                  </div>
                  
                  <Button 
                    className="w-full" 
                    onClick={handleSaveLayout}
                  >
                    Save Custom Layout
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-semibold text-center">Preview</h2>
                <div className="border border-gray-200 rounded-md p-4 min-h-[300px] bg-white">
                  <div className="text-center text-gray-500 italic">
                    {layoutHTML ? (
                      <div 
                        dangerouslySetInnerHTML={{ 
                          __html: layoutHTML
                            .replace(/{{name}}/g, "John Doe")
                            .replace(/{{title}}/g, "Marketing Director")
                            .replace(/{{company}}/g, "Acme Corporation")
                            .replace(/{{email}}/g, "john@example.com")
                            .replace(/{{phone}}/g, "+1 (555) 123-4567")
                            .replace(/{{website}}/g, "www.example.com")
                        }} 
                        style={{ 
                          fontFamily: 'Arial, sans-serif',
                          ...(layoutCSS ? { style: layoutCSS } : {})
                        }}
                      />
                    ) : (
                      "Your layout preview will appear here"
                    )}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-md p-4 text-sm">
                  <h3 className="font-semibold mb-2">Available Tags:</h3>
                  {/* <ul className="list-disc list-inside space-y-1">
                    <li>{{"{{"}}title{{"}}"}}: Job title</li>
                    <li>{{"{{"}}company{{"}}"}}: Company name</li>
                    <li>{{"{{"}}email{{"}}"}}: Email address</li>
                    <li>{{"{{"}}phone{{"}}"}}: Phone number</li>
                    <li>{{"{{"}}website{{"}}"}}: Website URL</li>
                    <li>{{"{{"}}address{{"}}"}}: Physical address</li>
                    <li>{{"{{"}}avatar{{"}}"}}: Profile image</li>
                  </ul> */}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomLayout;
