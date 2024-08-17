import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign in logic here, e.g., authentication with server
    console.log('User attempting to sign in with the following details:');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <ImageBackground source={require('./../../assets/images/Landing.jpg')} style={styles.backgroundImage}>
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'transparent']}
        style={styles.overlay}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Sign In</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          
          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 30,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  signInButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  signInButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 14,
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});

export default SignIn;
