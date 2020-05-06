import React from 'react'
import { create } from 'react-test-renderer'
import ColumnLineChart from '../../src/plots/column-line'

describe('ColumnLineChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <ColumnLineChart xField="x" yField={['a', 'b']} data={[[], []]} />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
