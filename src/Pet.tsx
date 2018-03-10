import * as React from 'react';

import Colors from './Colors';
import Bodys, { IBodyProps } from './Bodys';
import Patterns, { IPatternProps } from './Patterns';
import Eyes, { IEyeProps } from './Eyes';
import Mouths from './Mouths';

export { IBodyProps, IEyeProps, IPatternProps };
export { Colors, Eyes, Patterns, Bodys, Mouths };

export interface IPetProps {
  bgColor: string;
  bodyColor: string;
  eyeColor: string;
  patternColor: string;
  bellyColor: string;
  body: React.ReactChild;
  pattern: React.ReactChild;
  eye: React.ReactChild;
  mouth: React.ReactChild;
}

export default class Pet extends React.Component<IPetProps> {
  static defaultProps = {
    bgColor: Colors.浅粉,
    bodyColor: Colors.异光蓝,
    eyeColor: Colors.浅钴蓝,
    patternColor: Colors.春日青,
    bellyColor: Colors.橙灰,

    pattern: Patterns.斑马纹,
    body: Bodys.灰太狼,
    mouth: Mouths.小虎牙,
    eye: Eyes.小海盗,
  };

  render() {
    let {
      bgColor,
      bodyColor,
      eyeColor,
      patternColor,
      bellyColor,
      body,
      pattern,
      eye,
      mouth,
    } = this.props;

    let Body = (Bodys as any)[String(body)] || body;
    let Eye = (Eyes as any)[String(eye)] || eye;
    let Pattern = (Patterns as any)[String(pattern)] || pattern;
    let Mouth = (Mouths as any)[String(mouth)] || mouth;

    bgColor = (Colors as any)[bgColor] || bgColor;
    bodyColor = (Colors as any)[bodyColor] || bodyColor;
    eyeColor = (Colors as any)[eyeColor] || eyeColor;
    patternColor = (Colors as any)[patternColor] || patternColor;
    bellyColor = (Colors as any)[bellyColor] || bellyColor;

    return (
      <svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <g id="back-ground-cl">
          <rect fill={bgColor} width="640" height="480" />
          <ellipse
            opacity="0.1"
            cx="331.93"
            cy="418.82"
            rx="168.39"
            ry="32.01"
          />
        </g>
        <Body
          {...{
            bodyColor,
            pattern: <Pattern {...{ patternColor, bellyColor }} />,
          }}
        />
        <Mouth />
        <Eye {...{ bodyColor, eyeColor }} />
      </svg>
    );
  }
}
