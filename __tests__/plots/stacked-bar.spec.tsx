import React from 'react'
import { create } from 'react-test-renderer'
import StackedBarChart from '../../src/plots/stacked-bar'

describe('StackedBarChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<StackedBarChart data={[]} stackField="x" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
