import React from "react";
import AuthInputemail from "../../molecules/AuthInput/Email/authinputemail";
import AuthInputpassword from "../../molecules/AuthInput/Password/authiInputpassword";
import CustomText from "../../atoms/Text/text";
import CustomButton from "../../atoms/Button/button";
import styles from "./authInput.styles";
import { View } from "react-native";


const AuthInput: React.FC = () => {
    return (
      <View style={styles.AuthInput}>
      <CustomText message="Welcome to GymNote!"  style={styles.CustomText}/>
      <AuthInputemail />
      <AuthInputpassword />
      <CustomButton 
        title="Accept" 
        onPress={() => console.log('Button Pressed!')}
      />
    </View>
    );
}

export default AuthInput;