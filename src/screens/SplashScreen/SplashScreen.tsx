import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Splash} from '../../components';

export default function SplashScreen(props: any): JSX.Element {
  return (
    <View style={styles.container}>
      <Splash {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EBA562',
  },
});
