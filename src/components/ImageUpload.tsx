
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, Image as ImageIcon, Link } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  initials: string;
}

const ImageUpload = ({ value, onChange, initials }: ImageUploadProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        onChange(event.target.result as string);
      }
      setIsLoading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (imageUrl.trim()) {
      onChange(imageUrl);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar className="h-24 w-24 cursor-pointer relative group">
        <AvatarImage src={value} alt="Avatar" />
        <AvatarFallback className="text-lg">{initials}</AvatarFallback>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
          <ImageIcon className="h-8 w-8 text-white" />
        </div>
      </Avatar>
      
      <Tabs defaultValue="upload" className="w-full max-w-xs">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="url">URL</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-4">
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => document.getElementById("avatar-upload")?.click()}
              disabled={isLoading}
              className="w-full"
            >
              <Upload className="h-4 w-4 mr-2" />
              {isLoading ? "Uploading..." : "Upload Image"}
            </Button>
            
            {value && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onChange("")}
              >
                Remove
              </Button>
            )}
          </div>
          
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </TabsContent>
        
        <TabsContent value="url">
          <form onSubmit={handleUrlSubmit} className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="image-url">Image URL</Label>
              <Input
                id="image-url"
                placeholder="https://example.com/avatar.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit" size="sm" variant="outline" className="w-full">
                <Link className="h-4 w-4 mr-2" />
                Use URL
              </Button>
              {value && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onChange("")}
                >
                  Remove
                </Button>
              )}
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ImageUpload;
