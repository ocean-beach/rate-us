import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {MainButton} from '../../components';

const Home = () => {
  const navigation = useNavigation<any>();

  const goContactUs = () => {
    navigation.navigate('ContactUs');
  };
  return (
    <View style={styles.container}>
      <MainButton buttonStyle={styles.button}>Create public game</MainButton>
      <MainButton buttonStyle={styles.button}>
        Join someone else game
      </MainButton>
      <MainButton buttonStyle={styles.button}>
        Invite other users to game
      </MainButton>
      <MainButton buttonStyle={styles.button}>Accept the invite</MainButton>
      <MainButton buttonStyle={styles.button} onPress={goContactUs}>
        Go contact us
      </MainButton>
    </View>
  );
};

export default Home;
