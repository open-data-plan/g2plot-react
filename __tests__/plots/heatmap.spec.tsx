import React from 'react'
import { create } from 'react-test-renderer'
import HeatmapChart from '../../src/plots/heatmap'

describe('HeatmapChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <HeatmapChart data={[]} colorField="x" legend={{ visible: false }} />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
