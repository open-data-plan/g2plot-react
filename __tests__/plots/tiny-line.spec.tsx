import React from 'react'
import { create } from 'react-test-renderer'
import TinyLineChart from '../../src/plots/tiny-line'

describe('TinyLineChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<TinyLineChart data={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
