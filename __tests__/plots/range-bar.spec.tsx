import React from 'react'
import { create } from 'react-test-renderer'
import RangeBarChart from '../../src/plots/range-bar'

describe('RangeBarChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <RangeBarChart data={[]} label={{ visible: true }} />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
