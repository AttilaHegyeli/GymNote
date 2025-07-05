import React from "react";
import { Text as TextRN } from "react-native";
import { StyleProp, TextStyle } from "react-native";

interface CustomTextProps extends React.ComponentProps<typeof TextRN> {
  style?: StyleProp<TextStyle>;
 }

export const Text: React.FC<CustomTextProps> = ({ style, ...otherProps }) => {

  return (
    <TextRN
      style={style}
      {...otherProps}>
      {otherProps.children}

      
    </TextRN>
    

  );
};
