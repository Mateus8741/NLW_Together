import React, { useState } from "react";

import { Container, Image, Content, Title, SubTitle } from "./styles";

import IllustrationImg from "../../assets/illustration.png";

import { ButtonIcon } from "../../../components/ButtonIcon";

export function SignIn() {
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
          title="Entrar com Discord"
          activeOpacity={.7}
        />
      </Content>
    </Container>
  );
}
