import * as React from 'react';
import Svg, {Path, Circle, Defs, LinearGradient, Stop} from 'react-native-svg';
import {FC} from 'react';
import {SvgProps} from 'react-native-svg/src/elements/Svg';

import {SvgComponentProps} from '../../src/types';

const MainStar: FC<SvgProps & SvgComponentProps> = props => {
  return (
    <Svg
      width={props.size ? (props.size * 75) / 80 : 75}
      height={props.size || 80}
      viewBox="0 0 75 80"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.954 50.037l16.985 9.806L17.45 79.74l-6.3-8.945-10.684-.861 11.487-19.897zM62.78 50.037l-16.985 9.806L57.282 79.74l6.3-8.945 10.685-.861L62.78 50.037z"
        fill="#1A324C"
      />
      <Circle
        cx={37.5145}
        cy={34.2407}
        r={30.5319}
        fill="#FFC303"
        stroke="#FFD15D"
        strokeWidth={6}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.514 45.306L27.046 48.65l-.055-10.99-6.415-8.923 10.435-3.448 6.503-8.859 6.505 8.859 10.434 3.448-6.415 8.923-.055 10.99-10.468-3.344z"
        fill="url(#paint0_linear_1_680)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_680"
          x1={-3.72387}
          y1={89.2733}
          x2={64.7858}
          y2={61.7982}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#1FB0F7" />
          <Stop offset={1} stopColor="#E70B63" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default MainStar;
