import { render } from '@testing-library/react';
import React from 'react';
import MixChart from '../../src/plots/mix';

describe('MixChart', () => {
  test('should render without crashed', () => {
    const result = render(<MixChart views={[]} />);

    expect(result.container).toMatchSnapshot();
  });
});
