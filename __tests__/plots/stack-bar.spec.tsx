import React from 'react'
import { create } from 'react-test-renderer'
import StackBarChart from '../../src/plots/stack-bar'

describe('StackBarChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<StackBarChart data={[]} stackField="x" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
