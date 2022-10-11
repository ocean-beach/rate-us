import {useEffect, useRef} from 'react';
import {openRateUsModal} from '../helpers/rate-us-modal-helper';
import {useNavigation} from '@react-navigation/native';
import rateUsEventBus from '../services/rateUsEventBus';

export const useRateUsTriggerHook = () => {
  const navigation = useNavigation<any>();

  const unSubscribePositiveListenersRef = useRef<any>(null);
  const openRateUsTimeoutRef = useRef<number | null>(null);

  const fireOpenRateUsModal = () => {
    // TODO patch api call with {last date when modal shown}
    if (openRateUsTimeoutRef?.current) {
      clearTimeout(openRateUsTimeoutRef?.current);
    }
    openRateUsTimeoutRef.current = setTimeout(() => {
      openRateUsModal(() => navigation.navigate('ContactUs'));
    }, 1000);
  };

  const initListeners = () => {
    // TODO check if user haven't rated the app yet (e.g. if !user.appRated) && check all the conditions
    unSubscribePositiveListenersRef.current =
      rateUsEventBus.subscribeMultiEvents(
        [
          'createPublicGame',
          'joinSomeElseGame',
          'inviteOthers',
          'acceptInvite',
        ],
        fireOpenRateUsModal,
      );
  };

  useEffect(() => {
    initListeners();
    return () => {
      if (openRateUsTimeoutRef?.current) {
        clearTimeout(openRateUsTimeoutRef.current);
      }
      unSubscribePositiveListenersRef?.current();
    };
  }, []);
};
