import React, {ReactElement, useEffect, useState} from 'react';

import {rateUsEventBusService} from '../../services';
import {RateUsControlModal, RateUsTestModal} from '../../modals';

import {RATE_US_MODAL_VERSION} from '@env';

export interface RateUsModalProps {
  visible: boolean;
  onClose?: () => void;
  onRateUsDone?: () => void;
}

const initialRateUsModalProps = {
  visible: false,
  onClose: () => {},
  onRateUsDone: () => {},
};

const RateUsModalRenderer = (): ReactElement => {
  const [rateUsModalProps, setRateUsModalProps] = useState<RateUsModalProps>(
    initialRateUsModalProps,
  );

  const closeModal = () => {
    rateUsModalProps.onClose?.();
    setRateUsModalProps(initialRateUsModalProps);
  };

  useEffect(() => {
    const unsubscribeOpenModal = rateUsEventBusService.subscribe(
      'rateUsModal:open',
      (props: RateUsModalProps) => {
        setRateUsModalProps(props);
      },
    );

    const unsubscribeCloseModal = rateUsEventBusService.subscribe(
      'rateUsModal:close',
      closeModal,
    );

    return () => {
      unsubscribeOpenModal();
      unsubscribeCloseModal();
    };
  }, []);

  return RATE_US_MODAL_VERSION === 'test' ? (
    <RateUsTestModal {...rateUsModalProps} onClose={closeModal} />
  ) : (
    <RateUsControlModal {...rateUsModalProps} onClose={closeModal} />
  );
};

export default RateUsModalRenderer;
