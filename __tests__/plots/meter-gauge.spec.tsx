import React from 'react'
import { create } from 'react-test-renderer'
import MeterGaugeChart from '../../src/plots/meter-gauge'

describe('GaugeChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<MeterGaugeChart />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
