
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
  const iconClass = "text-gray-600 hover:text-gray-900 transition-colors";
  
  return (
    <div className="flex gap-3">
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
        >
          <Linkedin size={iconSize} />
        </a>
      )}
      {twitter && (
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
        >
          <Twitter size={iconSize} />
        </a>
      )}
      {facebook && (
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
        >
          <Facebook size={iconSize} />
        </a>
      )}
      {instagram && (
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
        >
          <Instagram size={iconSize} />
        </a>
      )}
    </div>
  );
};

export default SocialIcons;
