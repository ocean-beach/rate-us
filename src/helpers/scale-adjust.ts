import {Dimensions, PixelRatio} from 'react-native';
const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

// based on iphone 13s's scale
const iphone13Size = {
  height: 844,
  width: 390,
};

console.log({deviceWidth, deviceHeight});
export const vh = (height: number) =>
  PixelRatio.roundToNearestPixel(height / (iphone13Size.height / deviceHeight));

export const vw = (width: number) =>
  PixelRatio.roundToNearestPixel(width / (iphone13Size.width / deviceWidth));
