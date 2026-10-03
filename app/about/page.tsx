import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { MemberImage, TeamImage } from "@/app/components/Member";
import Container from "@/app/components/Container";
import Text from "@/app/components/Text";
import Headline from "@/app/components/Headline";
import { FiMic, FiBookOpen, FiCoffee } from "react-icons/fi";

const ACTIVITIES = [
  {
    icon: <FiMic />,
    title: "Meetups",
    text: "Students, researchers and industry present their work, discuss the latest trends and network.",
  },
  {
    icon: <FiBookOpen />,
    title: "Reading Groups",
    text: "Dive deep into a specific paper or topic and learn from each other.",
  },
  {
    icon: <FiCoffee />,
    title: "Social Events",
    text: "Get to know each other and have fun together beyond the lecture hall.",
  },
];

const PHOTOS = [
  { src: "/about/kickoff-ss26.jpg", caption: "Kickoff SS26 with Prof. Nießner" },
  { src: "/about/professor-talk-ss26.jpg", caption: "Professor Talk SS26 with Prof. Dai" },
];

export default function About() {
  return (
    <Container>
      <Headline label="01">About</Headline>
      <Text className="mt-4 text-lg">
        We are a group of computer science students at the Technical University
        of Munich (TUM) with a shared passion for 3D computer vision.
      </Text>
      <Text className="mt-3 text-lg">
        Our initiative was established to foster a collaborative community of
        like-minded students, researchers, and industry professionals who are
        interested in the latest developments in 3D computer vision and
        passionate about advancing the field through research and collaboration.
      </Text>
      <Text className="mt-3 text-lg">
        We aim to create an open and welcoming space where people can share
        ideas, discover new research, learn from each other, and connect with
        others who share the same interests. Through our community, we hope to
        contribute to a vibrant and growing 3D computer vision ecosystem in
        Munich.
      </Text>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {PHOTOS.map(({ src, caption }) => (
          <figure key={src}>
            <Image
              src={src}
              alt={`Students at the ${caption}`}
              width={800}
              height={600}
              className="rounded-xl border border-line"
            />
            <figcaption className="mt-2 font-mono text-xs text-muted">
              {"// "}
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <Headline size="sm" className="mt-12">Activities</Headline>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {ACTIVITIES.map(({ icon, title, text }) => (
          <div
            key={title}
            className="rounded-xl border border-line bg-surface/60 p-5 transition hover:border-logo_main/40 hover:bg-surface"
          >
            <span className="text-2xl text-logo_main">{icon}</span>
            <h3 className="mt-3 text-lg text-logo_txt">{title}</h3>
            <p className="mt-1 text-sm font-normal leading-relaxed text-muted">{text}</p>
          </div>
        ))}
      </div>
      <Headline size="sm" className="mt-12">Community</Headline>
      <Text className="mt-4">
        We are an international research community at TUM, bringing together
        people from a wide variety of cultural and national backgrounds. We value
        diversity and inclusion, and we are committed to maintaining a respectful
        and welcoming environment for everyone.
      </Text>
      <Text className="mt-3">
        Discrimination or harassment of any kind, including remarks targeting
        someone&apos;s nationality, ethnicity, religion, gender, or background, has
        no place in our community. Let&apos;s continue building an open,
        supportive, and inclusive community together.
      </Text>
      <Text className="mt-6">
        Everyone is welcome - no registration needed, just drop by. Check out the{" "}
        <Link href="/meetups" className="text-logo_main hover:underline">
          upcoming meetups
        </Link>{" "}
        or reach us at{" "}
        <a href="mailto:contact@tumvision.club" className="text-logo_main hover:underline">
          contact@tumvision.club
        </a>
        .
      </Text>
      {/* <Headline className="mt-5">Team</Headline>
      <Text className="mt-2">
        The management team is responsible for the overall organization and
        coordination of the club&apos;s activities. We are currently 4 core
        management team members.
      </Text>
      <TeamImage src="/team/team.png" />
      <Headline className="mt-5">Members</Headline>
      <Text className="mt-2">Here&apos;s our current management members:</Text>
      <div className="grid grid-cols-2 gap-4 mb-10">
        <MemberImage name="Member 1" src="team/robin.png" />
        <MemberImage name="Member 2" src="team/robin.png" />
        <MemberImage name="Member 3" src="team/robin.png" />
        <MemberImage name="Member 4" src="team/robin.png" />
      </div> */}
    </Container>
  );
}
