import React, {FC, PropsWithChildren} from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';

import styles from './styles';

interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  style?: StyleProp<ViewStyle>;
  closeOutside?: boolean;
}

const ModalContainer: FC<PropsWithChildren<ModalProps>> = ({
  visible,
  onClose = () => {},
  children,
  closeOutside = false,
  style,
}) => (
  <Modal animationType="fade" visible={visible}>
    <TouchableWithoutFeedback onPress={closeOutside ? onClose : () => {}}>
      <View style={styles.modalBackground}>
        {/* second touchable to prevent event propagation when pressing on modal children */}
        <TouchableWithoutFeedback>
          <View style={[styles.root, style]}>{children}</View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

export default React.memo(ModalContainer);
