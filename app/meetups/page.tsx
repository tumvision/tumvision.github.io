import React from "react";
import Container from "@/app/components/Container";
import Headline from "@/app/components/Headline";
import Text from "@/app/components/Text";
import ReadingGroup from "@/app/components/ReadingGroup";

export default function Meetups() {
  return (
    <Container>
      <Headline>Meetups</Headline>
      <Text className="mt-2">
        We are organizing events to bring together students, researchers and
        industry who share our passion for 3D computer vision.
      </Text>
      <Headline className="text-xl mt-4">Upcoming Events</Headline>
      <ReadingGroup
        speaker="Peter Kocsis"
        time="17.10.2024 18:00-19:00"
        title="Intrinsic Image Diffusion for Indoor Single-view Material Estimation"
        paper="https://peter-kocsis.github.io/IntrinsicImageDiffusion/"
        className="mt-2"
      />
      <ReadingGroup
        speaker="Lukas Höllein"
        time="24.10.2024 18:00-19:00"
        title="Text2Room: Extracting Textured 3D Meshes from 2D Text-to-Image Models"
        paper="https://lukashoel.github.io/text-to-room/"
        className="mt-2"
      />
      <ReadingGroup
        speaker="Simon Giebenhain"
        time="31.10.2024 18:00-19:00"
        title="NPHM: Learning Neural Parametric Head Models"
        paper="https://simongiebenhain.github.io/NPHM/"
        className="mt-2"
      />
    </Container>
  );
}