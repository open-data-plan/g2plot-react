import { render } from '@testing-library/react';
import React from 'react';
import LiquidChart from '../../src/plots/liquid';

describe('LiquidChart', () => {
  test('should render without crashed', () => {
    const result = render(<LiquidChart percent={90} />);

    expect(result.container).toMatchSnapshot();
  });
});
