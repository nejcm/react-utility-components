import {render} from '@testing-library/react';
import React from 'react';
import {Space} from '../index';

describe('Space', () => {
  test('renders Space with props', () => {
    const props = {
      className: 'custom-class',
      id: 'custom-id',
    };

    const {getByTestId} = render(<Space {...props}></Space>);

    const element = getByTestId('target');
    expect(element).toHaveClass(props.className);
    expect(element).toHaveAttribute('id', props.id);
  });
});
