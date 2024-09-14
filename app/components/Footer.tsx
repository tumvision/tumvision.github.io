import React from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import InfoStack, { InfoStackItem } from "@/app/components/InfoStack";

type FooterProps = {
  mode: "fixed" | "dynamic";
};

const Footer = ({ mode }: FooterProps) => {
  return (
    <React.Fragment>
      <div
        className={`${mode} bottom-0 flex justify-center items-center w-full p-2 text-sm gap-6 text-logo_txt`}
      >
        <Link href="/imprint" className="cursor-pointer">
          <span className="text-lg fong-bold text-logo_main">&gt; </span>{" "}
          <span className="hover:text-logo_main">Imprint</span>
        </Link>
        <Link href="/privacy" className="cursor-pointer">
          <span className="text-lg fong-bold text-logo_main">&gt; </span>{" "}
          <span className="hover:text-logo_main">Privacy Policy</span>
        </Link>
      </div>

      <InfoStack position="left">
        <InfoStackItem
          type="icon"
          content={<FiGithub />}
          link="https://github.com/tumvision"
        />
        <InfoStackItem
          type="icon"
          content={<FiLinkedin />}
          link="https://www.linkedin.com/company/tumvision"
        />
        <InfoStackItem
          type="icon"
          content={<BsTwitterX />}
          link="https://x.com/TUMVision"
        />
      </InfoStack>
      <InfoStack position="right">
        <InfoStackItem
          type="text"
          content="contact@tumvision.club"
          link="mailto:contact@tumvision.club"
        />
      </InfoStack>
    </React.Fragment>
  );
};

export default Footer;
