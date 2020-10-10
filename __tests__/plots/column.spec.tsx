import React from 'react'
import { create } from 'react-test-renderer'
import ColumnChart from '../../src/plots/column'

describe('ColumnChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<ColumnChart data={[]} xField="x" yField="y" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
