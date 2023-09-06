import React from 'react';
import {Text, StatusBar, SafeAreaView} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export default class DrawerBody extends React.Component {
  render(): React.ReactNode {
    console.log('homeScreen', this.props.navigation);

    return (
      <>
        <SafeAreaView />
        <StatusBar />
        <DrawerItemList navigation={this.props.navigation} />
      </>
    );
  }
}
