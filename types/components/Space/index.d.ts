import * as React from 'react';
export declare type SpaceType = Array<number | string>;
export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: SpaceType;
  margin?: SpaceType;
  gutter?: SpaceType;
}
export declare function convertValues(
  array: SpaceType,
  prefix?: string,
): string;
declare const Space: React.SFC<SpaceProps>;
export default Space;
