import React from "react";
import { TextInput as InputRN } from "react-native";
import { ComponentProps } from "react";

interface CustomInputProps extends ComponentProps<typeof InputRN> { }

export const Input: React.FC<CustomInputProps> = ({ ...otherProps }) => {
  return (
    <InputRN
      {...otherProps}
    />
  );
};