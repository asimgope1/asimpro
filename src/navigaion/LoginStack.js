import * as React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from "../screens/Home";
import Login from "../screens/Login";
const Stack=createNativeStackNavigator();
export default LoginStack=()=>{
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login}/>
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
    </Stack.Navigator>
  )
}