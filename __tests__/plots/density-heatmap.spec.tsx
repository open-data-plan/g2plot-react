import React from 'react'
import { create } from 'react-test-renderer'
import DensityHeatmapChart from '../../src/plots/density-heatmap'

describe('DensityHeatmapChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<DensityHeatmapChart data={[]} colorField="x" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
