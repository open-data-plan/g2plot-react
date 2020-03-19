import React from 'react'
import { create } from 'react-test-renderer'
import FanGaugeChart from '../../src/plots/fan-gauge'

describe('GaugeChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<FanGaugeChart stackField="X" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
