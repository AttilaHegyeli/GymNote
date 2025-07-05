import React from 'react';
import { View, Text, Pressable } from '../../atoms';
import { createStyleSheet } from '../../../utils/styles/StyleSheet';
import { colors } from '../../../utils/colors/colors';
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

export const TermsAndCondition = () => {
    const handlePress = () => {
        console.log('Terms and Conditions pressed');
    }
    const handlePrivacyPress = () => {
        console.log('Privacy Policy pressed');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text} >By clicking continue, you agree to our</Text>
            <Pressable onPress={() => handlePress()}>
                <Text style={styles.link}> Terms and Conditions</Text>
            </Pressable>
            <Text style={styles.text}> and </Text>
            <Pressable onPress={() => handlePrivacyPress()}>
                <Text style={styles.link}>Privacy Policy</Text>
            </Pressable>
        </View>
    );
};

const styles = createStyleSheet({
   container: {
    position: 'absolute',
    bottom: height * 0.03, 
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 12,
    color: colors.text,
    opacity: 0.5,
    textAlign: 'center',
  },
  link: {
    fontSize: 12,
    color: colors.link,
    textShadowColor: colors.link,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
    padding: 2,
    textAlign: 'center',
  },
});

