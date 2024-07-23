import React from 'react';
import { create } from 'react-test-renderer';
import MultiViewChart from '../../src/plots/multi-view';

describe('MultiViewChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<MultiViewChart views={[]} />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
