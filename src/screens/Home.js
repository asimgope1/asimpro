// import React from "react";
// import { Button, View, TouchableOpacity,TextInput,Text } from "react-native";
// export default Home=()=>{
    
//     return (
//         <View style={{flex:1,backgroundColor:'red',justifyContent:'center'}}>
//             <Button
//                 title="Press Here"
//                 onPress={()=>{
//                     console.log("Hello");
//                 }}
//             />
            
            
//         </View>
//     )
// }

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text,StyleSheet } from 'react-native';
import Navigation from '../navigaion/Navigation';

function OtpInputPage() {
  const [otp, setOtp] = useState('');

  const handleSubmit = () => {
    // Perform actions to verify the OTP
    // Navigation.navigate('Login')
  };

  return (
    <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
      <TextInput
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
        
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default OtpInputPage;
