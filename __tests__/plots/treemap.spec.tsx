import React from 'react'
import { create } from 'react-test-renderer'
import TreemapChart from '../../src/plots/treemap'

describe('TreemapChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<TreemapChart data={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
