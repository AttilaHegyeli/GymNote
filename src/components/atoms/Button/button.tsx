import React from "react";
import { Button as ButtonRN } from "react-native";
import { ComponentProps } from "react";

interface CustomButtonProps extends ComponentProps<typeof ButtonRN> {}

export const Button: React.FC<CustomButtonProps> = ({ ...otherProps }) => {
  return (
    <ButtonRN
      {...otherProps}
    />
  );
};