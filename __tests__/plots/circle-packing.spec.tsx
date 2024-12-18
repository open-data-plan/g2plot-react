import { render } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import CirclePackingChart from '../../src/plots/circle-packing';

describe('CirclePackingChart', () => {
  test('should render without crashed', async () => {
    const res = await axios.get('https://gw.alipayobjects.com/os/antfincdn/%24m0nDoQYqH/basic-packing.json');
    const result = render(
      <CirclePackingChart
        {...{
          autoFit: true,
          data: res.data,
          label: false,
          legend: false,
          hierarchyConfig: {
            sort: (a, b) => b.depth - a.depth,
          },
        }}
      />,
    );

    expect(result.container).toMatchSnapshot();
  });
});
