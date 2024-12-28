import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator'; // Navegador para términos, permisos y autenticación
import SplashScreen from '../screens/SplashScreen';
import MainTabNavigator from './MainTabNavigator';
import ConfigTaskScreen from '../screens/ConfigTaskScreen';
import TypeTaskScreen from '../screens/TypeTaskScreen';
import DateTaskScreen from '../screens/DateTaskScreen';
import TimeTaskScreen from '../screens/TimeTaskScreen';
const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="ConfigTask" component={ConfigTaskScreen} />
        <Stack.Screen name="TypeTask" component={TypeTaskScreen} />
        <Stack.Screen name="DateTask" component={DateTaskScreen} />
        <Stack.Screen name="TimeTask" component={TimeTaskScreen} />
        {/*/>
        <Stack.Screen name="AlarmTask" component={ConfigTaskScreen} />
        <Stack.Screen name="BlockTask" component={ConfigTaskScreen} />*/}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
