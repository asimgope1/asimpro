import React, { useState } from "react";
import { Button, Modal, TouchableOpacity, View } from "react-native";
import { HEIGHT, mod, MyStatusBar, WIDTH } from "../constants/config";
export default Login = ({ navigation }) => {

    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'red', }}>
                <MyStatusBar backgroundColor={'cyan'} barStyle={'dark-content'} />
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Button
                        title="Press Hereeee"
                        color="green"
                        onPress={() => {
                            mod=true;
                            console.log("hello")
                            navigation.navigate("Home");
                        }} />
                </View>
            </View>
        </>
    )
}