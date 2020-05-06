import React from 'react'
import { create } from 'react-test-renderer'
import DualLineChart from '../../src/plots/dual-line'

describe('DualLineChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <DualLineChart xField="x" yField={['a', 'b']} data={[[], []]} />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
