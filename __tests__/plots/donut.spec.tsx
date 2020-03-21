import React from 'react'
import { create } from 'react-test-renderer'
import DonutChart from '../../src/plots/donut'

describe('DonutChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<DonutChart data={[]} angleField="X" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
