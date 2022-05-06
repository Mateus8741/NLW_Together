import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { Container, Image, Content, Title, SubTitle } from "./styles";

import { ButtonIcon } from "../../../components/ButtonIcon";

import IllustrationImg from "../../assets/illustration.png";

export function SignIn() {
  const navigation = useNavigation<any>();

  return (
    <Container>
      <Image source={IllustrationImg} resizeMode="stretch" />
      <Content>
        <Title>
          Conecte-se {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Title>

        <SubTitle>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </SubTitle>
        <ButtonIcon
          onPress={() => navigation.navigate("Home")}
          title="Entrar com Discord"
          activeOpacity={0.7}
        />
      </Content>
    </Container>
  );
}
