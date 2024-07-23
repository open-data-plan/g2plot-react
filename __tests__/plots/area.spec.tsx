import React from 'react';
import { create } from 'react-test-renderer';
import AreaChart from '../../src/plots/area';

describe('AreaChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<AreaChart data={[]} />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
