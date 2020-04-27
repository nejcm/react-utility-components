import {render} from '@testing-library/react';
import * as React from 'react';
import {Space} from '../index';

describe('Space', () => {
  test('renders with spacing', () => {
    const props = {
      className: 'custom-class',
      id: 'custom-id',
      margin: [10],
      padding: [5, '10rem'],
    };

    const {getByTestId} = render(
      <Space data-testid="target" {...props}></Space>,
    );

    const element = getByTestId('target');
    expect(element).toHaveClass(props.className);
    expect(element).toHaveAttribute('id', props.id);
    expect(element).toHaveStyle({
      margin: `${props.margin[0]}px`,
      padding: `${props.padding[0]}px ${props.padding[1]}`,
    });
  });

  test('renders with gutter', () => {
    const props = {
      gutter: [0, '1em'],
    };

    const {getByTestId} = render(
      <Space data-testid="target" {...props}>
        <div data-testid="child"></div>
        <div></div>
      </Space>,
    );

    const element = getByTestId('target');
    const child = getByTestId('child');
    expect(element).toHaveStyle({
      marginLeft: `-${props.gutter[1]}`,
      marginRight: `-${props.gutter[1]}`,
    });
    expect(child).toHaveStyle({
      padding: `${props.gutter[0]} ${props.gutter[1]}`,
    });
  });
});
