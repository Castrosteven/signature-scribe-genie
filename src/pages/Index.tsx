
import React from "react";
import SignatureForm from "@/components/SignatureForm";
import SignaturePreview from "@/components/SignaturePreview";
import ImageUpload from "@/components/ImageUpload";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [signatureData, setSignatureData] = React.useState({
    name: "John Doe",
    title: "Marketing Director",
    company: "Acme Corporation",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    website: "www.example.com",
    address: "123 Business Ave, Suite 100, New York, NY 10001",
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
    showSocial: true,
    avatarUrl: "",
    layout: "horizontal" as "horizontal" | "vertical",
  });

  const getInitials = (name: string) => {
    const names = name.split(" ");
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`;
    }
    return name.substring(0, 2).toUpperCase();
  };

  const handleAvatarChange = (avatarUrl: string) => {
    setSignatureData(prev => ({
      ...prev,
      avatarUrl
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Email Signature Generator
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-600 sm:text-xl">
            Create professional email signatures in seconds
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-semibold text-center">Design Your Signature</h2>
                
                <div className="flex justify-center mb-4">
                  <ImageUpload 
                    value={signatureData.avatarUrl} 
                    onChange={handleAvatarChange}
                    initials={getInitials(signatureData.name)}
                  />
                </div>
                
                <Separator />
                
                <SignatureForm 
                  signatureData={signatureData}
                  setSignatureData={setSignatureData}
                />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-semibold text-center">Preview</h2>
                <SignaturePreview signatureData={signatureData} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
