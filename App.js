import React from 'react';
import Navigation from './src/navigation/Navigation';
import {StatusBar, View} from 'react-native';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#2c2a2a" barStyle="light-content" />
      <Navigation />
    </View>
  );
};

export default App;
