import {COLORS} from '../../../constants/styles';
import {StarOutlined} from '../../../../assets/svg';
import React, {FC} from 'react';
import {TouchableOpacity, View, ViewProps, ViewStyle} from 'react-native';
import styles from './styles';

interface StarsProps {
  rating: number;
  setRating: (val: number) => void;
  style?: ViewStyle | ViewStyle[];
}

const Stars: FC<StarsProps & ViewProps> = ({rating, setRating, style}) => {
  return (
    <View style={[styles.starsWrap, style]}>
      {new Array(5).fill(null).map((_, index) => (
        <TouchableOpacity
          key={'star' + index}
          onPress={() => setRating(index + 1)}>
          <StarOutlined
            fill={rating >= index + 1 ? COLORS.LIGHT_YELLOW : COLORS.WHITE}
            style={styles.star}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default React.memo(Stars);
