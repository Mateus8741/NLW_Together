import React from "react";

import { Container, IconWrapper, Icon, Title } from "./styles";

import { TouchableOpacityProps } from "react-native";

import DiscordImg from "../../src/assets/discord.png";

interface Props extends TouchableOpacityProps {
  title?: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <Container>
      <IconWrapper>
        <Icon source={DiscordImg} />
      </IconWrapper>
      <Title>{title}</Title>
    </Container>
  );
}
