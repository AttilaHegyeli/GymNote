import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { View as ViewRN } from "react-native";

interface ViewProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

export const View: React.FC<ViewProps> = ({ children, style }) => {
    return (
        <ViewRN
            style={style}>
            {children}
        </ViewRN>
    );
};