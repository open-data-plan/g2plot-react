import React from 'react';
import { create } from 'react-test-renderer';
import ViolinChart from '../../src/plots/violin';

describe('ViolinChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<ViolinChart xField="x" yField="y" data={[]} />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
