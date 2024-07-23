import React from 'react';
import { create } from 'react-test-renderer';
import WaterfallChart from '../../src/plots/waterfall';

describe('WaterfallChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<WaterfallChart data={[]} xField="x" yField="y" />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
