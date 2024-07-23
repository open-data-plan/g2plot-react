import React from 'react';
import { create } from 'react-test-renderer';
import HistogramChart from '../../src/plots/histogram';

describe('HistogramChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<HistogramChart data={[]} binField="x" />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
