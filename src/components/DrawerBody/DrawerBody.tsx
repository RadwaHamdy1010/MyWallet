import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  DrawerActions,
  DrawerNavigationState,
  ParamListBase,
} from '@react-navigation/native';

import {Text} from 'react-native';
import {
  DrawerNavigationHelpers,
  DrawerDescriptorMap,
} from '@react-navigation/drawer/lib/typescript/src/types';

interface DrawerBodyProps {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
}
export default class DrawerBody extends React.Component<DrawerBodyProps> {
  render(): React.ReactNode {
    console.log('homeScreen', this.props.descriptors);

    return (
      <DrawerContentScrollView {...this.props}>
        <Text>weeewe</Text>
        <DrawerItemList {...this.props} />
        <DrawerItem
          label="Close drawer"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.closeDrawer())
          }
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />
      </DrawerContentScrollView>
    );
  }
}
