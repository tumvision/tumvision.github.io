import React from "react";
// import { MemberImage, TeamImage } from "@/app/components/Member";
import Container from "@/app/components/Container";
import Text from "@/app/components/Text";
import Headline from "@/app/components/Headline";

export default function About() {
  return (
    <Container>
      <Headline>About</Headline>
      <Text className="mt-2">
        Hey everyone, we are a group of computer science students at the
        Technical University of Munich (TUM) enthusiastic about the realm of 3D
        Computer Vision. Our initiative has been established with the purpose of
        fostering a collaborative community among like-minded students,
        researchers, and industry professionals who are interested in the latest
        developments in the field of 3D computer vision and are passionate about
        advancing the state of the art through research. Through our efforts, we
        aim to enhance the 3D computer vision ecosystem in Munich.
      </Text>
      <Headline className="mt-5">Activities</Headline>
      <Text className="mt-2">
        We organize various events such as meetups, reading groups and social
        events. Our meetups are a platform for students, researchers, and
        industry professionals to present their work, discuss the latest trends
        in the field, and network with others. Our reading groups are a great
        opportunity to dive deep into a specific topic and learn from each
        other. Social events are a great way to get to know each other and have
        fun together.
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
