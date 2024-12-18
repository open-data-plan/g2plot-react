import { render } from '@testing-library/react';
import React from 'react';
import BoxChart from '../../src/plots/box';

describe('BoxChart', () => {
  test('should render without crashed', () => {
    const result = render(<BoxChart data={[]} xField="x" yField="y" />);

    expect(result.container).toMatchSnapshot();
  });
});
