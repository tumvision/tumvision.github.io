import React from "react";
import Container from "@/app/components/Container";
import Headline from "@/app/components/Headline";
import Text from "@/app/components/Text";

export default function Imprint() {
  return (
    <Container>
      <Headline className="mb-2">Imprint</Headline>
      <Text className="mb-1">Robin Borth Zenettistraße 28 80337 München</Text>
      <Text className="mb-1">Telefon: +49 (0)152/25611147</Text>
      <Text className="mb-1">E-mail: robin@tumvision.club</Text>
      <Text className="mb-1">Vertretungsbefugt: Robin Borth</Text>
      <Text className="mb-1">
        Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV: Robin Borth
        Zenettistraße 28 80337 München
      </Text>
      <Text className="mb-1">
        Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle sind wir nicht verpflichtet und
        grundsätzlich nicht bereit.
      </Text>
    </Container>
  );
}
