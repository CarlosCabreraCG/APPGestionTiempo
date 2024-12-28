// CustomCheckBox.js
import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


const SwitchButton = () => {
  return (
    <TouchableHighlight style = {styles.switchButton}>
        <View style = {styles.slider}></View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
    switchButton: {
        width: 62,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#BFBFBF'
    },
    slider: {
      width: 26,
      height: 26,
      borderRadius: 13,
      backgroundColor: 'white'
    }
});

export default SwitchButton;