import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {measure2Css} from '@nejcm/js-helpers';
import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  width: string | number;
  height: string | number;
  minWidth: string | number;
  maxWidth: string | number;
  minHeight: string | number;
  maxHeight: string | number;
}

const Sizes = styled(
  ({
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    ...rest
  }: Props) => <div {...rest} />,
)`
  ${({width, height, minWidth, maxWidth, minHeight, maxHeight}) => css`
      ${width && `width: ${measure2Css(width)};`}
      ${height && `height: ${measure2Css(height)};`}
      ${minWidth && `min-width: ${measure2Css(minWidth)};`}
      ${maxWidth && `max-width: ${measure2Css(maxWidth)};`}
      ${minHeight && `min-height: ${measure2Css(minHeight)};`}
      ${maxHeight && `max-height: ${measure2Css(maxHeight)};`}
    `}
`;

export default Sizes;
