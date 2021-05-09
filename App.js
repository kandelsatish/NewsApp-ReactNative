import 'react-native-gesture-handler';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LandingScreen from './src/screens/LandingScreen';
import NewsDetails from './src/screens/NewsDetails';
const Stack=createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingScreen"
         component={LandingScreen}
         options={{headerTitle:'News'}}
         />
         <Stack.Screen name="NewsDetails"
         component={NewsDetails}
         options={{headerTitle:'News'}}
         />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


