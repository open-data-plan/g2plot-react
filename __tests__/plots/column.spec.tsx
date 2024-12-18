import { render } from '@testing-library/react';
import React from 'react';
import ColumnChart from '../../src/plots/column';

describe('ColumnChart', () => {
  test('should render without crashed', () => {
    const result = render(<ColumnChart data={[]} xField="x" yField="y" />);

    expect(result.container).toMatchSnapshot();
  });
});
