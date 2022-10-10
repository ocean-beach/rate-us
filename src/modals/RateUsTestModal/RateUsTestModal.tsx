import React, {FC} from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';

import styles from './styles';
import {ModalContainer} from '../../components';

interface RateUsControlModalProps {
  visible: boolean;
  onClose: () => void;
  style?: StyleProp<ViewStyle>;
}

const RateUsTestModal: FC<RateUsControlModalProps> = ({
  visible,
  onClose,
  style,
}) => (
  <ModalContainer visible={visible} onClose={onClose}>
    <View>
      <Text>RateUsTestModal</Text>
    </View>
  </ModalContainer>
);

export default RateUsTestModal;
