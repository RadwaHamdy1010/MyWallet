import {JSX} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from '../../screens';
import DrawerNavigator from '../DrawerNavigator/DrawerNavigator';

const Stack = createStackNavigator();

export default function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}
