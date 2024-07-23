import React from 'react';
import { create } from 'react-test-renderer';
import BidirectionalBarChart from '../../src/plots/bidirectional-bar';

describe('BidirectionalBarChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<BidirectionalBarChart xField="a" yField={['b', 'c']} data={[]} />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
