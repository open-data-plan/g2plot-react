import React from 'react'
import ReactDOM from 'react-dom'
import BaseChart from '../../src/plots/base'
import { Line } from '@antv/g2plot'

let div: HTMLDivElement
beforeEach(() => {
  div = document.createElement('div')
})

describe('BaseChart', () => {
  test('mount without crashed', () => {
    const onMount = jest.fn()
    ReactDOM.render(<BaseChart chart={Line} data={[]} onMount={onMount} />, div)

    expect(onMount).toBeCalled()
  })
})
