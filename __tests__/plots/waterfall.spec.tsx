import { render } from '@testing-library/react';
import React from 'react';
import WaterfallChart from '../../src/plots/waterfall';

describe('WaterfallChart', () => {
  test('should render without crashed', () => {
    const result = render(<WaterfallChart data={[]} xField="x" yField="y" />);

    expect(result.container).toMatchSnapshot();
  });
});
