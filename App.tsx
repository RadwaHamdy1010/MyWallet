import 'react-native-gesture-handler';
import React, {JSX} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StackNavigator} from './src/navigation';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default App;
