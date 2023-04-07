import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '@views/splashscreen';
import Home from '@views/home';
import Vegetables from '@views/vegetables';
import Games from '@views/games';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash' screenOptions={{headerShown: false}}>
        <Stack.Screen name='splash' component={Splash}/>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='veggie' component={Vegetables}/>
        <Stack.Screen name='games' component={Games}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}