import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';

import {AvoidSoftInput} from 'react-native-avoid-softinput';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import {RateUsModalRenderer} from './components';

const App = () => {
  const isAndroid = Platform.OS === 'android';

  React.useEffect(() => {
    AvoidSoftInput.setEnabled(true);
    if (isAndroid) {
      AvoidSoftInput.setShouldMimicIOSBehavior(true);
    }
  }, [isAndroid]);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
      <RateUsModalRenderer />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
