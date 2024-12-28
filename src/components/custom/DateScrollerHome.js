import {useState, React, useRef } from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import DateDayHome from './DateDayHome'

const daysOfWeek = ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA'];
const mounthOfWeek = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const DateScrollerHome = () => {

    const [showWeek, setShowWeek] = useState(0);
    const [variation, setVariation] = useState(0);
    const scrollViewRef = useRef(null);
    const weekWidth = 355; // Ancho fijo de cada "Week"

    const handleScrollBegin = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x; // Posición actual del scroll
        const index = Math.round(offsetX / weekWidth); // Índice del elemento más cercano
        if (offsetX <= index * weekWidth + 20){
            const newOffset = (index-1) * weekWidth + (index-1) *20 ; // Nueva posición al que se debe alinear
            scrollViewRef.current?.scrollTo({ x: newOffset, animated: true }); // Centrar en el elemento   
            setVariation(-1);
        }
        else if (offsetX >= index * weekWidth + 40){
            const newOffset = (index+1) * weekWidth + (index+1) *20 ; // Nueva posición al que se debe alinear
            scrollViewRef.current?.scrollTo({ x: newOffset, animated: true }); // Centrar en el elemento
            setVariation(1);
        }
        else {
            const newOffset = (index) * weekWidth + (index) *20 ; // Nueva posición al que se debe alinear
            scrollViewRef.current?.scrollTo({ x: newOffset, animated: true }); // Centrar en el elemento
            setVariation(0);
        }
    };
    
    const handleScrollEnd = () => {
        scrollViewRef.current?.scrollTo({ x: 2 * weekWidth + 40, animated: false });
        setShowWeek(showWeek + variation);
    };

    const Mounth = (props) => {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() + props.date*7);
        return (
            <Text style = {{fontSize: 18}}>{ mounthOfWeek[startDate.getMonth()]}</Text>
        )
    };
    const Week = (props) => {
        const days = [];
        const startDate = new Date();
        startDate.setDate(startDate.getDate() + props.date*7);
        for (let i = 0; i < 7; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            days.push({
                key: `${i}`,
                text: daysOfWeek[i],
                number: date.getDate().toString(),
            });
        };
        return (
            <View style = {styles.week}>
                <DateDayHome text = {days[0].text} number = {days[0].number}></DateDayHome>
                <DateDayHome text = {days[1].text} number = {days[1].number}></DateDayHome>
                <DateDayHome text = {days[2].text} number = {days[2].number}></DateDayHome>
                <DateDayHome text = {days[3].text} number = {days[3].number}></DateDayHome>
                <DateDayHome text = {days[4].text} number = {days[4].number}></DateDayHome>
                <DateDayHome text = {days[5].text} number = {days[5].number}></DateDayHome>
                <DateDayHome text = {days[6].text} number = {days[6].number}></DateDayHome>
            </View>
        );
    };

    return (
        <View style = {styles.scroll_container}>
            <View style = {styles.scroll_console}>
                <TouchableNativeFeedback onPress = {() => setShowWeek(0)}>
                    <View>
                        <FontAwesome6 name="calendar" size={20} color="black" style = {styles.scroll_button}/>
                    </View>
                </TouchableNativeFeedback>
                <Mounth date = {showWeek}></Mounth>
                <TouchableNativeFeedback onPress = {() => setShowWeek(0)}>
                    <View>
                        <FontAwesome6 name="calendar" size={20} color="black" style = {styles.scroll_button}/>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <ScrollView
                ref={scrollViewRef}
                horizontal = {true}
                alwaysBounceHorizontal = {true}
                contentContainerStyle = {styles.scroll}
                showsHorizontalScrollIndicator = {false}
                onMomentumScrollBegin={handleScrollBegin}
                onMomentumScrollEnd={handleScrollEnd}
                contentOffset={{x: 2 * weekWidth + 40, y: 0 }}
            >
                <Week date = {showWeek-2}></Week>
                <Week date = {showWeek-1}></Week>
                <Week date = {showWeek}></Week>
                <Week date = {showWeek+1}></Week>
                <Week date = {showWeek+2}></Week>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scroll: {
        paddingTop: 10,
        paddingBottom: 5,
        minHeight: 80,
        height: 60,
        gap: 20,
        paddingHorizontal: 10,
    },
    scroll_container: {
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        width: 375,
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    scroll_console: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    },
    scroll_button: {
        textAlign: 'start',
    }, 
    week: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        width: 355,
        justifyContent: 'center'
    }
});

export default DateScrollerHome;