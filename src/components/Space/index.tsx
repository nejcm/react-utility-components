import styled from '@emotion/styled';
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

const SpaceElement = styled(
  ({padding, margin, gutter, childGutter, ...rest}) => <div {...rest} />,
)`
  ${({padding, margin, gutter, childGutter}): string => `
      ${padding ? `padding: ${padding};` : ''}
      ${margin ? `margin: ${margin};` : ''}
      ${
        gutter
          ? `margin-left: -${gutter}; margin-right: -${gutter};
        > * {
          padding: ${childGutter};
        }`
          : ''
      }
    `}
`;

export function convertValues(array: Array<number | string>): string {
  return array
    .map((value: string | number) =>
      typeof value === 'number' && value !== 0 ? `${value}px` : `${value}`,
    )
    .join(` `);
}

const Space: React.SFC<SpaceProps> = ({padding, margin, gutter, ...rest}) => {
  return (
    <SpaceElement
      padding={padding ? convertValues(padding.slice(0, 4)) : null}
      margin={margin ? convertValues(margin.slice(0, 4)) : null}
      gutter={gutter ? gutter[gutter.length - 1] : null}
      childGutter={gutter ? convertValues(gutter.slice(0, 2)) : null}
      {...rest}
    />
  );
};

export default Space;
