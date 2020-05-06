import React from 'react'
import { create } from 'react-test-renderer'
import StackedColumnLineChart from '../../src/plots/stacked-column-line'

describe('StackedColumnLineChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <StackedColumnLineChart xField="x" yField={['a', 'b']} data={[[], []]} />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
