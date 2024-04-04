import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export function Home(props) {
  const onNavigatePress = () => {
    props.navigateTo("Product");
  };

  // const onBackPress = () => {
  //   props.goBack();
  // };
  return (
    <View style={styles.app}>
      <Pressable onPress={onNavigatePress} style={buttonStyles.button}>
        <Text style={buttonStyles.text}>Navigate to Product</Text>
      </Pressable>
      {/* <Pressable onPress={onBackPress} style={buttonStyles.button}>
        <Text style={buttonStyles.text}>Go Back</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
  },
  logo: {
    height: 80,
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  link: {
    color: "#1B95E0",
  },
  code: {
    fontFamily: "monospace, monospace",
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 2,
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
