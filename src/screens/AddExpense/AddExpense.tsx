import React from 'react';
import {Text, StatusBar, SafeAreaView} from 'react-native';
export default class AddExpense extends React.Component {
  render(): React.ReactNode {
    console.log(this.props);

    return (
      <>
        <SafeAreaView />
        <StatusBar />
        <Text>AddExpense</Text>
      </>
    );
  }
}
