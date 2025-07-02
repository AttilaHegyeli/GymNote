import React from "react";
import CustomText from "../../../atoms/Text/text";
import CustomInput from "../../../atoms/Input/Input";
import styles from "./authinputemail.styles";

const AuthInputemail: React.FC = () => {
    return (
        <>
        <CustomText message="Add meg az email cimed: " />
        <CustomInput
            placeholder="Email"
            onChangeText={(text) => console.log(text)}
            style={styles}
        />
        </>
    );
 }

 export default AuthInputemail;