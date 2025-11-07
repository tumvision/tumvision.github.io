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
        industry who share our passion for 3D computer vision - no registration needed.
      </Text>
      <Headline className="text-xl mt-4">Upcoming Events</Headline>
      <ReadingGroup
        speaker="Yueh-Cheng Liu"
        time="11.11.2025 18:00-19:00"
        title="QuickSplat: Fast 3D Surface Reconstruction via Learned Gaussian Initialization"
        paper="https://liu115.github.io/quicksplat"
        className="mt-2"
      />
      <Headline className="text-xl mt-4">Previous Events</Headline>
      <ReadingGroup
        speaker="David Rozenberski"
        time="17.07.2025 18:00-19:00"
        title="UnScene3D: Unsupervised 3D Instance Segmentation for Indoor Scenes"
        paper="https://rozdavid.github.io/unscene3d"
        className="mt-2"
      />
      <ReadingGroup
        speaker="Jiapeng Tang"
        time="10.07.2025 18:00-19:00"
        title="GAF: Gaussian Avatar Reconstruction from Monocular Videos via Multi-view Diffusion"
        paper="https://tangjiapeng.github.io/projects/GAF/"
        className="mt-2"
      />
      <ReadingGroup
        speaker="Ziya Erkoc"
        time="03.07.2025 18:00-19:00"
        title="PrEditor3D: Fast and Precise 3D Shape Editing"
        paper="https://ziyaerkoc.com/preditor3d/"
        className="mt-2"
      />
      <ReadingGroup
        speaker="Xinyi Zhang"
        time="26.06.2025 18:00-19:00"
        title="DNF: Unconditional 4D Generation with Dictionary-based Neural Fields"
        paper="https://xzhang-t.github.io/project/DNF/"
        className="mt-2"
      />
      <ReadingGroup
        speaker="Haoxuan Li"
        time="12.06.2025 18:00-19:00"
        title="MeshPad: Interactive Sketch-Conditioned Artist-Designed Mesh Generation and Editing"
        paper="https://derkleineli.github.io/meshpad/"
        className="mt-2"
      />
      <ReadingGroup
        speaker="Riccardo Marin"
        time="05.06.2025 18:00-19:00"
        title="On 3D Virtual Humans and Their Behavior"
        paper="https://ricma.netlify.app/talk/"
        className="mt-2"
      />
      <ReadingGroup
        speaker="Mateo de Mayo"
        time="22.05.2025 18:00-19:00"
        title="Visual-inertial tracking for Spatial Agents"
        paper="https://mateosss.github.io/"
        className="mt-2"
      />
      <ReadingGroup
        speaker="Artem Sevastopolsky"
        time="06.02.2025 18:00-19:00"
        title="One-Shot Head Reconstruction Model with Virtual Views"
        paper="https://seva100.github.io/"
        className="mt-2"
      />
      <ReadingGroup
        speaker="Simon Weber"
        time="30.01.2025 18:00-19:00"
        title="Power Variable Projection for Initialization-Free Large-Scale Bundle Adjustment"
        paper="https://lnkd.in/dn9gcHay"
        className="mt-2"
      />
      <ReadingGroup
        speaker="Daoyi Gao"
        time="12.12.2024 18:00-19:00"
        title="MeshArt: Generating Articulated Meshes with Structure-guided Transformers"
        paper="https://daoyig.github.io/"
        className="mt-2"
      />
      <ReadingGroup
        speaker="Shivangi Aneja"
        time="05.12.2024 18:00-19:00"
        title="GaussianSpeech: Audio-Driven Gaussian Avatars"
        paper="https://shivangi-aneja.github.io/projects/gaussianspeech"
        className="mt-2"
      />
      <ReadingGroup
        speaker="Yujin Chen"
        time="28.11.2024 18:00-19:00"
        title="Mesh2NeRF: Direct Mesh Supervision for Neural Radiance Field Representation and Generation"
        paper="https://terencecyj.github.io/projects/Mesh2NeRF/"
        className="mt-2"
      />
      <ReadingGroup
        speaker="Manuel Dahnert"
        time="21.11.2024 18:00-19:00"
        title="Coherent 3D Scene Diffusion From a Single RGB Image"
        paper="https://www.manuel-dahnert.com/research/scene-diffusion"
        className="mt-2"
      />
      <ReadingGroup
        speaker="Simon Giebenhain"
        time="31.10.2024 18:00-19:00"
        title="NPHM: Learning Neural Parametric Head Models"
        paper="https://simongiebenhain.github.io/NPHM/"
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
        speaker="Peter Kocsis"
        time="17.10.2024 18:00-19:00"
        title="Intrinsic Image Diffusion for Indoor Single-view Material Estimation"
        paper="https://peter-kocsis.github.io/IntrinsicImageDiffusion/"
        className="mt-2"
      />

    </Container>
  );
}
