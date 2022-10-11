import React, {FC} from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';

import {MainButton, ModalContainer, Typography} from '../../components';
import {Close, MainStar, Star} from '../../../assets/svg';
import {vw} from '../../helpers/layout-helper';
import {FONT_SIZES} from '../../constants/styles';
import {logEventService} from '../../services';
import {EVENT_TYPES} from '../../services/logEvent';
import {openAppInStore} from '../../helpers/rate-us-modal-helper';

import styles from './styles';

interface RateUsControlModalProps {
  visible: boolean;
  onClose: () => void;
  style?: StyleProp<ViewStyle>;
  onRateUsDone?: () => void;
}

const RateUsTestModal: FC<RateUsControlModalProps> = ({
  visible,
  onClose,
  onRateUsDone = () => {},
  style,
}) => {
  const rateUs = () => {
    // TODO api call/action dispatch/whatever patch user profile with ({appRated: true})
    onClose();
    openAppInStore();
  };

  const giveFeedback = () => {
    onClose();
    onRateUsDone();
  };

  const skipModal = () => {
    logEventService.logEvent(EVENT_TYPES.RATE_US_SKIP_MODAL);
    // TODO api call/action dispatch/whatever patch user profile with date when modal seen
    onClose();
  };

  return (
    <ModalContainer visible={visible}>
      <View style={[style, styles.container]}>
        <TouchableOpacity onPress={skipModal} style={styles.closeBtn}>
          <Close size={vw(24)} />
        </TouchableOpacity>
        <View style={styles.starsWrap}>
          <Star size={vw(30)} style={[styles.star, styles.blurredStar]} />
          <Star size={vw(40)} style={[styles.star, styles.normalStar]} />
          <MainStar size={vw(76)} />
          <Star size={vw(40)} style={[styles.star, styles.normalStar]} />
          <Star size={vw(30)} style={[styles.star, styles.blurredStar]} />
        </View>
        <Typography
          style={styles.title}
          size={FONT_SIZES.TITLE1}
          align="center">
          Enjoying RacketPal?
        </Typography>
        <Typography style={styles.description} align="center">
          Your App Store review
        </Typography>
        <Typography style={styles.description} align="center" numberOfLines={2}>
          greatly helps spread the word and grow the racket sports community!
        </Typography>
        <MainButton buttonStyle={styles.rateUsBtn} onPress={rateUs}>
          Rate Us
        </MainButton>
        <TouchableOpacity onPress={giveFeedback}>
          <Typography style={styles.notYet}>
            Not yet? Give us feedback
          </Typography>
        </TouchableOpacity>
      </View>
    </ModalContainer>
  );
};

export default React.memo(RateUsTestModal);
