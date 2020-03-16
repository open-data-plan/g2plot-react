import React from 'react'
import { create } from 'react-test-renderer'
import GroupedColumnChart from '../../src/plots/grouped-column'

describe('GroupedColumnChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<GroupedColumnChart data={[]} groupField="x" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
