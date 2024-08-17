import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const UserType: React.FC = () => {
  const router = useRouter();

  const handleUserSelection = () => {
    console.log('User selected');
    router.push('/auth/SignUp');  // Navigate to SignUp screen
  };

  const handleExpertSelection = () => {
    console.log('Expert selected');
    router.push('/auth/SignUpExpert');  // Navigate to SignUpExpert screen
  };

  return (
    <ImageBackground source={require('./../../assets/images/Landing.jpg')} style={styles.backgroundImage}>
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'transparent']}
        style={styles.overlay}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Choose Your Role</Text>

          <View style={styles.bubblesContainer}>
            <TouchableOpacity style={styles.bubble} onPress={handleUserSelection} activeOpacity={0.9}>
              <Text style={styles.bubbleText}>User</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bubble} onPress={handleExpertSelection} activeOpacity={0.9}>
              <Text style={styles.bubbleText}>Expert</Text>
            </TouchableOpacity>
          </View>
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
    textAlign: 'center',
  },
  bubblesContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  bubble: {
    backgroundColor: 'white',
    width: 250,  // Adjust width to make the button oblong
    height: 60,  // Adjust height to make the button oblong
    borderRadius: 30,  // Keep borderRadius but adjust to make oblong
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,  // Space the buttons vertically
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  bubbleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default UserType;
