import * as React from 'react';
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  padding: boolean | string | number;
  width: string | number;
  center: boolean;
}
declare const Container: React.SFC<ContainerProps>;
export default Container;
