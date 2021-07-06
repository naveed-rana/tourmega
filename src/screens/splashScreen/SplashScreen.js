import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import styles from './SplashScreenStyle';
export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/splashLogo.png')}
      />
    </View>
  );
}
