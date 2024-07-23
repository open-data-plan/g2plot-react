import React from 'react';
import { create } from 'react-test-renderer';
import RadialBarChart from '../../src/plots/radial-bar';

describe('RadialBarChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<RadialBarChart data={[]} />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
