import React from "react";
import CustomInput from "../../../atoms/Input/Input";
import CustomText from "../../../atoms/Text/text";
import styles from "./authInputpassword.styles";

const AuthInputpassword: React.FC = () => {
    return (
        <>
            <CustomText message="Add meg a jelszavad: " />
            <CustomInput
                placeholder="Jelszó"
                onChangeText={(text) => console.log(text)}
                style={styles}
            />
        </>
    );
}

export default AuthInputpassword;
