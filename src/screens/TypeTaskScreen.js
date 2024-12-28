import React from 'react';
import { View, Text, StyleSheet, Image, TouchableNativeFeedback, ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import XCloseButton from '../components/custom/XCloseButton';

export default function TypeTaskScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <XCloseButton title = 'Tipo'></XCloseButton>
        <View style = {styles.scroll_container}>
          <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle = {styles.scroll}
          >
            <TouchableNativeFeedback>
              <View style = {styles.button}>
                <LinearGradient
                        colors = {['#80CCFF', '#1A9DFF']}
                        style = {styles.gradientBackground}
                        start = {{x: 0, y: 0}}
                        end = {{x: 1, y: 1}}
                />
                <Text style = {styles.text}>Evento único</Text>
                <Image source = {require('../assets/imgs/TypeImg1.png')}
                style = {styles.image}></Image>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style = {styles.button}>
                <LinearGradient
                        colors = {['#7EEC63', '#21A600']}
                        style = {styles.gradientBackground}
                        start = {{x: 0, y: 0}}
                        end = {{x: 1, y: 1}}
                />
                <Text style = {styles.text}>Rutina personalizable</Text>
                <Image source = {require('../assets/imgs/TypeImg1.png')}
                style = {styles.image}></Image>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style = {styles.button}>
                <LinearGradient
                        colors = {['#658BAD', '#43617E']}
                        style = {styles.gradientBackground}
                        start = {{x: 0, y: 0}}
                        end = {{x: 1, y: 1}}
                        locations = {[0, 0.73]}
                />
                <Text style = {styles.text}>Rutina de ejercicio</Text>
                <Image source = {require('../assets/imgs/TypeImg2.png')}
                style = {styles.image}></Image>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style = {styles.button}>
                <LinearGradient
                  colors = {['#CFD6DC', '#FFFFFF', '#CFD6DC']}
                  style = {styles.gradientBackground}
                  start = {{x: 0, y: 0}}
                  end = {{x: 0.3, y: 1.9}}
                  locations = {[0, 0.72, 1]}
                />
                <Text style = {styles.text1}>Hogar</Text>
                <Image source = {require('../assets/imgs/TypeImg3.png')}
                style = {styles.image}></Image>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style = {styles.button}>
                <LinearGradient
                  colors = {['#F4BA5E', '#F39C11']}
                  style = {styles.gradientBackground}
                  start = {{x: 0, y: 0}}
                  end = {{x: 1, y: 1}}
                />
                <Text style = {styles.text}>Meditación</Text>
                <Image source = {require('../assets/imgs/TypeImg4.png')}
                style = {styles.image}></Image>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style = {styles.button}>
                <LinearGradient
                  colors = {['#FDFDFD', '#FAF5F1']}
                  style = {styles.gradientBackground}
                  start = {{x: 0, y: 0.5}}
                  end = {{x: 1, y: 0.5}}
                  locations = {[0, 0.73]}
                />
                <Text style = {styles.text2}>Alimentación</Text>
                <Image source = {require('../assets/imgs/TypeImg5.png')}
                style = {styles.image}></Image>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style = {styles.button}>
                <LinearGradient
                  colors = {['#FF7C32', '#FF1F00']}
                  style = {styles.gradientBackground}
                  start = {{x: 0, y: 0.5}}
                  end = {{x: 1, y: 0.5}}
                />
                <Text style = {styles.text}>Pareja</Text>
                <Image source = {require('../assets/imgs/TypeImg6.png')}
                style = {styles.image}></Image>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style = {styles.button}>
                <LinearGradient
                  colors = {['#334D90', '#00FFFF']}
                  style = {styles.gradientBackground}
                  start = {{x: 0, y: 0}}
                  end = {{x: 1, y: 1}}
                />
                <Text style = {styles.text}>Productividad</Text>
                <Image source = {require('../assets/imgs/TypeImg7.png')}
                style = {styles.image}></Image>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style = {styles.button}>
                <LinearGradient
                  colors = {['#68ADF8', '#673DB5', '#19197D', '#C2004E']}
                  style = {styles.gradientBackground}
                  start = {{x: 0, y: 0}}
                  end = {{x: 0.5, y: 1.6}}
                  locations={[0, 0.33, 0.67, 1]}
                />
                <Text style = {styles.text}>Evento social</Text>
                <Image source = {require('../assets/imgs/TypeImg8.png')}
                style = {styles.image}></Image>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style = {styles.button}>
                <LinearGradient
                        colors = {['#166086', '#031E3B']}
                        style = {styles.gradientBackground}
                        start = {{x: 0, y: 0}}
                        end = {{x: 1, y: 1}}
                />
                <Text style = {styles.text}>Salud y descanso</Text>
                <Image source = {require('../assets/imgs/TypeImg9.png')}
                style = {styles.image}></Image>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style = {styles.button}>
                <LinearGradient
                        colors = {['#57CB82', '#C2FF74']}
                        style = {styles.gradientBackground}
                        start = {{x: 0, y: 0}}
                        end = {{x: 0.5, y: 1.9}}
                />
                <Text style = {styles.text3}>Finanzas (ej. pagos)</Text>
                <Image source = {require('../assets/imgs/TypeImg10.png')}
                style = {styles.image}></Image>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style = {styles.button}>
                <LinearGradient
                        colors = {['#FDC81E', '#FDF486']}
                        style = {styles.gradientBackground}
                        start = {{x: 0, y: 0}}
                        end = {{x: 1, y: 1}}
                        locations={[0,0.57]}
                />
                <Text style = {styles.text}>Viajes</Text>
                <Image source = {require('../assets/imgs/TypeImg11.png')}
                style = {styles.image}></Image>
              </View>
            </TouchableNativeFeedback>
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
    paddingLeft: 22,
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
  }

});