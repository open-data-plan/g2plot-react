import React, { createRef } from 'react'
import ReactDOM from 'react-dom'
import LineChart from '../../src/plots/line'
import StateManagerProvider from '../../src/components/state-manager'
import { StateManager, LineConfig } from '@antv/g2plot'
import BasePlot from '@antv/g2plot/lib/base/plot'

describe('LineChart', () => {
  test('render without crashed', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LineChart data={[]} />, div)
  })

  test('object ref should be assigned', () => {
    const ref = createRef<HTMLDivElement | null>()
    const chartRef = createRef<BasePlot<LineConfig> | null>()
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

  test('state manager', () => {
    const div = document.createElement('div')
    const ref = createRef<StateManager>()
    ReactDOM.render(
      <StateManagerProvider ref={ref}>
        <LineChart
          data={[]}
          stateManager={{ setState: [], onStateChange: [] }}
        />
        <LineChart data={[]} />
      </StateManagerProvider>,
      div
    )

    expect(ref.current).toBeDefined()
  })

  test('test update config and data', () => {
    const div = document.createElement('div')
    const handleLineClick1 = () => {
      console.log(1)
    }
    const handleLineClick2 = () => {
      console.log(2)
    }
    ReactDOM.render(<LineChart data={null} />, div)

    ReactDOM.render(<LineChart data={[]} forceFit />, div)

    ReactDOM.render(<LineChart data={null} forceFit />, div)

    ReactDOM.render(<LineChart data={[{ x: 1 }]} forceFit />, div)
    ReactDOM.render(<LineChart forceFit />, div)
    ReactDOM.render(
      <LineChart
        data={[]}
        forceFit
        xAxis={{ visible: true }}
        events={{
          onLineClick: handleLineClick1,
        }}
      />,
      div
    )

    ReactDOM.render(
      <LineChart
        data={[]}
        forceFit
        xAxis={{ visible: true }}
        events={{
          onLineClick: handleLineClick2,
        }}
      />,
      div
    )

    ReactDOM.render(
      <LineChart
        data={[]}
        forceFit
        xAxis={{ visible: true }}
        events={{
          onLineClick: handleLineClick2,
        }}
      />,
      div
    )

    ReactDOM.unmountComponentAtNode(div)
  })
})
