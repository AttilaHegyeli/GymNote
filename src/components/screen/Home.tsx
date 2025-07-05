import React from 'react';
import { createStyleSheet } from '../../utils/styles/StyleSheet';
import { Text, View, Pressable } from '../atoms';
import { TermsAndCondition } from '../molecules';
import { colors } from '../../utils/colors/colors';

export const Home: React.FC = () => {
    const login = () => {
        console.log('Log in Pressed');
    };

    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Text style={styles.text}>Welcome to GymNote!</Text>
            </View>

            <View style={styles.bottomContent}>
                <Pressable onPress={login}>
                    <Text style={styles.link}>Login</Text>
                </Pressable>

                <TermsAndCondition />
            </View>
        </View>
    );
};


const styles = createStyleSheet({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.background,

    },
    topContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },
    bottomContent: {
        alignItems: 'center',
        marginBottom: 20,
    },

    text: {
        color: colors.text,
        fontSize: 30,
        fontFamily: 'times new roman',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    link: {
        color: colors.link,
        fontSize: 22,
        fontFamily: 'times new roman',
        padding: 10,
        bottom: 120,
    },
});


