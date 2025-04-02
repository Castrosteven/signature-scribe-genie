import React from "react";
import SocialIcons from "./SocialIcons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Copy, LayoutIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
    layout: "horizontal" | "vertical" | "compact" | "modern" | "minimal" | "classic";
  };
}

const SignaturePreview = ({ signatureData }: SignaturePreviewProps) => {
  const { toast } = useToast();
  const signatureRef = React.useRef<HTMLDivElement>(null);
  const [layout, setLayout] = React.useState<"horizontal" | "vertical" | "compact" | "modern" | "minimal" | "classic">(
    signatureData.layout
  );

  React.useEffect(() => {
    setLayout(signatureData.layout);
  }, [signatureData.layout]);

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

  const handleLayoutChange = (value: string) => {
    setLayout(value as "horizontal" | "vertical" | "compact" | "modern" | "minimal" | "classic");
  };

  const renderHorizontalSignature = () => (
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
  );

  const renderVerticalSignature = () => (
    <table cellPadding="0" cellSpacing="0" style={{ maxWidth: "300px" }}>
      <tbody>
        <tr>
          <td style={{ textAlign: "center", paddingBottom: "15px" }}>
            {signatureData.avatarUrl ? (
              <Avatar className="h-24 w-24 mx-auto">
                <AvatarImage src={signatureData.avatarUrl} alt={signatureData.name} />
                <AvatarFallback>{getNameInitials()}</AvatarFallback>
              </Avatar>
            ) : (
              <Avatar className="h-24 w-24 mx-auto">
                <AvatarFallback>{getNameInitials()}</AvatarFallback>
              </Avatar>
            )}
          </td>
        </tr>
        <tr>
          <td style={{ borderTop: "2px solid #e2e8f0", paddingTop: "15px", textAlign: "center" }}>
            <div style={{ margin: "0 0 5px", fontWeight: "bold", fontSize: "16px", color: "#333" }}>
              {signatureData.name}
            </div>
            <div style={{ margin: "0 0 15px", color: "#718096", fontSize: "14px" }}>
              {signatureData.title} {signatureData.company && `| ${signatureData.company}`}
            </div>

            <div style={{ margin: "0 0 15px", textAlign: "center" }}>
              {signatureData.phone && (
                <div style={{ margin: "0 0 4px", color: "#4A5568", fontSize: "13px" }}>
                  {signatureData.phone}
                </div>
              )}
              {signatureData.email && (
                <div style={{ margin: "0 0 4px", color: "#4A5568", fontSize: "13px" }}>
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
                  {signatureData.address}
                </div>
              )}
            </div>

            {signatureData.showSocial && (
              <div style={{ margin: "15px 0 0", display: "flex", justifyContent: "center" }}>
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
  );

  const renderCompactSignature = () => (
    <table cellPadding="0" cellSpacing="0" style={{ maxWidth: "400px" }}>
      <tbody>
        <tr>
          <td style={{ verticalAlign: "middle", paddingRight: "12px" }}>
            {signatureData.avatarUrl ? (
              <Avatar className="h-16 w-16">
                <AvatarImage src={signatureData.avatarUrl} alt={signatureData.name} />
                <AvatarFallback>{getNameInitials()}</AvatarFallback>
              </Avatar>
            ) : (
              <Avatar className="h-16 w-16">
                <AvatarFallback>{getNameInitials()}</AvatarFallback>
              </Avatar>
            )}
          </td>
          <td style={{ verticalAlign: "middle" }}>
            <div style={{ margin: "0 0 3px", fontWeight: "bold", fontSize: "15px", color: "#333" }}>
              {signatureData.name}
            </div>
            <div style={{ margin: "0 0 3px", color: "#718096", fontSize: "13px" }}>
              {signatureData.title} {signatureData.company && `| ${signatureData.company}`}
            </div>
            <div style={{ margin: "0 0 3px", color: "#4A5568", fontSize: "12px" }}>
              {signatureData.phone && <span style={{ marginRight: "8px" }}>{signatureData.phone}</span>}
              {signatureData.email && (
                <a
                  href={`mailto:${signatureData.email}`}
                  style={{ color: "#3182CE", textDecoration: "none", marginRight: "8px" }}
                >
                  {signatureData.email}
                </a>
              )}
              {signatureData.website && (
                <a
                  href={signatureData.website.startsWith("http") ? signatureData.website : `https://${signatureData.website}`}
                  style={{ color: "#3182CE", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {signatureData.website}
                </a>
              )}
            </div>
            {signatureData.showSocial && (
              <div style={{ marginTop: "5px" }}>
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
  );

  const renderModernSignature = () => (
    <table cellPadding="0" cellSpacing="0" style={{ maxWidth: "500px" }}>
      <tbody>
        <tr>
          <td style={{ textAlign: "center", paddingBottom: "12px" }}>
            <div style={{ margin: "0 0 5px", fontWeight: "bold", fontSize: "18px", color: "#333", letterSpacing: "0.5px" }}>
              {signatureData.name.toUpperCase()}
            </div>
            <div style={{ margin: "0 0 15px", color: "#718096", fontSize: "14px", fontStyle: "italic" }}>
              {signatureData.title} {signatureData.company && `| ${signatureData.company}`}
            </div>
          </td>
        </tr>
        <tr>
          <td style={{ borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", padding: "12px 0", textAlign: "center" }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    {signatureData.phone && (
                      <span style={{ margin: "0 8px", color: "#4A5568", fontSize: "13px" }}>
                        {signatureData.phone}
                      </span>
                    )}
                    {signatureData.email && (
                      <span style={{ margin: "0 8px", fontSize: "13px" }}>
                        <a
                          href={`mailto:${signatureData.email}`}
                          style={{ color: "#3182CE", textDecoration: "none" }}
                        >
                          {signatureData.email}
                        </a>
                      </span>
                    )}
                    {signatureData.website && (
                      <span style={{ margin: "0 8px", fontSize: "13px" }}>
                        <a
                          href={signatureData.website.startsWith("http") ? signatureData.website : `https://${signatureData.website}`}
                          style={{ color: "#3182CE", textDecoration: "none" }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {signatureData.website}
                        </a>
                      </span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{ paddingTop: "12px", textAlign: "center" }}>
            {signatureData.showSocial && (
              <div style={{ margin: "5px 0" }}>
                <SocialIcons
                  linkedin={signatureData.linkedin}
                  twitter={signatureData.twitter}
                  facebook={signatureData.facebook}
                  instagram={signatureData.instagram}
                />
              </div>
            )}
            {signatureData.address && (
              <div style={{ margin: "10px 0 0", color: "#718096", fontSize: "12px" }}>
                {signatureData.address}
              </div>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );

  const renderMinimalSignature = () => (
    <table cellPadding="0" cellSpacing="0" style={{ maxWidth: "400px" }}>
      <tbody>
        <tr>
          <td>
            <div style={{ margin: "0 0 5px", fontWeight: "bold", fontSize: "16px", color: "#333" }}>
              {signatureData.name}
            </div>
            <div style={{ margin: "0 0 10px", color: "#718096", fontSize: "14px" }}>
              {signatureData.title} {signatureData.company && `| ${signatureData.company}`}
            </div>
            <div style={{ margin: "0 0 5px" }}>
              {signatureData.email && (
                <a
                  href={`mailto:${signatureData.email}`}
                  style={{ color: "#3182CE", textDecoration: "none", fontSize: "13px", marginRight: "10px" }}
                >
                  {signatureData.email}
                </a>
              )}
              {signatureData.phone && (
                <span style={{ color: "#4A5568", fontSize: "13px" }}>
                  {signatureData.phone}
                </span>
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
  );

  const renderClassicSignature = () => (
    <table cellPadding="0" cellSpacing="0" style={{ maxWidth: "500px", borderTop: "2px solid #3182CE", borderBottom: "2px solid #3182CE" }}>
      <tbody>
        <tr>
          <td style={{ padding: "15px" }}>
            <table cellPadding="0" cellSpacing="0">
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
                  <td style={{ verticalAlign: "top" }}>
                    <div style={{ margin: "0 0 5px", fontWeight: "bold", fontSize: "16px", color: "#333" }}>
                      {signatureData.name}
                    </div>
                    <div style={{ margin: "0 0 12px", color: "#3182CE", fontSize: "14px", fontWeight: "500" }}>
                      {signatureData.title} {signatureData.company && `| ${signatureData.company}`}
                    </div>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        {signatureData.phone && (
                          <tr>
                            <td style={{ padding: "3px 0", color: "#4A5568", fontSize: "13px", width: "80px" }}>
                              <strong>Phone:</strong>
                            </td>
                            <td style={{ padding: "3px 0", color: "#4A5568", fontSize: "13px" }}>
                              {signatureData.phone}
                            </td>
                          </tr>
                        )}
                        {signatureData.email && (
                          <tr>
                            <td style={{ padding: "3px 0", color: "#4A5568", fontSize: "13px", width: "80px" }}>
                              <strong>Email:</strong>
                            </td>
                            <td style={{ padding: "3px 0", fontSize: "13px" }}>
                              <a
                                href={`mailto:${signatureData.email}`}
                                style={{ color: "#3182CE", textDecoration: "none" }}
                              >
                                {signatureData.email}
                              </a>
                            </td>
                          </tr>
                        )}
                        {signatureData.website && (
                          <tr>
                            <td style={{ padding: "3px 0", color: "#4A5568", fontSize: "13px", width: "80px" }}>
                              <strong>Website:</strong>
                            </td>
                            <td style={{ padding: "3px 0", fontSize: "13px" }}>
                              <a
                                href={signatureData.website.startsWith("http") ? signatureData.website : `https://${signatureData.website}`}
                                style={{ color: "#3182CE", textDecoration: "none" }}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {signatureData.website}
                              </a>
                            </td>
                          </tr>
                        )}
                        {signatureData.address && (
                          <tr>
                            <td style={{ padding: "3px 0", color: "#4A5568", fontSize: "13px", width: "80px" }}>
                              <strong>Address:</strong>
                            </td>
                            <td style={{ padding: "3px 0", color: "#4A5568", fontSize: "13px" }}>
                              {signatureData.address}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
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
  );

  const renderSignature = () => {
    switch (layout) {
      case "horizontal":
        return renderHorizontalSignature();
      case "vertical":
        return renderVerticalSignature();
      case "compact":
        return renderCompactSignature();
      case "modern":
        return renderModernSignature();
      case "minimal":
        return renderMinimalSignature();
      case "classic":
        return renderClassicSignature();
      default:
        return renderHorizontalSignature();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Select value={layout} onValueChange={handleLayoutChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Layout" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="horizontal">Horizontal</SelectItem>
              <SelectItem value="vertical">Vertical</SelectItem>
              <SelectItem value="compact">Compact</SelectItem>
              <SelectItem value="modern">Modern</SelectItem>
              <SelectItem value="minimal">Minimal</SelectItem>
              <SelectItem value="classic">Classic</SelectItem>
            </SelectContent>
          </Select>
          
        </div>
        <Button onClick={copyToClipboard} variant="outline" size="sm">
            <Copy className="h-4 w-4 mr-2" />
            Copy to Clipboard
          </Button>
      </div>
      
      <div className="border p-6 rounded-md bg-white flex items-center justify-center">
        <div ref={signatureRef} className="font-sans text-sm">
          {renderSignature()}
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground text-center pt-4">
        <p>Tip: The signature is best pasted directly into your email client's signature settings.</p>
      </div>
    </div>
  );
};

export default SignaturePreview;


