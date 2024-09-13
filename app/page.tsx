import InfoStack, { InfoStackItem } from "@/components/InfoStack";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

export default function Home() {
  return (
    <div className="bg-logo_bg">
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1 className="text-7xl font-bold">
          <span className="text-logo_txt">TUM</span>
          <span className="text-logo_main">Vision</span>
        </h1>
        <h2 className="text-3xl text-logo_txt">3D Computer Vision Club</h2>
      </main>
      <InfoStack position="left">
        <InfoStackItem type="icon" content={<FiGithub />} />
        <InfoStackItem type="icon" content={<FiLinkedin />} />
        <InfoStackItem type="icon" content={<BsTwitterX />} />
      </InfoStack>
      <InfoStack position="right">
        <InfoStackItem type="text" content="contact@tumvision.club" />
      </InfoStack>
    </div>
  );
}
