import React from 'react'
import { create } from 'react-test-renderer'
import StackAreaChart from '../../src/plots/stack-area'

describe('StackAreaChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<StackAreaChart data={[]} stackField="x" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
