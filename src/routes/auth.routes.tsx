import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SigIn";

const { Navigator, Screen }: any = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "transparent",
        },
        headerShown: false,
      }}
    >
      <Screen name="Signin" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
