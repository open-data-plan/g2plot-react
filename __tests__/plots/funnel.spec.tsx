import React from 'react';
import { create } from 'react-test-renderer';
import FunnelChart from '../../src/plots/funnel';

describe('FunnelChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<FunnelChart data={[]} />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
