import { render } from '@testing-library/react';
import React from 'react';
import HistogramChart from '../../src/plots/histogram';

describe('HistogramChart', () => {
  test('should render without crashed', () => {
    const result = render(<HistogramChart data={[]} binField="x" />);

    expect(result.container).toMatchSnapshot();
  });
});
