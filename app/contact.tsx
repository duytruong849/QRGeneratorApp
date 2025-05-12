import React from "react";
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Contact = () =>{
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>This is Contact Page!</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Contact;