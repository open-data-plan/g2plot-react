import React from 'react'
import { create } from 'react-test-renderer'
import PercentStackedAreaChart from '../../src/plots/percent-stacked-area'

describe('PercentStackedAreaChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <PercentStackedAreaChart label={{}} data={[]} stackField="x" />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
