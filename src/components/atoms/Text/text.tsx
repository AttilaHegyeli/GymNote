import React from "react";
import { Text } from "react-native";
import styles from "./text.styles";


interface CustomTextProps {
  message: string;
 style?: object;
}

const CustomText: React.FC<CustomTextProps> = (props) => {
  const textStyles = [styles.text];
  return (
    <Text style={textStyles}>
      {props.message}
    </Text>
  );
}
export default CustomText;