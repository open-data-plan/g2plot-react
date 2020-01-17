import React from 'react'
import { create } from 'react-test-renderer'
import PercentageStackAreaChart from '../../src/plots/percentage-stack-area'

describe('PercentageStackAreaChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <PercentageStackAreaChart data={[]} stackField="x" />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
