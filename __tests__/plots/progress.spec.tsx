import { render } from '@testing-library/react';
import React from 'react';
import ProgressChart from '../../src/plots/progress';

describe('ProgressChart', () => {
  test('should render without crashed', () => {
    const result = render(<ProgressChart percent={0.8} />);

    expect(result.container).toMatchSnapshot();
  });
});
