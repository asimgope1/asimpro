import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const WelcomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to my App!</Text>
      <Button title="contact" onPress={()=>navigation.navigate('Contact')}></Button>
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333'
  }
});

export default WelcomePage;
