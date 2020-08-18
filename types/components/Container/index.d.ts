import * as React from 'react';
export declare const ContainerElement: import('styled-components').StyledComponent<
  ({width, padding, center, as: T, ...rest}: any) => JSX.Element,
  any,
  {},
  never
>;
export interface ContainerProps {
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
declare const Container: React.FC<ContainerProps>;
export default Container;
