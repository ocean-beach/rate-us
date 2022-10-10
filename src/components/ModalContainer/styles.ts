import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/styles';

export default StyleSheet.create({
  modalBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.GRAY,
  },
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    width: '90%',
    backgroundColor: COLORS.WHITE,
  },
});
