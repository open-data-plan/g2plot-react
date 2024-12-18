import { render } from '@testing-library/react';
import React from 'react';
import ViolinChart from '../../src/plots/violin';

describe('ViolinChart', () => {
  test('should render without crashed', () => {
    const result = render(<ViolinChart xField="x" yField="y" data={[]} />);

    expect(result.container).toMatchSnapshot();
  });
});
