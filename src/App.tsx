import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RateUsControlModal, RateUsTestModal} from './modals';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/*<RateUsControlModal visible={true} onClose={() => {}} />*/}
      <RateUsTestModal visible={true} onClose={() => {}} />
      <Text>App tsx</Text>
    </SafeAreaView>
  );
};

export default App;
