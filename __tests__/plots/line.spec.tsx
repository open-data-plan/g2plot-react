import React from 'react'
import ReactDOM from 'react-dom'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import LineChart from '../../src/plots/line'
// import { LineConfig } from '@antv/g2plot'
// import BasePlot from '@antv/g2plot/lib/base/plot'

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

  test('test lifecycle', () => {
    let renderer: ReactTestRenderer

    act(() => {
      renderer = create(<LineChart data={[]} />)
    })

    const instance = renderer.root

    expect(instance.props.data).toEqual([])

    expect(renderer.toJSON).toMatchSnapshot('LineChart')

    act(() => {
      renderer.update(<LineChart data={[{ x: 1 }]} forceFit />)
    })

    expect(renderer.toJSON).toMatchSnapshot('LineChart')

    expect(instance.props.data).toEqual([{ x: 1 }])

    act(() => {
      renderer.unmount()
    })
  })
})
