import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Pressable as PressableRN } from "react-native";


interface PressableProps extends React.ComponentProps<typeof PressableRN> {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

export const Pressable: React.FC<PressableProps> = ({ style, children, ...otherProps }) => {
    return (
        <PressableRN
            {...otherProps}
            style={style}>
            {children}
        </PressableRN>
    );
};
