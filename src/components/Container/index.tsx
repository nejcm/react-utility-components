import styled from '@emotion/styled';
import {isDefined, measure2Css} from '@nejcm/js-helpers';
import * as React from 'react';

export const ContainerElement = styled(
  ({width, padding, center, as: T = 'div', ...rest}) => <T {...rest} />,
)`
  position: relative;
  ${({width, padding, center}): string => `
    ${isDefined(width) ? `max-width: ${measure2Css(width)};` : ''}
    ${center ? 'margin-right: auto; margin-left: auto;' : ''}
    ${
      isDefined(padding)
        ? `padding-left: ${measure2Css(padding)}; padding-right: ${measure2Css(
            padding,
          )};`
        : ''
    }
  `}
`;

export interface ContainerProps /*extends React.HTMLAttributes<HTMLDivElement>*/ {
  /**
   * Container horizontal padding. Accepts number in 'px' or measure in string (e.g. "1.5rem")
   */
  padding?: string | number;
  /**
   * Container width. Accepts number in 'px' or string (e.g. "1.5rem")
   */
  width?: string | number;
  /**
   * Center container in parent element
   */
  center?: boolean;
}

const Container: React.SFC<ContainerProps> = ({center = true, ...rest}) => (
  <ContainerElement center={center} {...rest} />
);

export default Container;
