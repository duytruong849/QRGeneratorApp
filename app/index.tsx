import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

var name = "Trương Ngọc Duy"
export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ImageBackground
          source = {require('@/assets/background/bground.jpg')}
          style = {styles.img_bg}
          >
        <Text style = {{fontSize:100, color: '#ffffffff'}}>Hello!</Text>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  img_bg: {
    height:800,
    alignItems:'center',
    justifyContent:'center'
  }
})