import {JSX} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomePage} from '../../screens';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(): JSX.Element {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomePage" component={HomePage} />
    </Drawer.Navigator>
  );
}
