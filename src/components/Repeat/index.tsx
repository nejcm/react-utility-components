import * as React from 'react';

export interface RepeatProps {
  times: number;
  children: React.ReactNode;
}

const Repeat: React.FC<RepeatProps> = ({children, times}) => {
  return <>{Array(times).fill(children)}</>;
};

export default Repeat;
