import React from 'react'
import { create } from 'react-test-renderer'
import StackedRoseChart from '../../src/plots/stacked-rose'

describe('StackedRoseChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <StackedRoseChart
        stackField="x"
        radiusField="y"
        categoryField="z"
        data={[]}
      />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
