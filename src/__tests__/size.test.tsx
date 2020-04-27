import {render} from '@testing-library/react';
import * as React from 'react';
import {Size} from '../index';

describe('Size', () => {
  test('renders with props', () => {
    const props = {
      className: 'custom-class',
      id: 'custom-id',
      width: 500,
      height: '30rem',
      minWidth: '10pt',
      maxWidth: '1200px',
      minHeight: 20,
      maxHeight: '100vh',
    };

    const {getByTestId} = render(<Size data-testid="target" {...props} />);

    const element = getByTestId('target');
    expect(element).toHaveClass(props.className);
    expect(element).toHaveAttribute('id', props.id);
    expect(element).toHaveStyle({
      width: `${props.width}px`,
      height: `${props.height}`,
      minWidth: `${props.minWidth}`,
      maxWidth: `${props.maxWidth}`,
      minHeight: `${props.minHeight}px`,
      maxHeight: `${props.maxHeight}`,
    });
  });
});
