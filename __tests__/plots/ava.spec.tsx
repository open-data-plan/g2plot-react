import React from 'react'
import ReactDOM from 'react-dom'
import { create } from 'react-test-renderer'
import AVAChart from '../../src/plots/ava'

describe('AVAChart', () => {
  test('should render without crashed', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AVAChart data={[]} />, div)

    ReactDOM.render(<AVAChart data={[{ f1: 'a', f2: 100 }]} />, div)
  })

  test('match snapshot', () => {
    const renderer = create(<AVAChart data={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
