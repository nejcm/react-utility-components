import * as React from 'react';
declare const lazyComponent: <Props extends object>(
  Component: React.ComponentType<Props>,
  LoaderComponent?: React.ReactNode,
) => Function;
export default lazyComponent;
