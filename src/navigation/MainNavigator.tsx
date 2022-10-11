import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ContactUs, Home} from '../screens';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
    </Stack.Navigator>
  );
};

export default MainStack;
