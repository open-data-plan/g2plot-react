import { render } from '@testing-library/react';
import React from 'react';
import GaugeChart from '../../src/plots/gauge';

describe('GaugeChart', () => {
  test('should render without crashed', () => {
    const result = render(<GaugeChart percent={90} />);

    expect(result.container).toMatchSnapshot();
  });
});
