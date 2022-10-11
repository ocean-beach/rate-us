import React from 'react';
import {View} from 'react-native';

import {MainButton} from '../../components';
import rateUsEventBus from '../../services/rateUsEventBus';
import {useRateUsTriggerHook} from '../../hooks/useRateUsTriggerHook';

import styles from './styles';

const Home = () => {
  useRateUsTriggerHook();

  const createPublicGame = () => {
    rateUsEventBus.trigger('createPublicGame');
  };
  const joinElseGame = () => {
    rateUsEventBus.trigger('joinSomeElseGame');
  };
  const inviteOthersToGame = () => {
    rateUsEventBus.trigger('inviteOthers');
  };

  const acceptInvite = () => {
    rateUsEventBus.trigger('acceptInvite');
  };

  return (
    <View style={styles.container}>
      <MainButton buttonStyle={styles.button} onPress={createPublicGame}>
        Create public game
      </MainButton>
      <MainButton buttonStyle={styles.button} onPress={joinElseGame}>
        Join someone else game
      </MainButton>
      <MainButton buttonStyle={styles.button} onPress={inviteOthersToGame}>
        Invite other users to game
      </MainButton>
      <MainButton buttonStyle={styles.button} onPress={acceptInvite}>
        Accept the invite
      </MainButton>
    </View>
  );
};

export default Home;
