import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

import {RateUsControlModal, RateUsTestModal} from './modals';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <RateUsControlModal visible={true} onClose={() => {}} />
      {/*<RateUsTestModal visible={true} onClose={() => {}} />*/}
      <Text>App tsx</Text>
    </SafeAreaView>
  );
};

export default App;
