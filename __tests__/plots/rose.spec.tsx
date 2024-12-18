import { render } from '@testing-library/react';
import React from 'react';
import RoseChart from '../../src/plots/rose';

describe('RoseChart', () => {
  test('should render without crashed', () => {
    const result = render(<RoseChart data={[]} xField="x" yField="y" />);

    expect(result.container).toMatchSnapshot();
  });
});
