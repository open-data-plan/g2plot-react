import React from 'react'
import { create } from 'react-test-renderer'
import GroupedBarChart from '../../src/plots/grouped-bar'

describe('GroupBarChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<GroupedBarChart data={[]} groupField="x" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
