import * as React from 'react';

export interface RepeatProps {
  times: number;
  children: React.ReactNode;
}

const Repeat: React.SFC<RepeatProps> = ({children, times}) => {
  return <>{Array(times).map(() => children)}</>;
};

export default Repeat;
