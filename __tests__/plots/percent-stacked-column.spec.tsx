import React from 'react'
import { create } from 'react-test-renderer'
import PercentStackedColumnChart from '../../src/plots/percent-stacked-column'

describe('PercentStackedColumnChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <PercentStackedColumnChart data={[]} stackField="x" />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
