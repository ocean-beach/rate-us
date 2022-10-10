import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {FC} from 'react';
import {SvgProps} from 'react-native-svg/src/elements/Svg';

import {SvgComponentProps} from '../../src/types';

const StarOutlined: FC<SvgProps & SvgComponentProps> = props => {
  return (
    <Svg
      width={props.size ? (props.size * 35) / 32 : 35}
      height={props.size || 32}
      viewBox="0 0 35 32"
      fill="none"
      {...props}>
      <Path
        d="M17.493 25.147l-.344-.207-.345.207-9.07 5.467 2.407-10.302.092-.392-.305-.264-8.012-6.931 10.55-.894.4-.034.157-.37 4.126-9.72 4.125 9.72.157.37.4.034 10.55.894-8.012 6.931-.305.264.092.392 2.407 10.302-9.07-5.467z"
        stroke="#FFC34E"
        strokeWidth={1.33333}
      />
    </Svg>
  );
};

export default StarOutlined;
