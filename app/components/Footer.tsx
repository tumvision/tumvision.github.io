import React from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

const SOCIALS = [
  { label: "GitHub", icon: <FiGithub />, href: "https://github.com/tumvision" },
  { label: "LinkedIn", icon: <FiLinkedin />, href: "https://www.linkedin.com/company/tumvision" },
  { label: "X", icon: <BsTwitterX />, href: "https://x.com/TUMVision" },
];

const Footer = () => {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-6 text-sm font-normal text-muted md:flex-row md:justify-between">
        <a
          href="mailto:contact@tumvision.club"
          className="flex items-center gap-2 font-mono text-xs hover:text-logo_main"
        >
          <FiMail /> contact@tumvision.club
        </a>
        <div className="flex items-center gap-5 text-lg">
          {SOCIALS.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="transition hover:-translate-y-0.5 hover:text-logo_main"
            >
              {icon}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <Link href="/imprint" className="hover:text-logo_main">
            <span className="text-logo_main">&gt;</span> Imprint
          </Link>
          <Link href="/privacy" className="hover:text-logo_main">
            <span className="text-logo_main">&gt;</span> Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
