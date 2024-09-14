import React from "react";
import Container from "@/app/components/Container";
import Headline from "@/app/components/Headline";
import Text from "@/app/components/Text";

export default function Contact() {
  return (
    <Container>
      <Headline>Sponsor</Headline>
      <Text className="mt-2">
        If you are a company and you would like to sponsor us, we can surely
        work out a sponsorship agreement that is beneficial for both parties.
        Please contact us at{" "}
        <a className="text-logo_main" href="mailto:contact@tumvision.club">
          contact@tumvision.club
        </a>{" "}
        for more information.
      </Text>
    </Container>
  );
}
