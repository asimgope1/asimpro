import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Send the contact information to a server or an email
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <View>
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />

      <Text>Message</Text>
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Enter your message"
        multiline={true}
      />

      <Button onPress={handleSubmit} title="Submit" />
    </View>
  );
}

export default ContactPage;

