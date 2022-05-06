import React from "react";

import { Container, User, Greeting, UserName, Message } from "./styles";

export function Profile() {
  return (
    <Container>
      <Profile />
      <User>
        <Greeting>Olá</Greeting>
        <UserName>Mateus Tavares</UserName>
      </User>
      <Message>Hoje é dia de vitória</Message>
    </Container>
  );
}
