import {JSX} from 'react';
import {DrawerActions} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';

import {Image, TouchableOpacity} from 'react-native';
import {HomeScreen, AddExpense} from '../../screens';
import {DrawerBody} from '../../components';
import images from '../../Assets';

const Drawer = createDrawerNavigator();

type DrawerProps = {
  navigation: DrawerNavigationHelpers;
};

export default function DrawerNavigator({
  navigation,
}: DrawerProps): JSX.Element {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={props => <DrawerBody {...props} />}
      screenOptions={{
        drawerType: 'slide',
        headerLeft: () => renderLeftIcon(navigation),
      }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="AddExpense" component={AddExpense} />
    </Drawer.Navigator>
  );
}

function renderLeftIcon({dispatch}: DrawerNavigationHelpers) {
  return (
    <TouchableOpacity onPress={() => dispatch(DrawerActions.openDrawer())}>
      <Image
        source={images.drawerIcon}
        style={{width: 25, height: 25, marginLeft: 10}}
      />
    </TouchableOpacity>
  );
}
