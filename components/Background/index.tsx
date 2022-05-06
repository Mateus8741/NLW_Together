import React, { ReactNode } from "react";

import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../src/global/styles/theme";

interface Props {
  children: ReactNode;
}

export function Background({ children }: Props) {
  return (
    <LinearGradient
      colors={[theme.colors.secondary80, theme.colors.secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
