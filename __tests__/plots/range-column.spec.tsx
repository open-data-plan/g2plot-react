import React from 'react'
import { create } from 'react-test-renderer'
import RangeColumnChart from '../../src/plots/range-column'

describe('RangeColumnChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <RangeColumnChart data={[]} label={{ visible: true }} />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
