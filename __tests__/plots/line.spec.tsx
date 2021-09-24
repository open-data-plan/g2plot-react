import React, { createRef } from 'react'
import ReactDOM from 'react-dom'
import { create } from 'react-test-renderer'
import LineChart from '../../src/plots/line'
import { LineOptions, Plot as BasePlot } from '@antv/g2plot'

describe('LineChart', () => {
  test('render without crashed', () => {
    let div = document.createElement('div')
    ReactDOM.render(<LineChart data={[]} />, div)
    ReactDOM.unmountComponentAtNode(div)
    div = null
  })

  test('object ref should be assigned', () => {
    const ref = createRef<HTMLDivElement | null>()
    const chartRef = createRef<BasePlot<LineOptions> | null>()
    const div = document.createElement('div')
    ReactDOM.render(<LineChart data={[]} ref={ref} chartRef={chartRef} />, div)
    expect(ref.current).toBeDefined()
    expect(chartRef.current).toBeDefined()
  })

  test('onReady should be called', () => {
    const onReady = (plot: BasePlot<LineOptions>) => {
      expect(plot).toBeDefined()
    }
    const div = document.createElement('div')
    ReactDOM.render(<LineChart data={[]} onReady={onReady} />, div)
  })

  test('function ref should be called', () => {
    // let chart
    const getChart = (instance) => {
      expect(instance).toBeTruthy()
    }
    const div = document.createElement('div')
    ReactDOM.render(<LineChart data={[]} chartRef={getChart} />, div)

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

    ReactDOM.render(<LineChart {...config} data={null} />, div)

    ReactDOM.render(<LineChart {...config} data={[]} autoFit />, div)

    ReactDOM.render(<LineChart {...config} data={null} autoFit />, div)

    ReactDOM.render(<LineChart {...config} autoFit />, div)
    ReactDOM.render(<LineChart {...config} autoFit data={[]} />, div)
    ReactDOM.render(<LineChart {...config} data={[]} autoFit />, div)

    ReactDOM.unmountComponentAtNode(div)
  })

  test('lifecycle', () => {
    const renderer = create(<LineChart data={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()

    renderer.unmount()
  })
})
