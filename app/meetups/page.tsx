import React from "react";
import Container from "@/app/components/Container";
import Headline from "@/app/components/Headline";
import Text from "@/app/components/Text";
import EventList from "@/app/components/EventList";
import { todayInMunich } from "@/app/data/events";

export default function Meetups() {
  return (
    <Container>
      <Headline label="02">Meetups</Headline>
      <Text className="mt-4">
        We are organizing events to bring together students, researchers and
        industry who share our passion for 3D computer vision - no registration
        needed.
      </Text>
      <EventList buildDate={todayInMunich()} />
    </Container>
  );
}
