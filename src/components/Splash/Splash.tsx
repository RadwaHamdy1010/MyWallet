import React, {useRef, useEffect} from 'react';
import Lottie from 'lottie-react-native';
import {Dimensions, StyleSheet, Animated} from 'react-native';

interface SplashProps {
  navigation: any;
}
export default function Splash({navigation}: SplashProps): JSX.Element {
  const logoPosition = useRef(new Animated.Value(0)).current;

  const logoSize = useRef(
    new Animated.Value(Dimensions.get('screen').width / 2),
  ).current;

  const titlePosition = useRef(new Animated.Value(0)).current;
  const titleSize = useRef(new Animated.Value(24)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        logoAndTitleFall(),
        logoAndTitleShrink(),
        titleBounce(),
      ]).start(() => {
        navigation.replace('DrawerNavigator');
      });
    }, 300);
  }, []);

  function logoAndTitleFall() {
    return Animated.parallel([
      Animated.timing(logoPosition, {
        toValue: 300,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(titlePosition, {
        toValue: -200,
        useNativeDriver: false,
        duration: 500,
      }),
    ]);
  }

  function logoAndTitleShrink() {
    return Animated.parallel([
      Animated.timing(logoSize, {
        useNativeDriver: false,
        duration: 500,
        toValue: Dimensions.get('screen').width / 3,
      }),
      Animated.timing(titleSize, {
        toValue: 18,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(titlePosition, {
        toValue: -230,
        useNativeDriver: false,
        duration: 500,
      }),
    ]);
  }
  function titleBounce() {
    return Animated.sequence([
      Animated.timing(titlePosition, {
        toValue: -200,
        useNativeDriver: false,
        duration: 500,
      }),
      Animated.timing(titlePosition, {
        toValue: -250,
        useNativeDriver: false,
        duration: 500,
      }),
    ]);
  }
  return (
    <>
      <Animated.View
        style={[
          styles.lottieContainer,
          {
            transform: [{translateY: logoPosition}],
            width: logoSize,
          },
        ]}>
        <Lottie
          source={require('../../Assets/lottie-files/flying-wallet-money.json')}
          autoPlay
          loop
        />
      </Animated.View>
      <Animated.Text
        style={[
          styles.textStyle,
          {
            transform: [{translateY: titlePosition}],
            fontSize: titleSize,
          },
        ]}>
        My Wallet
      </Animated.Text>
    </>
  );
}

const styles = StyleSheet.create({
  lottieContainer: {
    height: Dimensions.get('screen').height / 4,
  },
  textStyle: {
    color: 'brown',
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    bottom: -500,
  },
});
