import {render} from '@testing-library/react';
import * as React from 'react';
import {calculatePadding} from '../components/Embed';
import {ResponsiveEmbed} from '../index';

describe('ResponsiveEmbed', () => {
  test('renders with default props', () => {
    const props = {
      className: 'custom-class',
      id: 'custom-id',
    };
    const title = 'video';

    const {getByTestId, getByTitle} = render(
      <ResponsiveEmbed data-testid="target" {...props}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      </ResponsiveEmbed>,
    );

    const element = getByTestId('target');
    expect(element).toHaveClass(props.className);
    expect(element).toHaveAttribute('id', props.id);

    const video = getByTitle(title);
    expect(video).toBeDefined();
  });

  test('calculates padding', () => {
    const props = {
      aspectX: 4,
      aspectY: 3,
    };

    const padding = calculatePadding(props.aspectX, props.aspectY);
    expect(padding).toBe('75.00%');
  });
});
