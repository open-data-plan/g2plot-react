import React from 'react'
import { create } from 'react-test-renderer'
import StackedColumnChart from '../../src/plots/stacked-column'

describe('StackedColumnChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<StackedColumnChart data={[]} stackField="x" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
