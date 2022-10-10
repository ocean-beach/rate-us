import React, {FC, useMemo} from 'react';
import {
  RecursiveArray,
  Text,
  TextStyle,
  ColorValue,
  TextProps,
} from 'react-native';

import {vw} from '../../helpers/layout-helper';
import {COLORS, FONT_SIZES} from '../../constants/styles';

interface TypographyProps {
  color?: ColorValue;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: TextStyle;
  numberOfLines?: number;
  size?: number;
}

const Typography: FC<TextProps & TypographyProps> = ({
  color = COLORS.BLACK,
  align = 'left',
  style,
  numberOfLines = 0,
  size = FONT_SIZES.BODY1,
  ellipsizeMode,
  children,
  ...props
}) => {
  const textStyle = useMemo<RecursiveArray<TextStyle>>(() => {
    return [
      {
        fontSize: size,
        textAlign: align,
        fontFamily: 'Montserrat',
        color,
      },
    ];
  }, [color, size, align]);

  return (
    <Text
      {...props}
      style={[textStyle, style]}
      numberOfLines={numberOfLines}
      maxFontSizeMultiplier={1.5}
      ellipsizeMode={ellipsizeMode ?? 'clip'}>
      {children}
    </Text>
  );
};

export default React.memo(Typography);
