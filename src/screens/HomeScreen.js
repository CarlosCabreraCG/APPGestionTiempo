import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableNativeFeedback, Modal } from 'react-native';
import TaskHomeButton from '../components/custom/TaskHomeButton';
import HeaderHome from '../components/custom/HeaderHome';
import DateScrollerHome from '../components/custom/DateScrollerHome';
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font';


export default function HomeScreen() {
  const [loaded, error] = useFonts({
    'NicoMoji-Regular': require('../assets/fonts/NicoMoji-Regular.ttf'),
    'Nunito-VariableFont_wght': require('../assets/fonts/Nunito-VariableFont_wght.ttf'),
  });
  const addTask = () => {

  };
  const AddTaskButton = () => {
    return (
      <TouchableNativeFeedback onPress = {() => addTask()}>
        <View style = {styles.AddTaskButton}>
          <LinearGradient
                  colors = {['#3FD1FF', '#00C2FF', '#76DEFF']}
                  style = {styles.gradientBackground}
                  start = {{x: 1, y: 1}}
                  end = {{x: 0, y: 0}}
                  locations={[0.1,0.14, 0.66]}
          />
          <Text style = {{
            textAlign: 'center',
            fontFamily: 'Nunito-VariableFont_wght',
            fontSize: 70,
            lineHeight: 76,
            color: 'white',

            }}>+</Text>
        </View>
      </TouchableNativeFeedback>)
  };
  return (
    <View style = {{backgroundColor: '#F9F6ED'}}>
      <HeaderHome></HeaderHome>
      <DateScrollerHome></DateScrollerHome>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle = {styles.scroll}
        >
        <TaskHomeButton></TaskHomeButton>
        <TaskHomeButton></TaskHomeButton>
        <TaskHomeButton></TaskHomeButton>
        <TaskHomeButton></TaskHomeButton>
        <AddTaskButton></AddTaskButton>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingTop:15,
    alignItems: 'center',
    minHeight: '100%',
  },
  box_title: {
    flexDirection: 'row',
    marginTop: 0,
    height: 100,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#94EAF3',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    elevation: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowColor: 'black',
  },
  button_title: {
    color: 'black',
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  AddTaskButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'hidden'
  },
  gradientBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
