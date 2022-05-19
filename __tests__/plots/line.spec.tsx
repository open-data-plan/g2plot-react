import React, { createRef } from 'react'
import { createRoot } from 'react-dom/client'
import { create } from 'react-test-renderer'
import LineChart from '../../src/plots/line'
import { LineOptions, Plot as BasePlot } from '@antv/g2plot'

describe('LineChart', () => {
  test('render without crashed', () => {
    let div = document.createElement('div')
    const root = createRoot(div)
    root.render(<LineChart data={[]} />)
    root.unmount()
    div = null
  })

  test('object ref should be assigned', () => {
    const ref = createRef<HTMLDivElement | null>()
    const chartRef = createRef<BasePlot<LineOptions> | null>()
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(<LineChart data={[]} ref={ref} chartRef={chartRef} />)
    root.unmount()
    expect(ref.current).toBeDefined()
    expect(chartRef.current).toBeDefined()
  })

  test('onReady should be called', () => {
    const onReady = (plot: BasePlot<LineOptions>) => {
      expect(plot).toBeDefined()
    }
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(<LineChart data={[]} onReady={onReady} />)
    root.unmount()
  })

  test('function ref should be called', () => {
    // let chart
    const getChart = (instance) => {
      expect(instance).toBeTruthy()
    }
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(<LineChart data={[]} chartRef={getChart} />)
    root.unmount()

    // expect(chart).toBeDefined()
  })

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
    ]
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
    }
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(<LineChart {...config} data={null} />)

    root.render(<LineChart {...config} data={[]} autoFit />)

    root.render(<LineChart {...config} data={null} autoFit />)

    root.render(<LineChart {...config} autoFit />)
    root.render(<LineChart {...config} autoFit data={[]} />)
    root.render(<LineChart {...config} data={[]} autoFit />)

    root.unmount()
  })

  test('lifecycle', () => {
    const renderer = create(<LineChart data={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()

    renderer.unmount()
  })
})
