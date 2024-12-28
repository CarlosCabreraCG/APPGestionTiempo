import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Xvector from '../../assets/icons/Xvector.svg';

const XCloseButton = ( props ) => {
  const [loaded, error] = useFonts({
    'NicoMoji-Regular': require('../../assets/fonts/NicoMoji-Regular.ttf'),
  });
  const navigation = useNavigation();
    // onPress = {() => navigation.navigate('ConfigTask')}
  return (
    <View style = {styles.container}>
        <Text style = {styles.title}>
            {props.title}
        </Text>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Home')}>
            <View style = {styles.closeButton}>
                <Xvector width = {19} height = {19} fill = 'blue'></Xvector>
            </View>
        </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    width: 19,
    position: 'absolute',
    right: 10,
    top: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 10,
    marginTop: 30,
    width: '100%'
  }
});

export default XCloseButton;