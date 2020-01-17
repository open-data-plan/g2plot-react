import React from 'react'
import { create } from 'react-test-renderer'
import GroupColumnChart from '../../src/plots/group-column'

describe('GroupColumnChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<GroupColumnChart data={[]} groupField="x" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
