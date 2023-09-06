import {JSX} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen, AddExpense} from '../../screens';
import {DrawerBody} from '../../components';
import {Text, View, Button, Image, ScrollView} from 'react-native';
import images from '../../Assets';

const Drawer = createDrawerNavigator();

const renderLeftIcon = () => (
  <Image
    source={images.drawerIcon}
    style={{width: 25, height: 25, marginLeft: 10}}
  />
);

export default function DrawerNavigator(props): JSX.Element {
  console.log(props.descriptors);
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      // screenOptions={{
      //   drawerType: 'slide',
      //   //   headerLeft: renderLeftIcon,
      // }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
       // options={{headerLeft: renderLeftIcon}}
      />
      <Drawer.Screen name="AddExpense" component={AddExpense} />
    </Drawer.Navigator>
  );
}
