import React from 'react'
import { create } from 'react-test-renderer'
import DualAxesChart from '../../src/plots/dual-axes'

describe('DualAxesChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <DualAxesChart data={[]} xField="x" yField={['y', 'z']} />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
