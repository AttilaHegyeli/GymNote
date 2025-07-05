import React from 'react';
import { createStyleSheet } from '../../utils/styles/StyleSheet';
import { Text, View } from '../atoms';
import { TermsAndCondition } from '../molecules';
import { colors } from '../../utils/colors/colors';



export const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Welcome to GymNote! </Text>
            <TermsAndCondition />

        </View>
    );
};


const styles = createStyleSheet({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    text: {
        color: colors.text,
        fontSize: 30,
        marginBottom: '25%',
        fontfamily: 'Garamond',
        fontWeight: 'bold',
    },
});



