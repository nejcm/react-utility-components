import * as React from 'react';
export declare const calculatePadding: (x: number, y: number) => string;
export interface EmbedProps {
  /**
   * Aspect ratio of x
   */
  aspectX?: number;
  /**
   * Aspect ratio of y
   */
  aspectY?: number;
}
declare const Embed: React.FC<EmbedProps>;
export default Embed;
