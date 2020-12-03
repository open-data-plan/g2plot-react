import React from 'react'
import { create } from 'react-test-renderer'
import SankeyChart from '../../src/plots/sankey'

describe('SankeyChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <SankeyChart sourceField="s" targetField="t" weightField="w" data={[]} />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
