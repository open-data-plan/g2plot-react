/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Plot as BasePlot, LineOptions } from '@antv/g2plot';
import { act, render } from '@testing-library/react';
import React, { createRef } from 'react';
import { createRoot } from 'react-dom/client';
import LineChart from '../../src/plots/line';

let div;
let root;

beforeEach(() => {
  div = document.createElement('div');
  document.body.appendChild(div);
  act(() => {
    root = createRoot(div);
  });
});

afterEach(() => {
  act(() => {
    root.unmount();
  });
  document.body.removeChild(div);
  div = null;
});

describe('LineChart', () => {
  test('render without crashed', () => {
    act(() => {
      root.render(<LineChart data={[]} />);
    });
  });

  test('object ref should be assigned', () => {
    const ref = createRef<HTMLDivElement | null>();
    const chartRef = createRef<BasePlot<LineOptions> | null>();
    act(() => {
      root.render(<LineChart data={[]} ref={ref} chartRef={chartRef} />);
    });
    expect(ref.current).toBeDefined();
    expect(chartRef.current).toBeDefined();
  });

  test('onReady should be called', () => {
    const onReady = (plot: BasePlot<LineOptions>) => {
      expect(plot).toBeDefined();
    };
    act(() => {
      root.render(<LineChart data={[]} onReady={onReady} />);
    });
  });

  test('function ref should be called', () => {
    let chart;
    const getChart = (instance) => {
      chart = instance;
    };
    act(() => {
      root.render(<LineChart data={[]} chartRef={getChart} />);
    });

    expect(chart).toBeDefined();
  });

  test('test update config and data', () => {
    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
    ];
    const config = {
      data,
      xField: 'year',
      yField: 'value',
      smooth: true,
      meta: {
        value: {
          max: 15,
        },
      },
    };
    act(() => {
      // @ts-ignore
      root.render(<LineChart {...config} data={null} />);
    });

    act(() => {
      root.render(<LineChart {...config} data={[]} autoFit />);
    });

    act(() => {
      // @ts-ignore
      root.render(<LineChart {...config} data={null} autoFit />);
    });

    act(() => {
      root.render(<LineChart {...config} autoFit />);
    });
    act(() => {
      root.render(<LineChart {...config} autoFit data={[]} />);
    });
    act(() => {
      root.render(<LineChart {...config} data={[]} autoFit />);
    });
  });

  test('lifecycle', () => {
    const result = render(<LineChart data={[]} />);

    expect(result.container).toMatchSnapshot();

    result.unmount();
  });
});
