import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableNativeFeedback, ScrollView, TouchableHighlight } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Calendar from '../components/custom/Calendar';
import Calendar2 from '../components/custom/Calendar2';

import XCloseButton from '../components/custom/XCloseButton';

export default function DateTaskScreen({ navigation }) {
  const [value, setValue] = useState(0);
  const [week, setWeek] = useState([]);
  const [cantDias, setCantDias] = useState(1);

  const addDay = (day) => {
    if (week.includes(day)){
        setWeek(oldValues => {
            return oldValues.filter(item => item !== day)
          }
        );
    }
    else {
        setWeek(oldArray => [...oldArray, day]);
    };
  };

  const DayWeek = ( props ) => {
    return (
    <TouchableHighlight
      style={
        week.includes(props.text) ?
            styles.dayWeek1 : styles.dayWeek2
      }
      underlayColor = "#658BAD"
      onPress = {() => addDay(props.text)}
      >
      <View>
        {week.includes(props.text) ?
            <LinearGradient
              colors = {['#43617E', '#658BAD', '#53779A']}
              style = {styles.gradientBackground2}
              start = {{x: 0, y: 0}}
              end = {{x: 1, y: 1}}
              locations = {[0.17, 0.75, 0.94]}
            /> 
            :
            <View></View>
        }
        <Text 
            style={
              week.includes(props.text) ?
              styles.textDayWeek1 : styles.textDayWeek2
            }>
            {props.text}
        </Text>
      </View>
    </TouchableHighlight>
    )
  
  };

  return (
    <View style={styles.container}>
        <XCloseButton title = 'Tipo'></XCloseButton>
        <View style = {styles.scroll_container}>
          <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle = {styles.scroll}
          >
            <TouchableNativeFeedback onPress={() => setValue(0)}>
              <View style = {styles.button}>
                <LinearGradient
                  colors = {['#F4BA5E', '#F39C11']}
                  style = {styles.gradientBackground}
                  start = {{x: 0, y: 0}}
                  end = {{x: 1, y: 1}}
                />
                <Image 
                  source = {value == 0 ? require('../assets/imgs/radioButton.png') :
                    require('../assets/imgs/radioButtonUncheck.png') 
                  }
                  resizeMode = {'stretch'}
                  style = {{
                    width: 19,
                    height: 19,
                    marginTop: 26,
                    marginLeft: 14,
                    tintColor:'rgba(30, 30, 30, 0.7)'
                  }}></Image>
                <Text style = {styles.text}>Fechas determinadas</Text>
                <Image source = {require('../assets/imgs/DateImg1.png')}
                style = {styles.image}></Image>
              </View>
            </TouchableNativeFeedback>
            {value == 0 ? 
            <Calendar></Calendar>:
            <View></View>}
            <TouchableNativeFeedback onPress={() => setValue(1)}>
              <View style = {styles.button}>
                <LinearGradient
                  colors = {['#658BAD', '#43617E']}
                  style = {styles.gradientBackground}
                  start = {{x: 0, y: 0}}
                  end = {{x: 1, y: 1}}
                  locations = {[0, 0.73]}
                />
                <Image 
                  source = {value == 1 ? require('../assets/imgs/radioButton.png') :
                    require('../assets/imgs/radioButtonUncheck.png') 
                  }
                  resizeMode = {'stretch'}
                  style = {{
                    width: 19,
                    height: 19,
                    marginTop: 26,
                    marginLeft: 14,
                    tintColor:'rgba(30, 30, 30, 0.7)'
                  }}></Image>
                <Text style = {styles.text}>Rutina semanal</Text>
                <Image source = {require('../assets/imgs/DateImg2.png')}
                style = {styles.image}></Image>
              </View>
            </TouchableNativeFeedback>
            {value == 1 ?
            <View style = {styles.week}>
              <DayWeek text = {"Do"}></DayWeek>
              <DayWeek text = {"Lu"}></DayWeek>
              <DayWeek text = {"Ma"}></DayWeek>
              <DayWeek text = {"Mi"}></DayWeek>
              <DayWeek text = {"Ju"}></DayWeek>
              <DayWeek text = {"Vi"}></DayWeek>
              <DayWeek text = {"Sa"}></DayWeek>
            </View>: <View></View>}
            
            <TouchableNativeFeedback onPress={() => setValue(2)}>
              <View style = {styles.button}>
                <LinearGradient
                  colors = {['#7EEC63', '#21A600']}
                  style = {styles.gradientBackground}
                  start = {{x: 0, y: 0}}
                  end = {{x: 1, y: 1}}
                  locations = {[0, 0.73]}
                />
                <Image 
                  source = {value == 2 ? require('../assets/imgs/radioButton.png') :
                    require('../assets/imgs/radioButtonUncheck.png') 
                  }
                  resizeMode = {'stretch'}
                  style = {{
                    width: 19,
                    height: 19,
                    marginTop: 26,
                    marginLeft: 14,
                    tintColor:'rgba(30, 30, 30, 0.7)'
                  }}></Image>
                <Text style = {styles.text}>Rutina personalizable</Text>
                <Image source = {require('../assets/imgs/DateImg3.png')}
                style = {styles.image}></Image>
              </View>
            </TouchableNativeFeedback>
            
            {value == 2 ?
              <View>
                <Text style = {styles.label}>Fecha de inicio:</Text>
                <Calendar2></Calendar2>
                <Text style = {styles.label}>Fecha de fin:</Text>
                <Calendar2></Calendar2>
                <Text style = {styles.label}>Ciclo:</Text>
                <View style = {{
                    flexDirection: 'row'
                  }}>
                    <Text style = {styles.label1}>Cada</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder="1"
                        value={cantDias}
                        onChangeText={setCantDias}
                    />
                </View>
              </View>:
              <View></View>
            }
         </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ECECEC',
  },
  button: {
    marginBottom: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 342,
    height: 70,
    borderRadius: 12,
    elevation: 5,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowColor: 'black',
    overflow: 'hidden'
  },
  text: {
    fontSize:15,
    textAlignVertical: 'center',
    paddingLeft: 12,
    color: 'white'
  },
  text1: {
    fontSize:15,
    textAlignVertical: 'center',
    paddingLeft: 22,
    color: '#1E5880'
  }, 
  text2: {
    fontSize:15,
    textAlignVertical: 'center',
    paddingLeft: 22,
    color: '#1BDD22'
  },
  text3: {
    fontSize:15,
    textAlignVertical: 'center',
    paddingLeft: 22,
    color: '#095F2B'
  }, 
  image: {
    marginLeft: 'auto',
    marginRight: 0
  },
  gradientBackground: {
    flex: 1,
    width: '150%',
    height: '100%',
    position: 'absolute',
  },
  scroll_container: {
    marginTop: 30,
    height: '85%',
    borderRadius: 12,
    overflow: 'hidden'
  },
  scroll: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  week: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
  },
  dayWeek1: {
    width: 40,
    height: 40,
    borderRadius: 20,

    elevation: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowColor: 'black',
    overflow: 'hidden'
  },
  dayWeek2: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',

    elevation: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowColor: 'black'
  },
  textDayWeek1:{
    textAlign: 'center',
    marginTop: 9,
    color: 'white',
  },
  textDayWeek2: {
    textAlign: 'center',
    marginTop: 9,
  },
  gradientBackground2: {
    position: 'absolute',
    width: 40,
    height: 40
  },
  label: {
    marginLeft: 2,
    fontSize: 18,
    marginBottom: 20
  },
  label1: {
    marginLeft: 2,
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    height: 25,
    fontSize: 18,
    marginLeft: 10,
    borderBottomWidth: 1,
    marginBottom: 25,
    textAlign: 'center'
  },   
});