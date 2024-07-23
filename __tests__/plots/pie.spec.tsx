import React from 'react';
import { create } from 'react-test-renderer';
import PieChart from '../../src/plots/pie';

describe('PieChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<PieChart data={[]} angleField="X" />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
