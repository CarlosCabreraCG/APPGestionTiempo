import React, {useState} from 'react';
import { View, Text, StyleSheet, Switch, TouchableNativeFeedback } from 'react-native';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import XCloseButton from '../components/custom/XCloseButton';
import SwitchButton from '../components/custom/SwitchButton';

export default function TimeTaskScreen({ navigation }) {
  const [descrip, setDescrip] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>     
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
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

  container_upper: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },
  input: {
    padding: 10,
    fontSize: 18,
    borderBottomColor: 'black',
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
