
import React from "react";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

interface SocialIconsProps {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

const SocialIcons = ({ linkedin, twitter, facebook, instagram }: SocialIconsProps) => {
  const iconSize = 16;
  const iconColor = "#4A5568";
  
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: iconColor }}
        >
          <Linkedin size={iconSize} />
        </a>
      )}
      {twitter && (
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: iconColor }}
        >
          <Twitter size={iconSize} />
        </a>
      )}
      {facebook && (
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: iconColor }}
        >
          <Facebook size={iconSize} />
        </a>
      )}
      {instagram && (
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: iconColor }}
        >
          <Instagram size={iconSize} />
        </a>
      )}
    </div>
  );
};

export default SocialIcons;
