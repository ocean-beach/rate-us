import {StyleSheet} from 'react-native';
import {vw} from '../../helpers/layout-helper';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: vw(25),
  },
  closeBtn: {
    alignSelf: 'flex-end',
  },
  starsWrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  star: {
    marginHorizontal: 5,
  },
  normalStar: {
    marginBottom: vw(8),
  },
  blurredStar: {
    opacity: 0.5,
  },
  title: {
    fontWeight: '700',
    marginTop: vw(40),
    marginBottom: vw(20),
  },
  description: {
    lineHeight: vw(24),
    width: '90%',
  },
  rateUsBtn: {
    marginTop: vw(40),
    marginBottom: vw(30),
  },
  notYet: {
    textDecorationLine: 'underline',
    marginBottom: vw(5),
  },
});
