import { render } from '@testing-library/react';
import React from 'react';
import TinyAreaChart from '../../src/plots/tiny-area';

describe('TinyAreaChart', () => {
  test('should render without crashed', () => {
    const result = render(<TinyAreaChart data={[]} />);

    expect(result.container).toMatchSnapshot();
  });
});
