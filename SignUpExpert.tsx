import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SignUpExpert: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [vehicleDetails, setVehicleDetails] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [servicesOffered, setServicesOffered] = useState('');
  const [insurancePolicyNumber, setInsurancePolicyNumber] = useState('');

  const handleSignUp = () => {
    if (!insurancePolicyNumber) {
      alert('Insurance Policy Number is mandatory.');
      return;
    }
    // Handle sign up logic here, e.g., sending data to a server
    console.log('Expert signed up with the following details:');
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`);
    console.log(`Address: ${address}, Vehicle Details: ${vehicleDetails}`);
    console.log(`Service Description: ${serviceDescription}`);
    console.log(`Services Offered: ${servicesOffered}`);
    console.log(`Insurance Policy Number: ${insurancePolicyNumber}`);
  };

  return (
    <ImageBackground source={require('./../../assets/images/Landing.jpg')} style={styles.backgroundImage}>
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'transparent']}
        style={styles.overlay}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Expert Sign Up</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#aaa"
            value={name}
            onChangeText={setName}
          />
          
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
            placeholder="Phone Number"
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Address"
            placeholderTextColor="#aaa"
            value={address}
            onChangeText={setAddress}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Vehicle Details (e.g., Plow Truck Model)"
            placeholderTextColor="#aaa"
            value={vehicleDetails}
            onChangeText={setVehicleDetails}
          />
          
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Describe the service you need"
            placeholderTextColor="#aaa"
            value={serviceDescription}
            onChangeText={setServiceDescription}
            multiline={true}
          />

          <TextInput
            style={styles.input}
            placeholder="Services Offered"
            placeholderTextColor="#aaa"
            value={servicesOffered}
            onChangeText={setServicesOffered}
          />

          <TextInput
            style={styles.input}
            placeholder="Insurance Policy Number"
            placeholderTextColor="#aaa"
            value={insurancePolicyNumber}
            onChangeText={setInsurancePolicyNumber}
            keyboardType="default"
          />

          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Create Expert Account</Text>
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
  textArea: {
    height: 100,
  },
  signUpButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  signUpButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SignUpExpert;
