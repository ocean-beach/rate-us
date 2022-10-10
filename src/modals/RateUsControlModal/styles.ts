import {StyleSheet} from 'react-native';
import {vw} from '../../helpers/layout-helper';
import {COLORS, FONT_SIZES} from '../../constants/styles';

const circleSize = vw(84);

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: vw(25),
    paddingBottom: vw(30),
  },
  imageWrap: {
    position: 'absolute',
    top: -vw(4),
  },
  oval: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    position: 'absolute',
    top: -(circleSize / 4),
    backgroundColor: COLORS.WHITE,
  },
  title: {
    fontWeight: '600',
    marginTop: vw(55),
    marginBottom: vw(10),
  },
  description: {
    marginBottom: vw(25),
  },
  stars: {},
  remindLater: {
    marginTop: vw(60),
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  feedbackWrap: {
    width: '100%',
    marginTop: vw(20),
  },
  anyFeedBackTitle: {
    fontWeight: '700',
    marginBottom: vw(5),
  },
  feedBackInput: {
    fontSize: FONT_SIZES.BODY2,
    fontFamily: 'Montserrat',
    color: COLORS.DARK,
    borderRadius: 6,
    borderColor: COLORS.LIGHT_YELLOW,
    borderWidth: 1,
    padding: vw(10),
    height: vw(100),
    marginBottom: vw(20),
  },
  submitBtn: {
    paddingVertical: vw(12),
  },
});
