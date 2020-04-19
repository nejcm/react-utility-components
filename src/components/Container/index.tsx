import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {measure2Css} from '@nejcm/js-helpers';
import * as React from 'react';

const ContainerElement = styled(({width, padding, center, ...rest}) => (
  <div {...rest} />
))`
  position: relative;
  width: 100%;
  ${({width, padding, center}) => css`
    width: ${width ? measure2Css(width) : 'none'};
    ${center && 'margin-right: auto; margin-left: auto;'}
    ${padding &&
    `padding-left: ${measure2Css(padding)}; padding-right: ${measure2Css(
      padding,
    )};`}
  `}
`;

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  padding: boolean | string | number;
  width: string | number;
  center: boolean;
}

const Container: React.SFC<ContainerProps> = (props) => (
  <ContainerElement {...props} />
);

export default Container;
