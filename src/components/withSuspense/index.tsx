/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

export interface WithSuspenseProps {
  /**
   * Lazy loaded component.
   */
  Component: React.LazyExoticComponent<React.ComponentType>;
  /**
   * Loader
   * Example: <>Loading...</>
   * @default undefined
   */
  Loader?: React.ReactElement | null;
}

const withSuspense = (
  Component: React.LazyExoticComponent<React.FC<any>>,
  Loader: React.ReactElement | null = null,
): React.FC<React.PropsWithRef<React.PropsWithChildren<any>>> => (
  props,
): React.ReactElement => (
  <React.Suspense fallback={Loader}>
    <Component {...props} />
  </React.Suspense>
);

export default withSuspense;
