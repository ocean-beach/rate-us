import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {FC} from 'react';
import {SvgProps} from 'react-native-svg/src/elements/Svg';

import {SvgComponentProps} from '../../src/types';

const Close: FC<SvgProps & SvgComponentProps> = props => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path d="M4.5 19.5l15-15M4.5 4.5l15 15" stroke="#000" strokeWidth={2} />
    </Svg>
  );
};

export default Close;
