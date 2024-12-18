import { render } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import HeatmapChart from '../../src/plots/heatmap';

describe('HeatmapChart', () => {
  test('should render without crashed', async () => {
    const res = await axios.get(
      'https://gw.alipayobjects.com/os/basement_prod/a719cd4e-bd40-4878-a4b4-df8a6b531dfe.json',
    );
    const result = render(
      <HeatmapChart
        {...{
          width: 650,
          height: 500,
          autoFit: false,
          data: res.data,
          xField: 'Month of Year',
          yField: 'District',
          colorField: 'AQHI',
          color: ['#174c83', '#7eb6d4', '#efefeb', '#efa759', '#9b4d16'],
          meta: {
            'Month of Year': {
              type: 'cat',
            },
          },
        }}
      />,
    );

    expect(result.container).toMatchSnapshot();
  });
});
