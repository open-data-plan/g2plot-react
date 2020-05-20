import React, { createRef } from 'react'
import ReactDOM from 'react-dom'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import LineChart from '../../src/plots/line'
import StateManagerProvider from '../../src/components/state-manager'
import { StateManager } from '@antv/g2plot'

describe('LineChart', () => {
  test('render without crashed', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LineChart data={[]} />, div)
  })

  test('onMount should be called', () => {
    const onMount = jest.fn()
    const div = document.createElement('div')
    ReactDOM.render(<LineChart data={[]} onMount={onMount} />, div)

    expect(onMount).toBeCalled()
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
    ReactDOM.render(<LineChart data={[]} />, div)

    ReactDOM.render(<LineChart data={[]} forceFit />, div)

    ReactDOM.render(<LineChart data={[{ x: 1 }]} forceFit />, div)

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

  test('test lifecycle', () => {
    let renderer: ReactTestRenderer

    act(() => {
      renderer = create(<LineChart data={[]} />)
    })

    const instance = renderer.root

    expect(instance.props.data).toEqual([])

    expect(renderer.toJSON()).toMatchSnapshot()

    act(() => {
      renderer.update(<LineChart data={[{ x: 1 }]} forceFit />)
    })

    expect(renderer.toJSON()).toMatchSnapshot()

    expect(instance.props.data).toEqual([{ x: 1 }])

    act(() => {
      renderer.unmount()
    })
  })
})
