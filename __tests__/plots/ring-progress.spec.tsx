import React from 'react';
import { create } from 'react-test-renderer';
import RingProgressChart from '../../src/plots/ring-progress';

describe('RingProgressChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<RingProgressChart percent={0.8} />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
