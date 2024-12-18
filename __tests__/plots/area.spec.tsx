import { render } from '@testing-library/react';
import React from 'react';
import AreaChart from '../../src/plots/area';

describe('AreaChart', () => {
  test('should render without crashed', () => {
    const result = render(<AreaChart data={[]} />);

    expect(result.container).toMatchSnapshot();
  });
});
