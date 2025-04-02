
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

interface SignatureFormProps {
  signatureData: {
    name: string;
    title: string;
    company: string;
    email: string;
    phone: string;
    website: string;
    address: string;
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
    showSocial: boolean;
    avatarUrl: string;
    layout: "horizontal" | "vertical" | "compact" | "modern" | "minimal" | "classic";
  };
  setSignatureData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      title: string;
      company: string;
      email: string;
      phone: string;
      website: string;
      address: string;
      linkedin: string;
      twitter: string;
      facebook: string;
      instagram: string;
      showSocial: boolean;
      avatarUrl: string;
      layout: "horizontal" | "vertical" | "compact" | "modern" | "minimal" | "classic";
    }>
  >;
}

const SignatureForm = ({ signatureData, setSignatureData }: SignatureFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignatureData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSocialToggle = (checked: boolean) => {
    setSignatureData((prev) => ({
      ...prev,
      showSocial: checked,
    }));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Personal Information</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={signatureData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Job Title</Label>
            <Input
              id="title"
              name="title"
              value={signatureData.title}
              onChange={handleChange}
              placeholder="Marketing Director"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              value={signatureData.company}
              onChange={handleChange}
              placeholder="Acme Corporation"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={signatureData.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={signatureData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              name="website"
              value={signatureData.website}
              onChange={handleChange}
              placeholder="www.example.com"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            value={signatureData.address}
            onChange={handleChange}
            placeholder="123 Business Ave, Suite 100, New York, NY 10001"
          />
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Social Media Links</h3>
          <div className="flex items-center space-x-2">
            <Switch
              id="show-social"
              checked={signatureData.showSocial}
              onCheckedChange={handleSocialToggle}
            />
            <Label htmlFor="show-social">Show social icons</Label>
          </div>
        </div>

        {signatureData.showSocial && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn URL</Label>
              <Input
                id="linkedin"
                name="linkedin"
                value={signatureData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/johndoe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="twitter">Twitter URL</Label>
              <Input
                id="twitter"
                name="twitter"
                value={signatureData.twitter}
                onChange={handleChange}
                placeholder="https://twitter.com/johndoe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="facebook">Facebook URL</Label>
              <Input
                id="facebook"
                name="facebook"
                value={signatureData.facebook}
                onChange={handleChange}
                placeholder="https://facebook.com/johndoe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instagram">Instagram URL</Label>
              <Input
                id="instagram"
                name="instagram"
                value={signatureData.instagram}
                onChange={handleChange}
                placeholder="https://instagram.com/johndoe"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignatureForm;
