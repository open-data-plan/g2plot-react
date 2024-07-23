import React from 'react';
import { create } from 'react-test-renderer';
import RoseChart from '../../src/plots/rose';

describe('RoseChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<RoseChart data={[]} xField="x" yField="y" />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
