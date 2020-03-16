import React from 'react'
import { create } from 'react-test-renderer'
import PercentStackedBarChart from '../../src/plots/percent-stacked-bar'

describe('PercentStackedBarChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<PercentStackedBarChart data={[]} stackField="x" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
