import React from "react";
import Image from "next/image";
import twitterIcon from "@/public/assets/x.png";
import instagramIcon from "@/public/assets/ig.png";
import linkedinIcon from "@/public/assets/in.png";

interface SocialLinksProps {
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  twitter,
  instagram,
  linkedin,
}) => {
  return (
    <div className="flex space-x-4 mt-4">
      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <Image src={twitterIcon} alt="Twitter" className="w-6 h-6" />
        </a>
      )}
      {instagram && (
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <Image src={instagramIcon} alt="Instagram" className="w-6 h-6" />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <Image src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
