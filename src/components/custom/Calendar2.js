import {useState, React, useRef } from 'react';

import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const daysOfWeek = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
import ArrowLeft from '../../assets/svg/ArrowLeft.svg';
import ArrowRight from '../../assets/svg/ArrowRight.svg';

const montharray = {
    11: 'Diciembre',
    0: 'Enero',
    1: 'Febrero',
    2: 'Marzo',
    3: 'Abril',
    4: 'Mayo',
    5: 'Junio',
    6: 'Julio',
    7: 'Agosto',
    8: 'Septiembre',
    9: 'Octubre',
    10: 'Noviembre',
};
const Calendar2 = () => {
    const initialDate = new Date()
    const [currentDate, setCurrentDate] = useState(initialDate); // Estado para la fecha actual
    const [currentMonth, setCurrentMonth] = useState(montharray[initialDate.getMonth()]);
    const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());

    const [dateArray, setDateArray] = useState([
        initialDate.getDay(),
        initialDate.getMonth(),
        initialDate.getFullYear()].toString());

    const addDate = (day, month, year) => {
        if (year == null){
            return;
        }
        const dateToAdd = [day, month, year].toString();
        setDateArray(dateToAdd)
    };

    const DayCalendar = ( props ) => {

        return(
        <TouchableHighlight
            style={
                props.style == 1 ?
                    styles.dayCalendar1 : (
                    props.style == 2 ? styles.dayCalendar2 : styles.dayCalendar3
                    )
            }
            underlayColor = "#6E8EFF"
            onPress = {
                props.function == null ? 
                () => addDate(props.text, props.month, props.year):
                    (props.function == 1 ?
                        () => goToPreviousMonth():
                        () => goToNextMonth()
                    ) 
            }
            >
            <Text 
            style={
                props.style == 1 ?
                    styles.textCalendar1 : (
                        props.style == 2 ? styles.textCalendar2 : styles.textCalendar3
                        )
            }>
            {props.text}
            </Text>
        </TouchableHighlight>
        )
    };


  const goToPreviousMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(newDate);
    setCurrentMonth(montharray[newDate.getMonth()]);
    setCurrentYear(newDate.getFullYear());
  };

  const goToNextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(newDate);
    setCurrentMonth(montharray[newDate.getMonth()]);
    setCurrentYear(newDate.getFullYear());
  };

  const generateCalendarDays = () => {
    const days = [];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const firstWeekDay = (firstDayOfMonth.getDay() + 6) % 7; // Ajustar para empezar en lunes

    const totalDaysInMonth = lastDayOfMonth.getDate();

    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = firstWeekDay; i >= 0; i--) {
        days.push(
            <DayCalendar 
            key={`prev-${i}`} 
            text={prevMonthLastDay - i} 
            style={2}
            function = {1}
            />
        );
    }

    for (let i = 1; i <= totalDaysInMonth; i++) {
        if (dateArray === [i,month,year].toString()) {
            days.push(
                <DayCalendar 
                key={`current-${i}`} 
                text={i}
                month = {month}
                year = {year}
                style={3} />
            );
        }
        else {
            days.push(
                <DayCalendar 
                key={`current-${i}`} 
                text={i}
                month = {month}
                year = {year}
                style={1}
                
                />
            );
        }
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
        days.push(
            <DayCalendar 
            key = {`next-${i}`} 
            text = {i} 
            style = {2}
            function = {2}
            />
        );
    }

    return days;
    };
    return (
        <View style = {styles.calendar}>
            <View style = {styles.calendar_title}>
            <TouchableHighlight
                style = {styles.button1}
                onPress={goToPreviousMonth}
                underlayColor="transparent"
            >
                <ArrowLeft width = {16} height = {16}></ArrowLeft>
            </TouchableHighlight>
            <Text style = {{fontSize: 16}}>{currentMonth} {currentYear}</Text>
            <TouchableHighlight
                style = {styles.button2}
                onPress={goToNextMonth}
                underlayColor="transparent"
                >
                <ArrowRight width = {16} height = {16}></ArrowRight>
            </TouchableHighlight>
            </View>
            <DayCalendar text = {daysOfWeek[0]} style = {2}></DayCalendar>
            <DayCalendar text = {daysOfWeek[1]} style = {2}></DayCalendar>
            <DayCalendar text = {daysOfWeek[2]} style = {2}></DayCalendar>
            <DayCalendar text = {daysOfWeek[3]} style = {2}></DayCalendar>
            <DayCalendar text = {daysOfWeek[4]} style = {2}></DayCalendar>
            <DayCalendar text = {daysOfWeek[5]} style = {2}></DayCalendar>
            <DayCalendar text = {daysOfWeek[6]} style = {2}></DayCalendar>
            {generateCalendarDays()}
        </View>
    );
};

const styles = StyleSheet.create({
    calendar: {
        width: 342,
        padding: 20,
        gap: 2,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#cfcfcf',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: "#808080",
        shadowOpacity: 1.0,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        elevation: 4,
        marginBottom: 20
    },
    button1: {
        width: 40,
        height: 40,
        paddingLeft: 11,
        backgroundColor: 'rgb(249, 249, 249)',
        color: "#B3B3B3",
        borderRadius: 20,
        justifyContent: 'center',
        shadowColor: "#808080",
        shadowOpacity: 1.0,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        elevation: 4,
    },
    button2: {
        width: 40,
        height: 40,
        paddingLeft: 13,
        backgroundColor:'rgb(249, 249, 249)',
        color: "#B3B3B3",
        borderRadius: 20,
        justifyContent: 'center',
        shadowColor: "#808080",
        shadowOpacity: 1.0,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 20,
        elevation: 4,
    },
    calendar_title: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor:'#cfcfcf',
        paddingBottom: 20,
        borderBottomWidth: 2,
    },
    dayCalendar1: {
        width: 40,
        height: 40,
        alignItems: "center",
        backgroundColor: "#FDFDFD",
        borderRadius: 10,
        justifyContent: 'center'
    
    },
    dayCalendar2: {
        width: 40,
        height: 40,
        alignItems: "center",
        backgroundColor: "#FDFDFD",
        color: "#B3B3B3",
        borderRadius: 10,
        justifyContent: 'center'
    
    },
    dayCalendar3: {
        width: 40,
        height: 40,
        alignItems: "center",
        backgroundColor: "white",
        borderColor: '#2271FF',
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center'
    },

    textCalendar1: {
        fontSize: 16,
    },
    textCalendar2: {
        fontSize: 16,
        color: '#B3B3B3'
    },
    textCalendar3: {
        fontSize: 16,
        color: '#2271FF',
    },
    textCalendar4: {
        fontSize: 16,
        color: '#2271FF'
    }
});

export default Calendar2;