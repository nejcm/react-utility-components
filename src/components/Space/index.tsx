import styled from '@emotion/styled';
import * as React from 'react';

export type SpaceType = Array<number | string>;

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  padding: SpaceType;
  margin: SpaceType;
  gutter: SpaceType;
}

const SpaceElement = styled(
  ({padding, margin, gutter, childGutter, ...rest}) => <div {...rest} />,
)`
  ${({padding, margin, gutter, childGutter}) => `
      ${padding && `padding: ${padding};`}
      ${margin && `margin: ${margin};`}
      ${
        gutter &&
        `margin: ${gutter};
        > * {
          padding: ${childGutter};
        }`
      }
    
    `}
`;

function convertValues(array: SpaceType, prefix: string = ''): string {
  return array
    .map((value: string | number) =>
      typeof value === 'number' && value !== 0
        ? `${prefix}${value}px`
        : `${prefix}${value}`,
    )
    .join(` `);
}

const Space: React.SFC<SpaceProps> = ({padding, margin, gutter, ...rest}) => {
  return (
    <SpaceElement
      padding={padding ? convertValues(padding) : null}
      margin={margin ? convertValues(margin) : null}
      gutter={gutter ? convertValues(gutter, '-') : null}
      childGutter={gutter ? convertValues(gutter) : null}
      {...rest}
    />
  );
};

export default Space;
