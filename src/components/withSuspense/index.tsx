import * as React from 'react';

export interface WithSuspenseProps {
  /**
   * Lazy loaded component.
   */
  Component: React.LazyExoticComponent<React.ComponentType<unknown>>;
  /**
   * Loader component
   * Example:
   * () => (<div>Loading...</div>)
   * @default undefined
   */
  LoaderComponent?: React.ReactElement;
}

const withSuspense = <P extends WithSuspenseProps>(
  Component: React.LazyExoticComponent<React.ComponentType<unknown>>,
  LoaderComponent?: React.ReactElement,
): React.FC<P & WithSuspenseProps> => (
  props: WithSuspenseProps,
): React.ReactElement => (
  <React.Suspense fallback={LoaderComponent || null}>
    <Component {...(props as P)} />
  </React.Suspense>
);

export default withSuspense;

/*
const withSuspense = <Props extends object>(
  Component: React.ComponentType<Props>,
  LoaderComponent?: React.ReactNode,
): Function => {
  const lazy: React.FC<Props> = (props) => (
    <React.Suspense fallback={LoaderComponent || null}>
      <Component {...props} />
    </React.Suspense>
  );
  return lazy;
};

export default withSuspense;
*/
