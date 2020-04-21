import {render} from '@testing-library/react';
import * as React from 'react';
import {Space} from '../index';

describe('Space', () => {
  test('renders Space with props', () => {
    const props = {
      className: 'custom-class',
      id: 'custom-id',
      margin: [10],
      padding: [5, 10],
    };

    const {getByTestId} = render(
      <Space data-testid="target" {...props}></Space>,
    );

    const element = getByTestId('target');
    expect(element).toHaveClass(props.className);
    expect(element).toHaveAttribute('id', props.id);
    expect(element).toHaveStyle({
      margin: `${props.margin[0]}px`,
      padding: `${props.padding[0]}px ${props.padding[1]}px`,
    });
  });
});
