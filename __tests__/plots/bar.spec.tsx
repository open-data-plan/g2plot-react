import { render } from '@testing-library/react';
import React from 'react';
import BarChart from '../../src/plots/bar';

describe('BarChart', () => {
  test('should render without crashed', () => {
    const result = render(<BarChart data={[]} xField="x" yField="y" />);

    expect(result.container).toMatchSnapshot();
  });
});
