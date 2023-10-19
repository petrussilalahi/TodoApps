import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import Colors from '../../styles/Colors';

const AuthScreen = () => {
  const [biometryType, setBiometryType] = useState(null);

  useEffect(() => {
    FingerprintScanner.isSensorAvailable()
      .then(biometryType => {
        setBiometryType(biometryType);
      })
      .catch(error => console.log('isSensorAvailable error => ', error));
  }, []);

  const getMessage = () => {
    if (biometryType === 'Face ID') {
      return 'Scan your Face on the device to continue';
    } else {
      return 'Scan your Fingerprint on the device scanner to continue';
    }
  };

  const showAuthenticationDialog = () => {
    if (biometryType !== null && biometryType !== undefined) {
      FingerprintScanner.authenticate({
        description: getMessage(),
      })
        .then(() => {
          //you can write your logic here to what will happen on successful authentication
        })
        .catch(error => {
          console.log('Authentication error is => ', error);
        });
    } else {
      console.log('biometric authentication is not available');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => showAuthenticationDialog()}>
        <Text style={styles.buttonText}>Authenticate</Text>
      </TouchableOpacity>
      <Text
        style={styles.biometryText}>{`biometryType is  ${biometryType}`}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.defaultDarkColor,
  },
  buttonStyle: {
    width: '70%',
    backgroundColor: Colors.defaultGreenColor,
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontSize: 17, fontWeight: 'bold'},
  biometryText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 30,
  },
});

export default AuthScreen;