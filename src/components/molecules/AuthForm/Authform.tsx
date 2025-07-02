// src/components/molecules/AuthForm/index.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from '../../../atoms/Input';
import { Button } from '../../../atoms/Button';
import { styles } from './AuthForm.styles';


interface AuthFormProps {
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  onSubmit: () => void;
  isLogin: boolean;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  isLogin,
}) => {
  return (
    <View style={styles.container}>
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          title={isLogin ? 'Sign In' : 'Sign Up'}
          onPress={onSubmit}
          color="#3498db"
        />
      </View>
    </View>
  );
};