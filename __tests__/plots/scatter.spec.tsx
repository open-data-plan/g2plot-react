import { render } from '@testing-library/react';
import React from 'react';
import ScatterChart from '../../src/plots/scatter';

describe('ScatterChart', () => {
  test('should render without crashed', () => {
    const result = render(<ScatterChart data={[]} xField="x" yField="y" />);

    expect(result.container).toMatchSnapshot();
  });
});
