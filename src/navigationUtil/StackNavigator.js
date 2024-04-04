import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Home } from "../components/Home";

export function StackNavigator(props) {
  const [screenStack, setScreenStack] = useState([
    props.screens[props.firstScreenName],
  ]);

  const navigateTo = (screen) => {
    setScreenStack((sc) => [...sc, props.screens[screen]]);
  };

  const goBack = () => {
    setScreenStack((sc) => sc.slice(0, sc.length - 1));
  };

  const screen = screenStack[screenStack.length - 1];
  console.log(props);

  return screen({ navigateTo, goBack });
}
