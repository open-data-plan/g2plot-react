import { render } from '@testing-library/react';
import React from 'react';
import FunnelChart from '../../src/plots/funnel';

describe('FunnelChart', () => {
  test('should render without crashed', () => {
    const result = render(<FunnelChart data={[]} />);

    expect(result.container).toMatchSnapshot();
  });
});
