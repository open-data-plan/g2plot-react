import React, { createRef } from 'react'
import ReactDOM from 'react-dom'
import LineChart from '../../src/plots/line'
import { LineOptions, Plot as BasePlot } from '@antv/g2plot'

describe('LineChart', () => {
  test('render without crashed', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LineChart data={[]} />, div)
  })

  test('object ref should be assigned', () => {
    const ref = createRef<HTMLDivElement | null>()
    const chartRef = createRef<BasePlot<LineOptions> | null>()
    const div = document.createElement('div')
    ReactDOM.render(<LineChart data={[]} ref={ref} chartRef={chartRef} />, div)
    expect(ref.current).toBeDefined()
    expect(chartRef.current).toBeDefined()
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
    const div = document.createElement('div')

    ReactDOM.render(<LineChart data={null} />, div)

    ReactDOM.render(<LineChart data={[]} autoFit />, div)

    ReactDOM.render(<LineChart data={null} autoFit />, div)

    ReactDOM.render(<LineChart data={[{ x: 1 }]} autoFit />, div)
    ReactDOM.render(<LineChart autoFit data={[]} />, div)
    ReactDOM.render(<LineChart data={[]} autoFit />, div)

    ReactDOM.unmountComponentAtNode(div)
  })
})
