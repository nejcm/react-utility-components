import * as React from 'react';
export interface SpaceProps {
  /**
   * Element padding. Accepts array of up to 4 numbers in 'px' or measures in string (e.g. "1.5rem"). Values correspond to 'padding: top right bottom left'.
   */
  padding?: Array<number | string>;
  /**
   * Element margin. Accepts array of up to 4 numbers in 'px' or measures in string (e.g. "1.5rem"). Values correspond to 'margin: top right bottom left'.
   */
  margin?: Array<number | string>;
  /**
   * Gutter / spacing applied to all first children. Accepts array of up to 2 numbers in 'px' or measures in string (e.g. "1.5rem"). Values correspond to vertical and horizontal spacing.
   */
  gutter?: Array<number | string>;
}
export declare function convertValues(array: Array<number | string>): string;
declare const Space: React.FC<SpaceProps>;
export default Space;
