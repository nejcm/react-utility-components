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
declare const withSuspense: <P extends WithSuspenseProps>(
  Component: React.LazyExoticComponent<React.ComponentType<unknown>>,
  LoaderComponent?:
    | React.ReactElement<
        any,
        | string
        | ((
            props: any,
          ) => React.ReactElement<
            any,
            string | any | (new (props: any) => React.Component<any, any, any>)
          > | null)
        | (new (props: any) => React.Component<any, any, any>)
      >
    | undefined,
) => React.SFC<P & WithSuspenseProps>;
export default withSuspense;
