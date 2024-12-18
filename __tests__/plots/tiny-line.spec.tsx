import { render } from '@testing-library/react';
import React from 'react';
import TinyLineChart from '../../src/plots/tiny-line';

describe('TinyLineChart', () => {
  test('should render without crashed', () => {
    const result = render(<TinyLineChart data={[]} />);

    expect(result.container).toMatchSnapshot();
  });
});
