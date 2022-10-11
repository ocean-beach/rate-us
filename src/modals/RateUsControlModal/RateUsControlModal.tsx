import React, {FC, useEffect, useState} from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextInput,
  Linking,
} from 'react-native';

import {MainButton, ModalContainer, Typography} from '../../components';
import {COLORS, FONT_SIZES} from '../../constants/styles';
import {Comment} from '../../../assets/svg';
import {vw} from '../../helpers/layout-helper';
import {usePrevious} from '../../hooks/usePrevious';

import styles from './styles';
import Stars from './Stars';

interface RateUsControlModalProps {
  visible: boolean;
  onClose: () => void;
  style?: StyleProp<ViewStyle>;
  onRateUsDone?: () => void;
}

const RateUsControlModal: FC<RateUsControlModalProps> = ({
  visible,
  onClose,
  style,
}) => {
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');

  const prevRating = usePrevious(rating);

  const closeModal = () => {
    onClose();
    clearRating();
  };

  const rateUs = () => {
    // TODO api call/action dispatch/whatever patch user profile with ({appRated: true, rating, feedback?: feedback})
    closeModal();
  };

  const remindLater = () => {
    // TODO call logEvent
    closeModal();
  };

  const clearRating = () => {
    setRating(0);
  };

  useEffect(() => {
    const openAppStore = async () => {
      try {
        await Linking.openURL('https://google.com');
      } catch (err) {
        console.warn('openAppStore err', err);
      }
    };
    if (rating > 3 && prevRating === 0) {
      rateUs();
      openAppStore();
    }
  }, [rating]);

  return (
    <ModalContainer visible={visible}>
      <View style={[style, styles.container]}>
        <View style={styles.oval} />
        <View style={styles.imageWrap}>
          <Comment size={vw(46)} />
        </View>
        <Typography
          style={styles.title}
          size={FONT_SIZES.TITLE2}
          align="center">
          Enjoying RacketPal?
        </Typography>
        <Typography
          style={styles.description}
          size={FONT_SIZES.BODY2}
          align="center">
          Tap a star to rate it on the App store
        </Typography>

        <Stars rating={rating} setRating={setRating} style={styles.stars} />

        {rating === 0 ? (
          <TouchableOpacity>
            <Typography
              size={FONT_SIZES.BODY2}
              align="center"
              style={styles.remindLater}
              color={COLORS.DARK_GRAY}
              onPress={remindLater}>
              Remind me later
            </Typography>
          </TouchableOpacity>
        ) : (
          <View style={styles.feedbackWrap}>
            <Typography
              size={FONT_SIZES.BODY2}
              align="left"
              color={COLORS.LIGHT_YELLOW}
              style={styles.anyFeedBackTitle}>
              Any feedback for us?
            </Typography>
            <TextInput
              style={styles.feedBackInput}
              multiline={true}
              numberOfLines={4}
              onChangeText={val => setFeedback(val)}
              value={feedback}
              placeholder={'Give us a feedback'}
            />
            <MainButton
              onPress={rateUs}
              buttonStyle={styles.submitBtn}
              backgroundColor={COLORS.LIGHT_YELLOW}>
              Submit
            </MainButton>
          </View>
        )}
      </View>
    </ModalContainer>
  );
};

export default React.memo(RateUsControlModal);
