import React from "react";
import AuthInput from "../../organisms/AuthInputs/authInput";
import styles from "./Authform.styles";
import { View } from "react-native";

const AuthForm: React.FC = () => {
    return (
        <View style={styles.AuthForm}>
            
        <AuthInput />

        </View>
    );
}

export default AuthForm;