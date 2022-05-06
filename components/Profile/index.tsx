import React from "react";

import { View } from "react-native";
import { Avatar } from "../Avatar";

import { Container, User, Greeting, UserName, Message } from "./styles";

export function Profile() {
  return (
    <Container>
      <Avatar urlImage="https://github.com/Mateus8741.png" />
      <View>
        <User>
          <Greeting>Olá,</Greeting>
          <UserName>Mateus Tavares</UserName>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </View>
    </Container>
  );
}
