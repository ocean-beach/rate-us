import React, {FC, ReactNode} from 'react';
import {ViewStyle, TextStyle, TouchableOpacity} from 'react-native';

import Typography from '../Typography';
import {COLORS, FONT_SIZES} from '../../constants/styles';

import styles from './styles';

interface RoundButtonProps {
  onPress?: () => void;
  children: ReactNode;
  buttonStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  textColor?: string;
  backgroundColor?: string;
  disabled?: boolean;
}

const MainButton: FC<RoundButtonProps> = ({
  onPress,
  children,
  buttonStyle,
  textStyle,
  textColor = COLORS.WHITE,
  backgroundColor = COLORS.BLUE,
  disabled,
  ...props
}) => (
  <TouchableOpacity
    {...props}
    onPress={onPress}
    disabled={disabled}
    style={[styles.container, {backgroundColor}, buttonStyle]}>
    <Typography
      numberOfLines={1}
      size={FONT_SIZES.BUTTON}
      color={textColor}
      align="center"
      style={[styles.btnText, textStyle]}>
      {children}
    </Typography>
  </TouchableOpacity>
);

export default MainButton;
