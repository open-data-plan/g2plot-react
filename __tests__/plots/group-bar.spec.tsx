import React from 'react'
import { create } from 'react-test-renderer'
import GroupBarChart from '../../src/plots/group-bar'

describe('GroupBarChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<GroupBarChart data={[]} groupField="x" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
