import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {FC} from 'react';
import {SvgProps} from 'react-native-svg/src/elements/Svg';

import {SvgComponentProps} from '../../src/types';

const Star: FC<SvgProps & SvgComponentProps> = props => {
  return (
    <Svg
      width={props.size ? (props.size * 38) / 36 : 38}
      height={props.size || 36}
      viewBox="0 0 38 36"
      fill="none"
      {...props}>
      <Path
        opacity={0.67}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.458 31.996a1.5 1.5 0 00-1.089 0l-9.245 3.602a1.5 1.5 0 01-2.043-1.484l.57-9.906a1.5 1.5 0 00-.337-1.036l-6.283-7.68a1.5 1.5 0 01.78-2.4l9.597-2.52a1.5 1.5 0 00.881-.64l5.363-8.35a1.5 1.5 0 012.524 0l5.363 8.35a1.5 1.5 0 00.88.64l9.598 2.52a1.5 1.5 0 01.78 2.4l-6.283 7.68a1.5 1.5 0 00-.337 1.036l.57 9.906a1.5 1.5 0 01-2.043 1.484l-9.246-3.602z"
        fill="#FFC303"
      />
    </Svg>
  );
};

export default Star;
