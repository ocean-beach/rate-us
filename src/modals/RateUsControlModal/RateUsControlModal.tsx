import React, {FC} from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';

import styles from './styles';
import {ModalContainer} from '../../components';

interface RateUsControlModalProps {
  visible: boolean;
  onClose: () => void;
  style?: StyleProp<ViewStyle>;
}

const RateUsControlModal: FC<RateUsControlModalProps> = ({
  visible,
  onClose,
  style,
}) => (
  <ModalContainer visible={visible} onClose={onClose}>
    <View>
      <Text>RateUsControlModal</Text>
    </View>
  </ModalContainer>
);

export default React.memo(RateUsControlModal);
