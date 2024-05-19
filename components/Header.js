import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => (
  <View>
    <Text style={styles.title}>React Native ToDo</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "green"
  }
});

export default Header;
