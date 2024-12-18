import { render } from '@testing-library/react';
import React from 'react';
import StockChart from '../../src/plots/stock';

describe('StockChart', () => {
  test('should render without crashed', () => {
    const result = render(<StockChart data={[]} xField="x" yField={['a', 'b', 'c', 'd']} />);

    expect(result.container).toMatchSnapshot();
  });
});
