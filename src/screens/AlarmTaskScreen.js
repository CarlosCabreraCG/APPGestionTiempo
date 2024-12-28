import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableNativeFeedback } from 'react-native';

import TaskConfigButton from '../components/custom/TaskConfigButton';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import XCloseButton from '../components/custom/XCloseButton';

export default function ConfigTaskScreen({ navigation }) {
  const [descrip, setDescrip] = useState('');

  return (
    <View style={styles.container}>
        <XCloseButton></XCloseButton>
        <Text style={styles.title}>Configurar tarea</Text>
        <View style = {styles.container_upper}>
            <TouchableNativeFeedback>
            <Image
                source={require('../assets/icons/palette.png')} 
                resizeMode="contain"
                />
            </TouchableNativeFeedback>
            <View style = {styles.image}>
            </View>
            <FontAwesome6 name="camera" size={40} color="black"/>
        </View>
        <TextInput
            style={styles.input}
            placeholder="Descripción"
            value={descrip}
            onChangeText={setDescrip}
        />
        <TaskConfigButton text = 'Tipo: evento único'></TaskConfigButton>
        <TaskConfigButton text = 'Fecha(s): Hoy'></TaskConfigButton>
        <TaskConfigButton text = 'Hora: 11:02 pm'></TaskConfigButton>
        <TaskConfigButton text = 'Alarma: Sunrise call, 5 min'></TaskConfigButton>
        <TouchableNativeFeedback>
          <View style = {styles.button}>
            <Text style = {{fontSize: 20, color: 'white', textAlign: 'center'}}>Guardar</Text>
          </View>
        </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFEF9B',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 30
  },
  container_upper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },
  input: {
    padding: 10,
    fontSize: 18,
    borderBottmColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 25
  },   
  image: {
    width: 90,
    height: 90,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20
  },
  button: {
    padding: 22,
    borderRadius: 12,
    width: 342,
    backgroundColor: '#486785',
    color: 'white',
    marginTop: 10 
  }
});
