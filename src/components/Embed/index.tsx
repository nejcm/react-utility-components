import styled from '@emotion/styled';
import {measure2Css} from '@nejcm/js-helpers';
import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  height: string | number;
}

const ResponsiveEmbed = styled(({height, ...rest}: Props) => <div {...rest} />)`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  ${({height}) => height && `height: ${measure2Css(height)};`}

  &:before {
    display: block;
    content: '';
    padding-top: 56.25%;
  }

  > iframe,
  video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export default ResponsiveEmbed;
