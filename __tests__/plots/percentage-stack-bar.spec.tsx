import React from 'react'
import { create } from 'react-test-renderer'
import PercentageStackBarChart from '../../src/plots/percentage-stack-bar'

describe('PercentageStackBarChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <PercentageStackBarChart data={[]} stackField="x" />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
