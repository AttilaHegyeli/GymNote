import React from "react";
import { StyleSheet } from "react-native";
import AuthInput from "./authInput";
import CustomButton from "../../atoms/Button/button";
import CustomText from "../../atoms/Text/text";

const styles = StyleSheet.create({
  AuthInput: {
    width: "100%",
    height: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  CustomText: {
    fontSize: 16,  
    color: "#000",
    fontFamily: "System",
    alignItems : "center",
    justifyContent: "center",
  }

  
});

export default styles;
