import { render } from '@testing-library/react';
import React from 'react';
import RingProgressChart from '../../src/plots/ring-progress';

describe('RingProgressChart', () => {
  test('should render without crashed', () => {
    const result = render(<RingProgressChart percent={0.8} />);

    expect(result.container).toMatchSnapshot();
  });
});
