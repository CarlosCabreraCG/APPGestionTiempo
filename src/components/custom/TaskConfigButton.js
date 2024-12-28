// CustomCheckBox.js
import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";

const TaskConfigButton = ( props ) => {
  const navigation = useNavigation();

  return (
    <TouchableNativeFeedback onPress={() => props.function()}>
      <View style = {styles.container}>
        <LinearGradient
              colors = {['#F4F5F7', '#FFFDFE', '#E7E7E7', '#BDB9B9']}
              style = {styles.gradientBackground}
              start = {{x: 0, y: 3}}
              end = {{x: 1, y: -3}}
              locations={[0.31,0.52, 0.76, 0.85]}
       />
        <View style = {styles.inner_container}>
          <View style = {styles.icon}>
            <View style = {styles.shadow}></View>
          </View>
          <View>
            <Text style={styles.title}>{props.text}</Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: 342,
    height: 70,
    borderRadius: 12,

    elevation: 5,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowColor: 'black',
    overflow: 'hidden',
    position: 'relative'
  },
  inner_container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: 10,
  },

  gradientBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  icon: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: 'rgba(180, 180, 180, 1)',
    borderColor: 'rgba(180, 180, 180, 1)',
    borderWidth: 0.5,
    marginRight:15,
    overflow: 'hidden'
  },
  shadow: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: 'white',
    top: 2,
    left: 2,
    positon: 'relative'
  },

  title: {
    fontSize: 14,
  },

});

export default TaskConfigButton;