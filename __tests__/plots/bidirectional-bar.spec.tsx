import { render } from '@testing-library/react';
import React from 'react';
import BidirectionalBarChart from '../../src/plots/bidirectional-bar';

describe('BidirectionalBarChart', () => {
  test('should render without crashed', () => {
    const result = render(<BidirectionalBarChart xField="a" yField={['b', 'c']} data={[]} />);

    expect(result.container).toMatchSnapshot();
  });
});
