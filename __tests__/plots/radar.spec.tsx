import React from 'react'
import { create } from 'react-test-renderer'
import RadarChart from '../../src/plots/radar'

describe('RadarChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<RadarChart data={[]} angleField="X" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
