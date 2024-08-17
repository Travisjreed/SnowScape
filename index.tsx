import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const LandingScreen: React.FC = () => {
  const router = useRouter();


  const handleNavigateToUserType = () => {
    console.log('Navigating to UserType screen');
    router.push('/auth/UserType'); 

  const handleNavigateToSignUp = () => {
    console.log('Navigating to SignUp screen');
    router.push('/auth/SignUp');
  };

  const handleNavigateToSignIn = () => {
    console.log('Navigating to SignIn screen');
    router.push('/auth/SignIn');
  };

  return (
    <ImageBackground source={require('./../assets/images/Landing.jpg')} style={styles.backgroundImage}>
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'transparent']}
        style={styles.overlay}
      >
        <View style={styles.container}>
          <Image source={require('./../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.title}>SnowScape</Text>
          <Text style={styles.subtitle}>
            Provide or receive assistance in critical situations anytime, anywhere.
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Image source={require('./../assets/images/apple.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image source={require('./../assets/images/google.png')} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.getStartedButton} onPress={handleNavigateToUserType}>
            <TouchableOpacity style={styles.getStartedButton} onPress={handleNavigateToSignUp}>
              <Text style={styles.getStartedText}>Get Started</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.signInText}>
            Already have an account?{' '}
            <Text style={styles.signInLink} onPress={handleNavigateToSignIn}>
              Sign In
            </Text>
          </Text>
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
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  getStartedButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
  },
  getStartedText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    color: 'white',
    marginTop: 20,
  },
  signInLink: {
    color: 'white',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default LandingScreen;
