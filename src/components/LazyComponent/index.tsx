import * as React from 'react';
import {Suspense} from 'react';

const lazyComponent = <Props extends object>(
  Component: React.ComponentType<Props>,
  LoaderComponent?: React.ReactNode,
) => {
  const lazy: React.SFC<Props> = (props) => (
    <Suspense fallback={LoaderComponent}>
      <Component {...props} />
    </Suspense>
  );
  return lazy;
};

export default lazyComponent;
