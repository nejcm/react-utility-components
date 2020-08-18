import * as React from 'react';
export interface SizeProps {
  /**
   * Width. Accepts number in 'px' or measure in string (e.g. "1.5rem")
   */
  width?: string | number;
  /**
   * Height. Accepts number in 'px' or measure in string (e.g. "1.5rem")
   */
  height?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
}
declare const Size: React.FC<SizeProps>;
export default Size;
