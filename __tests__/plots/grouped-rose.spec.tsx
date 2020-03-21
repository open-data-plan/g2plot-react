import React from 'react'
import { create } from 'react-test-renderer'
import GroupedRoseChart from '../../src/plots/grouped-rose'

describe('GroupedRoseChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <GroupedRoseChart
        data={[]}
        groupField="x"
        radiusField="y"
        categoryField="z"
      />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
