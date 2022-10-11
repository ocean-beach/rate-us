import {Linking} from 'react-native';

import rateUsEventBus from '../services/rateUsEventBus';

export const closeRateUsModal = () => {
  rateUsEventBus.trigger('rateUsModal:close');
};

export const openRateUsModal = (onPressRateUsDone = () => {}) => {
  // If you wish to close modal with onPressRateUsDone
  // const onPressRateUs = () => {
  //   closeRateUsModal();
  //   onPressRateUsDone();
  // };
  rateUsEventBus.trigger('rateUsModal:open', {
    visible: true,
    onRateUsDone: onPressRateUsDone,
  });
};

export const openAppInStore = async () => {
  try {
    //TODO check if ios => open app store, if android => play store
    await Linking.openURL('https://google.com');
  } catch (err) {
    console.warn('openAppStore err', err);
  }
};
