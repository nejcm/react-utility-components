import styled from '@emotion/styled';
import * as React from 'react';

export const calculatePadding = (x: number, y: number): string =>
  `${((Math.round(y) / Math.round(x)) * 100).toFixed(2)}%`;

const ResponsiveEmbed = styled(({aspectX, aspectY, ...rest}) => (
  <div {...rest} />
))`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;

  &:before {
    display: block;
    content: '';
    padding-top: ${({aspectX, aspectY}): string =>
      calculatePadding(aspectX, aspectY)};
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

export interface EmbedProps {
  /**
   * Aspect ratio of x
   */
  aspectX?: number;
  /**
   * Aspect ratio of y
   */
  aspectY?: number;
}

const Embed: React.SFC<EmbedProps> = ({aspectX = 16, aspectY = 9, ...rest}) => (
  <ResponsiveEmbed aspectX={aspectX} aspectY={aspectY} {...rest} />
);

export default Embed;
