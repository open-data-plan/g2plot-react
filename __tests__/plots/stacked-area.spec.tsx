import React from 'react'
import { create } from 'react-test-renderer'
import StackedAreaChart from '../../src/plots/stacked-area'

describe('StackedAreaChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <StackedAreaChart label={{}} data={[]} stackField="x" />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
