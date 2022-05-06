import React from "react";

import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../src/global/styles/theme";

import { Container, Image } from "./styles";

interface Props {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {
  return (
    <Container>
      <LinearGradient
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
      >
        <Image source={{ uri: urlImage }} />
      </LinearGradient>
    </Container>
  );
}
