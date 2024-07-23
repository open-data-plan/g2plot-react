import React from 'react';
import { create } from 'react-test-renderer';
import GaugeChart from '../../src/plots/gauge';

describe('GaugeChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<GaugeChart percent={90} />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
