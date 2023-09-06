import React from 'react';
import {Text, StatusBar, SafeAreaView} from 'react-native';
export default class HomeScreen extends React.Component {
  render(): React.ReactNode {
   // console.log('homeScreen', this.props.navigation);

    return (
      <>
        <SafeAreaView />
        <StatusBar />
        <Text>Homeee</Text>
      </>
    );
  }
}
