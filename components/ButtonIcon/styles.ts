import { theme } from "./../../src/global/styles/theme";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    border-right-width: 1px;
    border-color: ${theme.colors.line};
`;

export const Icon = styled.Image`
    width: 24px;
    height: 18px;
`;
export const Title = styled.Text`
    flex: 1;
    color: ${theme.colors.heading};
    font-size: 15px;
    text-align: center;
`;
