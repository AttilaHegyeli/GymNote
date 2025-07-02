import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#000",
    fontFamily: "System",
    borderRadius: 5,
  },
  error: {
    borderColor: "red",
  },
  disabled: {
    backgroundColor: "#f0f0f0",
    color: "#a0a0a0",
  },
});

export default styles;