import { render } from '@testing-library/react';
import React from 'react';
import SankeyChart from '../../src/plots/sankey';

describe('SankeyChart', () => {
  test('should render without crashed', () => {
    const result = render(<SankeyChart sourceField="s" targetField="t" weightField="w" data={[]} />);

    expect(result.container).toMatchSnapshot();
  });
});
