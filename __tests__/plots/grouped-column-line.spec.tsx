import React from 'react'
import { create } from 'react-test-renderer'
import GroupedColumnLineChart from '../../src/plots/grouped-column-line'

describe('GroupedColumnLineChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <GroupedColumnLineChart xField="x" yField={['a', 'b']} data={[[], []]} />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
