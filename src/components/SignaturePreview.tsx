
import React from "react";
import SocialIcons from "./SocialIcons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface SignaturePreviewProps {
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
  };
}

const SignaturePreview = ({ signatureData }: SignaturePreviewProps) => {
  const { toast } = useToast();
  const signatureRef = React.useRef<HTMLDivElement>(null);

  const getInitials = (name: string) => {
    const names = name.split(" ");
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`;
    }
    return name.substring(0, 2).toUpperCase();
  };

  const copyToClipboard = () => {
    if (signatureRef.current) {
      const range = document.createRange();
      range.selectNode(signatureRef.current);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand("copy");
      window.getSelection()?.removeAllRanges();
      
      toast({
        title: "Copied to clipboard",
        description: "Your signature has been copied to the clipboard",
      });
    }
  };

  const getNameInitials = () => {
    return getInitials(signatureData.name);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Your Signature</h3>
        <Button onClick={copyToClipboard} variant="outline" size="sm">
          <Copy className="h-4 w-4 mr-2" />
          Copy to Clipboard
        </Button>
      </div>
      
      <div className="border p-6 rounded-md bg-white">
        <div ref={signatureRef} className="font-sans text-sm">
          <table cellPadding="0" cellSpacing="0" style={{ maxWidth: "500px" }}>
            <tbody>
              <tr>
                <td style={{ verticalAlign: "top", paddingRight: "15px" }}>
                  {signatureData.avatarUrl ? (
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={signatureData.avatarUrl} alt={signatureData.name} />
                      <AvatarFallback>{getNameInitials()}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <Avatar className="h-20 w-20">
                      <AvatarFallback>{getNameInitials()}</AvatarFallback>
                    </Avatar>
                  )}
                </td>
                <td style={{ verticalAlign: "top", borderLeft: "2px solid #e2e8f0", paddingLeft: "15px" }}>
                  <table cellPadding="0" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>
                          <div style={{ margin: "0 0 5px", fontWeight: "bold", fontSize: "16px", color: "#333" }}>
                            {signatureData.name}
                          </div>
                          <div style={{ margin: "0 0 5px", color: "#718096", fontSize: "14px" }}>
                            {signatureData.title} {signatureData.company && `| ${signatureData.company}`}
                          </div>

                          <div style={{ margin: "15px 0 10px" }}>
                            {signatureData.phone && (
                              <div style={{ margin: "0 0 4px", color: "#4A5568", fontSize: "13px" }}>
                                <strong>P:</strong> {signatureData.phone}
                              </div>
                            )}
                            {signatureData.email && (
                              <div style={{ margin: "0 0 4px", color: "#4A5568", fontSize: "13px" }}>
                                <strong>E:</strong>{" "}
                                <a
                                  href={`mailto:${signatureData.email}`}
                                  style={{ color: "#3182CE", textDecoration: "none" }}
                                >
                                  {signatureData.email}
                                </a>
                              </div>
                            )}
                            {signatureData.website && (
                              <div style={{ margin: "0 0 4px", color: "#4A5568", fontSize: "13px" }}>
                                <strong>W:</strong>{" "}
                                <a
                                  href={
                                    signatureData.website.startsWith("http")
                                      ? signatureData.website
                                      : `https://${signatureData.website}`
                                  }
                                  style={{ color: "#3182CE", textDecoration: "none" }}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {signatureData.website}
                                </a>
                              </div>
                            )}
                            {signatureData.address && (
                              <div style={{ margin: "0 0 4px", color: "#4A5568", fontSize: "13px" }}>
                                <strong>A:</strong> {signatureData.address}
                              </div>
                            )}
                          </div>

                          {signatureData.showSocial && (
                            <div style={{ marginTop: "10px" }}>
                              <SocialIcons
                                linkedin={signatureData.linkedin}
                                twitter={signatureData.twitter}
                                facebook={signatureData.facebook}
                                instagram={signatureData.instagram}
                              />
                            </div>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground text-center pt-4">
        <p>Tip: The signature is best pasted directly into your email client's signature settings.</p>
      </div>
    </div>
  );
};

export default SignaturePreview;
