
import React, * as react from "react";
import Navigation from "./src/navigaion/Navigation";
export default App=()=>{return <Navigation/>}






// import {NavigationContainer} from '@react-navigation/native';
// import React, {useState} from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Login from './src/screens/Login';
// import Welcome from './Welcome';
// import ContactPage from './pages/Contact';
// import SignupPage from './pages/Signup';
// import AboutUsPage from './pages/AboutUs';
// import Inputpage from './pages/Assets/images/Inputpage';
// import Outputpage from './pages/Outputpage';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       {/* <Login/> */}
//       <Stack.Navigator
//         screenOptions={{headerShown: false}}
//         initialRouteName="Login">
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Welcome" component={Welcome} />
//         <Stack.Screen name="Contact" component={ContactPage} />
//         <Stack.Screen name="Signup" component={SignupPage} />
//         <Stack.Screen name="AboutUs" component={AboutUsPage} />
//         <Stack.Screen name="Inputpage" component={Inputpage} />

//         <Stack.Screen name="Output" component={Outputpage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default App;