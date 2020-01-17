import React from 'react'
import { create } from 'react-test-renderer'
import GaugeChart from '../../src/plots/gauge'

describe('GaugeChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <GaugeChart data={[]} value={90} range={[1, 100]} statistic={{}} />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
