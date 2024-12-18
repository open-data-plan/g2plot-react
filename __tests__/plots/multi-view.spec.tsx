import { render } from '@testing-library/react';
import React from 'react';
import MultiViewChart from '../../src/plots/multi-view';

describe('MultiViewChart', () => {
  test('should render without crashed', () => {
    const result = render(<MultiViewChart views={[]} />);

    expect(result.container).toMatchSnapshot();
  });
});
