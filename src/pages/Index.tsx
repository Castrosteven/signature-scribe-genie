
import React from "react";
import SignatureForm from "@/components/SignatureForm";
import SignaturePreview from "@/components/SignaturePreview";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  });

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

        <div className="mt-10">
          <Tabs defaultValue="edit" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto mb-6 grid-cols-2">
              <TabsTrigger value="edit">Edit</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="edit">
              <Card>
                <CardContent className="pt-6">
                  <SignatureForm 
                    signatureData={signatureData}
                    setSignatureData={setSignatureData}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="preview">
              <Card>
                <CardContent className="pt-6">
                  <SignaturePreview signatureData={signatureData} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;
