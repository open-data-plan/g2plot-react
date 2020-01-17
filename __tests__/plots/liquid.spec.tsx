import React from 'react'
import { create } from 'react-test-renderer'
import LiquidChart from '../../src/plots/liquid'

describe('LiquidChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <LiquidChart data={[]} min={0} max={100} value={90} />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
