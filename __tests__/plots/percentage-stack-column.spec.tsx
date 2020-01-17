import React from 'react'
import { create } from 'react-test-renderer'
import PercentageStackColumnChart from '../../src/plots/percentage-stack-column'

describe('PercentageStackColumnChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <PercentageStackColumnChart data={[]} stackField="x" />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
