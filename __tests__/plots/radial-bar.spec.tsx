import { render } from '@testing-library/react';
import React from 'react';
import RadialBarChart from '../../src/plots/radial-bar';

describe('RadialBarChart', () => {
  test('should render without crashed', () => {
    const result = render(<RadialBarChart data={[]} />);

    expect(result.container).toMatchSnapshot();
  });
});
