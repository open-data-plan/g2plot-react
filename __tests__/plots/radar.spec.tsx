import React from 'react'
import { create } from 'react-test-renderer'
import RadarChart from '../../src/plots/radar'

describe('RadarChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<RadarChart data={[]} xField="x" yField="y" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
