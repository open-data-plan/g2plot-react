import { render } from '@testing-library/react';
import React from 'react';
import RadarChart from '../../src/plots/radar';

describe('RadarChart', () => {
  test('should render without crashed', () => {
    const result = render(<RadarChart data={[]} xField="x" yField="y" />);

    expect(result.container).toMatchSnapshot();
  });
});
