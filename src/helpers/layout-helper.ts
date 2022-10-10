import {Dimensions, PixelRatio} from 'react-native';
const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');
import DeviceInfo from 'react-native-device-info';

export const getIsTablet = () => DeviceInfo.isTablet();

// based on iphone 13s's scale
const iphone13Size = {
  height: 844,
  width: 390,
};

export const vh = (height: number) =>
  PixelRatio.roundToNearestPixel(height / (iphone13Size.height / deviceHeight));

export const vw = (width: number) =>
  PixelRatio.roundToNearestPixel(width / (iphone13Size.width / deviceWidth));
