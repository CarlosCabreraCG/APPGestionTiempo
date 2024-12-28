import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const DateDayHome = (props) => {
  return (
    <TouchableNativeFeedback
            onPress = {() => alert('prueba1')}
        >
        <View style = {styles.box_title}>
            <Text style = {{
                textAlign: 'center',
                height: '21',
                fontSize: 12,
                marginTop: 8,
                marginBottom: 'auto'
                }}>{props.text}</Text>
            <View style = {{
                backgroundColor: '#DBDBDB',
                borderRadius: 12,
                width: 28,
                paddingBottom: 2,
                marginBottom: 10,
                marginTop: 'auto'
            }}>
                <Text style = {{
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontSize: 12,
                    }}>{props.number}
                </Text>
            </View>
        </View>

    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
    box_title: {
        width: 40,
        height: 63,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 5
    },

});

export default DateDayHome;