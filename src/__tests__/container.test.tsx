import {render} from '@testing-library/react';
import * as React from 'react';
import {Container} from '../index';

describe('Container', () => {
  test('renders with props', () => {
    const props = {
      className: 'custom-class',
      id: 'custom-id',
      width: '10rem',
    };

    const {getByTestId} = render(<Container data-testid="target" {...props} />);

    const element = getByTestId('target');
    expect(element).toHaveClass(props.className);
    expect(element).toHaveAttribute('id', props.id);
    expect(element).toHaveStyle({
      maxWidth: `${props.width}`,
      marginLeft: `auto`,
      marginRight: `auto`,
    });
  });

  test('renders without centering', () => {
    const props = {
      padding: 5,
      center: false,
    };

    const {getByTestId} = render(<Container data-testid="target" {...props} />);

    const element = getByTestId('target');
    expect(element).toHaveStyle({
      paddingLeft: `${props.padding}px`,
      paddingRight: `${props.padding}px`,
    });
  });
});
