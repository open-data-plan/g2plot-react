import { render } from '@testing-library/react';
import React from 'react';
import TinyColumnChart from '../../src/plots/tiny-column';

describe('TinyColumnChart', () => {
  test('should render without crashed', () => {
    const result = render(<TinyColumnChart data={[]} />);

    expect(result.container).toMatchSnapshot();
  });
});
