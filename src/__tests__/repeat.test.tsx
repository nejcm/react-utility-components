import {render} from '@testing-library/react';
import * as React from 'react';
import {Repeat} from '../index';

describe('Repeat', () => {
  test('renders with props', () => {
    const props = {
      times: 5,
    };

    const {getByTestId} = render(
      <div data-testid={'parent'}>
        <Repeat {...props}>
          <span>Child</span>
        </Repeat>
      </div>,
    );

    const parent = getByTestId('parent');
    expect(parent.childElementCount).toBe(props.times);
  });
});
