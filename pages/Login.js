import React, { useState } from 'react'

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Button } from 'react-native';

export default function Login({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Perform login functionality here, such as sending a request to your server
        // to check for the user's credentials
        if(username=='' || password=='')
        {
          Alert.alert('False', 'My Alert Msg', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }
        else
         navigation.navigate('Welcome')
      }
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Button style={styles.buttonContainer} title="Sign up" onPress={()=>navigation.navigate("Signup")}>
        
      </Button>
      <Button style={styles.buttonContainer} title="About Us" onPress={()=>navigation.navigate("AboutUs")}>
        
      </Button>

      <Button style={styles.buttonContainer} title="Input" onPress={()=>navigation.navigate("Inputpage",{name:username})}>
        
      </Button>
      
    </View></ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    label: {
      fontWeight: 'bold',
      marginBottom: 10,
      color:"green"
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 20,
      width: '100%',
      color:"black"
    },
    buttonContainer: {
      backgroundColor: '#4287f5',
      padding: 15,
      width: '100%',
      marginTop:20,
      paddingTop:20   
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold'
    }
  });
