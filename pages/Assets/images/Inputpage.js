import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';

export default function Inputpage({navigation}) {
  const [entry, setentry] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={text => setentry(text)}
        value={entry}></TextInput>

      <Button
        style={styles.buttonContainer}
        title="Input"
        onPress={() => navigation.navigate('Output', {name: entry})}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: '#4287f5',
    padding: 15,
    width: '100%',
    marginTop: 20,
    paddingTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
