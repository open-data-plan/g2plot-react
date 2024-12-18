import { render } from '@testing-library/react';
import React from 'react';
import FacetChart, { FacetChartProps } from '../../src/plots/facet';

describe('FacetChart', () => {
  test('should render without crashed', () => {
    const config: FacetChartProps = {
      padding: [0, 10, 10],
      appendPadding: [0, 0, 30, 20],
      type: 'rect',
      fields: ['cut'],
      cols: 3, // 超过3个换行
      data: [],
      axes: {},
      meta: {
        carat: {
          sync: true,
        },
        price: {
          sync: true,
        },
        clarity: {
          sync: true,
        },
      },
      eachView: (view, f) => {
        return {
          type: 'scatter',
          options: {
            data: f.data,
            xField: 'carat',
            yField: 'price',
            colorField: 'clarity',
            shape: 'circle',
            pointStyle: { fillOpacity: 0.3, stroke: null },
          },
        };
      },
    };
    const result = render(<FacetChart {...config} />);

    expect(result.container).toMatchSnapshot();
  });
});
