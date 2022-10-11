import React, {ReactElement, useEffect, useState} from 'react';

import {rateUsEventBusService} from '../../services';
import {RateUsControlModal, RateUsTestModal} from '../../modals';

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

  return (
    // <RateUsControlModal {...rateUsModalProps} onClose={closeModal} />
    <RateUsTestModal {...rateUsModalProps} onClose={closeModal} />
  );
};

export default RateUsModalRenderer;
