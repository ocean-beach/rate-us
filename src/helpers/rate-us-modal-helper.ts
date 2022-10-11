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
