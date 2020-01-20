import React from 'react'
import ReactDOM from 'react-dom'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import LineChart from '../../src/plots/line'

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

  test('test update config and data', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LineChart data={[]} />, div)

    ReactDOM.render(<LineChart data={[]} forceFit />, div)

    ReactDOM.render(<LineChart data={[{ x: 1 }]} forceFit />, div)

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
