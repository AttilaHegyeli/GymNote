import React from "react";
import { Button,View } from "react-native";
import styles from "./button.style";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <View style={styles.button}>
      <Button
        title={title}
        onPress={onPress}
      />
    </View>
  );
};

export default CustomButton;