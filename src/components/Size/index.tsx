import styled from '@emotion/styled';
import {isDefined, measure2Css} from '@nejcm/js-helpers';
import * as React from 'react';

export interface SizeProps {
  /**
   * Width. Accepts number in 'px' or measure in string (e.g. "1.5rem")
   */
  width?: string | number;
  /**
   * Height. Accepts number in 'px' or measure in string (e.g. "1.5rem")
   */
  height?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
}

const SpaceElement = styled(
  ({
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    as: T = 'div',
    ...rest
  }) => <T {...rest} />,
)`
  ${({width, height, minWidth, maxWidth, minHeight, maxHeight}): string => `
      ${isDefined(width) ? `width: ${measure2Css(width)};` : ''}
      ${isDefined(height) ? `height: ${measure2Css(height)};` : ''}
      ${isDefined(minWidth) ? `min-width: ${measure2Css(minWidth)};` : ''}
      ${isDefined(maxWidth) ? `max-width: ${measure2Css(maxWidth)};` : ''}
      ${isDefined(minHeight) ? `min-height: ${measure2Css(minHeight)};` : ''}
      ${isDefined(maxHeight) ? `max-height: ${measure2Css(maxHeight)};` : ''}
    `}
`;

const Size: React.SFC<SizeProps> = (props) => <SpaceElement {...props} />;

export default Size;
