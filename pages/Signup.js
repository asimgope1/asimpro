import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    // Perform validation and send the signup information to a server
    if (password === confirmPassword) {
        alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
    } else {
        alert("password and confirm password should match");
    }
  };

  return (
    <View>
      <Text>Username</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />

      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />

      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      <Text>Confirm Password</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm your password"
        secureTextEntry={true}
      />

      <Button onPress={handleSubmit} title="Signup" />
    </View>
  );
}

export default SignupPage;
